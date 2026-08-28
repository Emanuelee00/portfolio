import spaceImg from "../assets/projects/space.jpg";
import freshRouteImg from "../assets/projects/fresh-route.jpg";
import etfImg from "../assets/projects/etf.jpg";
import pacmanImg from "../assets/projects/pacman.jpg";
import qistaImg from "../assets/projects/qista.jpg";
import type { DiagramKind } from "../components/ProjectDiagram";

export const services = [
  {
    number: "01",
    name: "Web Development",
    description:
      "Full-stack web applications built with React, TypeScript, and modern tooling — from interactive frontends to the APIs behind them.",
  },
  {
    number: "02",
    name: "Backend & APIs",
    description:
      "Reliable server-side systems in Python and Node.js: REST APIs, background jobs, and data pipelines designed to be simple and easy to operate.",
  },
  {
    number: "03",
    name: "DevOps & Infrastructure",
    description:
      "Docker, reverse proxies, CI/CD and self-hosted deploy pipelines — shipping code from a push to a live, HTTPS-secured container.",
  },
  {
    number: "04",
    name: "Cybersecurity",
    description:
      "Security-minded engineering: least-privilege access, hardened services, and an instinct for what happens when things are exposed to the internet.",
  },
  {
    number: "05",
    name: "Automation & Tooling",
    description:
      "Scripts and small tools that remove repetitive work — from build pipelines to internal utilities that just need to work.",
  },
];

export type Project = {
  name: string;
  blurb: string;
  tech: string[];
  hidden?: boolean;
  award?: string;
  context?: string;
  diagram?: DiagramKind;
  liveUrl?: string;
  codeUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    name: "Inception",
    blurb:
      "A fully containerised infrastructure built from scratch for École 42: NGINX with TLS, WordPress and MariaDB in separate images, orchestrated with Docker Compose and hand-written Dockerfiles (no ready-made images). Source stays private under École 42's policy — I can walk through the architecture.",
    tech: ["Docker", "NGINX", "MariaDB"],
    context: "École 42",
    diagram: "inception",
  },
  {
    name: "42 Core Projects (C & Python)",
    blurb:
      "École 42 systems and algorithms projects — Libft (a C standard-library reimplementation), Push_swap (sorting with a minimal instruction set), plus Python work on multithreading, RAG and constrained decoding. Low-level memory management and debugging throughout. Source stays private under École 42's policy.",
    tech: ["C", "Python", "Algorithms"],
    context: "École 42",
  },
  {
    name: "Fresh Route",
    blurb:
      "Heat-aware pedestrian routing for Marseille — a 3D point-cloud model of the city that finds the coolest walking path on a hot day.",
    tech: ["React", "Three.js", "Python", "Routing engine"],
    liveUrl: "https://fresh-route.92-4-217-42.sslip.io",
    image: freshRouteImg,
  },
  {
    name: "LangGraph Idea Workflow",
    blurb:
      "A LangGraph pipeline that turns a topic into a validated product idea: web-search the real pains, draft an idea, sharpen it into one falsifiable claim, test it on a simulated customer panel, loop up to 3× — then pause at a human gate to build, refine or abandon. Not a website: run it locally with make install then make run (needs uv and an NVIDIA API key in .env — see the README).",
    tech: ["LangGraph", "Python", "LLM", "CLI"],
    diagram: "langgraph",
    codeUrl: "https://github.com/Emanuelee00/lang-graph-ideas-workflow",
  },
  {
    name: "ETF Portfolio Analyzer",
    blurb:
      "Upload a portfolio spreadsheet and get a full risk-and-allocation breakdown plus a polished Excel report to take away.",
    tech: ["React", "FastAPI", "pandas"],
    liveUrl: "https://etf.92-4-217-42.sslip.io",
    codeUrl: "https://github.com/Emanuelee00/Project_ETF",
    image: etfImg,
  },
  {
    name: "Pacman — Python in the browser",
    blurb:
      "The arcade classic written in Python, compiled to WebAssembly and running in the browser at native speed — no server, no install.",
    tech: ["Python", "Pygame", "WASM / pygbag"],
    liveUrl: "https://pacman.92-4-217-42.sslip.io",
    codeUrl: "https://github.com/Emanuelee00/Pacman",
    image: pacmanImg,
  },
  {
    name: "3D Space Portfolio (ex-portfolio)",
    blurb:
      "An earlier take on this site: a navigable galaxy where each star system is a project, built with React Three Fiber.",
    tech: ["React", "Three.js", "React Three Fiber"],
    liveUrl: "https://portfolio.92-4-217-42.sslip.io",
    image: spaceImg,
  },
  {
    name: "Self-Hosted Deploy Platform",
    blurb:
      "The pipeline behind these projects: a git push builds a Docker image and Traefik serves it on its own HTTPS subdomain.",
    tech: ["Docker", "Traefik", "CI/CD", "Linux"],
    diagram: "pipeline",
    codeUrl: "https://github.com/Emanuelee00/portfolio",
  },
  {
    name: "SANS CTF Write-ups",
    blurb:
      "Solutions from SANS capture-the-flag events — reversing, pwn, web and crypto — collected as sanitised notes.",
    tech: ["Reversing", "pwn", "Web", "Crypto"],
    award: "Top 10 · SANS CTF European Championship",
    codeUrl: "https://github.com/Emanuelee00/sans-ctf-writeups",
  },
  {
    name: "Third-Party Risk Analysis (AI)",
    blurb:
      "Client project with CMA CGM and Mistral AI (hackathon). Details are confidential.",
    tech: ["Mistral workflows", "React", "LLM"],
    context: "CMA CGM × Mistral AI",
    hidden: true,
  },
  {
    name: "Maritime Route Optimisation",
    blurb:
      "Client project with CMA CGM (graph-theory workshop). Details are confidential.",
    tech: ["Python", "Graph theory"],
    context: "CMA CGM",
    hidden: true,
  },
  {
    name: "Qista — Mosquito Risk Map",
    blurb:
      "A Europe-wide mosquito-risk surveillance map, built for Qista (a mosquito-trap company) at a ZEBOX hackathon. Three Dockerised services — a Leaflet map UI, an Express gateway and a FastAPI engine — grade ~1,300 regions A–E from weather, seasonality and species-observation data (Open-Meteo, GBIF, iNaturalist), with a live top-10 ranking.",
    tech: ["FastAPI", "Node / Express", "Docker", "Leaflet"],
    context: "ZEBOX × Qista",
    liveUrl: "https://qista.92-4-217-42.sslip.io",
    codeUrl: "https://github.com/Emanuelee00/qista_portfolio",
    image: qistaImg,
  },
];
