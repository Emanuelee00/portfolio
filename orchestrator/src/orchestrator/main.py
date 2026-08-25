import hashlib
import hmac
import logging
import os
import subprocess
from pathlib import Path

import yaml
from fastapi import FastAPI, HTTPException, Request

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("orchestrator")

app = FastAPI()

WORKSPACES_DIR = Path("/home/ubuntu/portfolio/deploy-platform/workspaces")
DYNAMIC_DIR = Path("/home/ubuntu/portfolio/deploy-platform/traefik/dynamic")
PROJECTS_FILE = Path("/home/ubuntu/portfolio/orchestrator/projects.yaml")
BASE_DOMAIN = "92-4-217-42.sslip.io"
WEBHOOK_SECRET = os.environ["WEBHOOK_SECRET"]

WORKSPACES_DIR.mkdir(parents=True, exist_ok=True)


def load_projects() -> dict:
    with open(PROJECTS_FILE) as f:
        return yaml.safe_load(f) or {}


def verify_signature(body: bytes, signature_header: str | None) -> None:
    if not signature_header or not signature_header.startswith("sha256="):
        raise HTTPException(status_code=403, detail="missing signature")
    expected = hmac.new(WEBHOOK_SECRET.encode(), body, hashlib.sha256).hexdigest()
    got = signature_header.removeprefix("sha256=")
    if not hmac.compare_digest(expected, got):
        raise HTTPException(status_code=403, detail="bad signature")


def run(cmd: list[str], cwd: Path | None = None) -> str:
    logger.info("$ %s", " ".join(cmd))
    result = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True)
    if result.stdout:
        logger.info(result.stdout)
    if result.returncode != 0:
        logger.error(result.stderr)
        raise RuntimeError(f"command failed: {' '.join(cmd)}\n{result.stderr}")
    return result.stdout


def write_traefik_route(slug: str, container_name: str, port: int) -> None:
    host = f"{slug}.{BASE_DOMAIN}"
    route = {
        "http": {
            "routers": {
                slug: {
                    "rule": f"Host(`{host}`)",
                    "entryPoints": ["websecure"],
                    "service": slug,
                    "tls": {"certResolver": "le"},
                }
            },
            "services": {
                slug: {
                    "loadBalancer": {"servers": [{"url": f"http://{container_name}:{port}"}]}
                }
            },
        }
    }
    DYNAMIC_DIR.mkdir(parents=True, exist_ok=True)
    out_path = DYNAMIC_DIR / f"{slug}.yml"
    out_path.write_text(yaml.safe_dump(route, sort_keys=False))
    logger.info("wrote route %s -> https://%s", out_path, host)


def deploy(clone_url: str, config: dict) -> str:
    slug = config["slug"]
    port = config["port"]
    branch = config.get("branch", "main")
    workspace = WORKSPACES_DIR / slug

    if workspace.exists():
        run(["git", "fetch", "origin"], cwd=workspace)
        run(["git", "reset", "--hard", f"origin/{branch}"], cwd=workspace)
    else:
        run(["git", "clone", "--branch", branch, clone_url, str(workspace)])

    image_tag = f"{slug}:latest"
    run(["docker", "build", "-t", image_tag, "."], cwd=workspace)

    container_name = f"proj-{slug}"
    subprocess.run(["docker", "rm", "-f", container_name], capture_output=True)
    run(
        [
            "docker",
            "run",
            "-d",
            "--name",
            container_name,
            "--network",
            "web",
            "--restart",
            "unless-stopped",
            image_tag,
        ]
    )

    write_traefik_route(slug, container_name, port)
    return f"https://{slug}.{BASE_DOMAIN}"


@app.get("/healthz")
def healthz():
    return {"status": "ok"}


@app.post("/webhook")
async def webhook(request: Request):
    body = await request.body()
    verify_signature(body, request.headers.get("X-Hub-Signature-256"))

    event = request.headers.get("X-GitHub-Event")
    if event == "ping":
        return {"status": "pong"}
    if event != "push":
        return {"status": "ignored", "reason": f"event {event} not handled"}

    payload = await request.json()
    repo_full_name = payload["repository"]["full_name"]
    clone_url = payload["repository"]["ssh_url"]
    ref = payload.get("ref", "")

    projects = load_projects()
    config = projects.get(repo_full_name)
    if config is None:
        logger.info("ignoring push for unregistered repo %s", repo_full_name)
        return {"status": "ignored", "reason": "repo not registered"}

    branch = config.get("branch", "main")
    if ref != f"refs/heads/{branch}":
        return {"status": "ignored", "reason": f"ref {ref} != {branch}"}

    try:
        url = deploy(clone_url, config)
    except Exception as exc:
        logger.exception("deploy failed for %s", repo_full_name)
        raise HTTPException(status_code=500, detail=str(exc)) from exc

    return {"status": "deployed", "repo": repo_full_name, "url": url}
