import spaceImg from "../assets/projects/space.jpg";
import freshRouteImg from "../assets/projects/fresh-route.jpg";
import etfImg from "../assets/projects/etf.jpg";
import pacmanImg from "../assets/projects/pacman.jpg";

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
  number: string;
  name: string;
  blurb: string;
  tech: string[];
  context?: string;
  liveUrl?: string;
  codeUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Fresh Route",
    blurb:
      "Heat-aware pedestrian routing for Marseille — a 3D point-cloud model of the city that finds the coolest walking path on a hot day.",
    tech: ["React", "Three.js", "Python", "Routing engine"],
    liveUrl: "https://fresh-route.92-4-217-42.sslip.io",
    image: freshRouteImg,
  },
  {
    number: "02",
    name: "ETF Portfolio Analyzer",
    blurb:
      "Upload a portfolio spreadsheet and get a full risk-and-allocation breakdown plus a polished Excel report to take away.",
    tech: ["React", "FastAPI", "pandas"],
    liveUrl: "https://etf.92-4-217-42.sslip.io",
    codeUrl: "https://github.com/Emanuelee00/Project_ETF",
    image: etfImg,
  },
  {
    number: "03",
    name: "Pacman — Python in the browser",
    blurb:
      "The arcade classic written in Python, compiled to WebAssembly and running in the browser at native speed — no server, no install.",
    tech: ["Python", "Pygame", "WASM / pygbag"],
    liveUrl: "https://pacman.92-4-217-42.sslip.io",
    codeUrl: "https://github.com/Emanuelee00/Pacman",
    image: pacmanImg,
  },
  {
    number: "04",
    name: "3D Space Portfolio",
    blurb:
      "An earlier take on this site: a navigable galaxy where each star system is a project, built with React Three Fiber.",
    tech: ["React", "Three.js", "React Three Fiber"],
    liveUrl: "https://portfolio.92-4-217-42.sslip.io",
    image: spaceImg,
  },
  {
    number: "05",
    name: "Self-Hosted Deploy Platform",
    blurb:
      "The pipeline behind these projects: a git push builds a Docker image and Traefik serves it on its own HTTPS subdomain.",
    tech: ["Docker", "Traefik", "CI/CD", "Linux"],
    codeUrl: "https://github.com/Emanuelee00/portfolio",
  },
  {
    number: "06",
    name: "SANS CTF Write-ups",
    blurb:
      "Solutions from SANS capture-the-flag events — reversing, pwn, web and crypto — collected as sanitised notes.",
    tech: ["Reversing", "pwn", "Web", "Crypto"],
    codeUrl: "https://github.com/Emanuelee00/sans-ctf-writeups",
  },
  {
    number: "07",
    name: "Third-Party Risk Analysis (AI)",
    blurb:
      "Client project with CMA CGM and Mistral AI (hackathon). Details are confidential — happy to walk through it in an interview.",
    tech: ["Mistral workflows", "React", "LLM"],
    context: "CMA CGM × Mistral AI",
  },
  {
    number: "08",
    name: "Maritime Route Optimisation",
    blurb:
      "Client project with CMA CGM (graph-theory workshop). Details are confidential — happy to walk through it in an interview.",
    tech: ["Python", "Graph theory"],
    context: "CMA CGM",
  },
  {
    number: "09",
    name: "Inception",
    blurb:
      "A fully containerised infrastructure built from scratch for École 42: NGINX with TLS, WordPress and MariaDB in separate images, orchestrated with Docker Compose and hand-written Dockerfiles (no ready-made images). Source stays private under École 42's policy — I can walk through the architecture.",
    tech: ["Docker", "NGINX", "MariaDB"],
    context: "École 42",
  },
  {
    number: "10",
    name: "42 Core Projects (C & Python)",
    blurb:
      "École 42 systems and algorithms projects — Libft (a C standard-library reimplementation), Push_swap (sorting with a minimal instruction set), plus Python work on multithreading, RAG and constrained decoding. Low-level memory management and debugging throughout. Source stays private under École 42's policy.",
    tech: ["C", "Python", "Algorithms"],
    context: "École 42",
  },
  {
    number: "11",
    name: "Mosquito Movement Prediction",
    blurb:
      "A 48-hour hackathon MVP (ZEBOX × Qista): predicting mosquito-population movement in space and time from environmental data, pitched to investors at the end.",
    tech: ["Python", "Spatio-temporal modelling"],
    context: "ZEBOX × Qista",
  },
];
