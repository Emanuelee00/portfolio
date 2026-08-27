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
];
