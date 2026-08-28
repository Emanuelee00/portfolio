export type DiagramKind = "inception" | "qista" | "pipeline";

const NODES: Record<DiagramKind, { label: string; accent?: boolean; dashed?: boolean }[]> = {
  inception: [{ label: "nginx · TLS", accent: true }, { label: "WordPress" }, { label: "MariaDB" }],
  qista: [{ label: "map UI" }, { label: "Express" }, { label: "FastAPI", accent: true }, { label: "OpenWeather", dashed: true }],
  pipeline: [{ label: "git push", accent: true }, { label: "build" }, { label: "Traefik" }, { label: "HTTPS" }],
};

const CAPTION: Record<DiagramKind, string> = {
  inception: "docker-compose",
  qista: "request flow",
  pipeline: "push → live",
};

const W = 320;
const GAP = 12;
const H = 40;

export function ProjectDiagram({ kind }: { kind: DiagramKind }) {
  const nodes = NODES[kind];
  const nw = (W - GAP * (nodes.length + 1)) / nodes.length;
  const y = 96;
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label={`${kind} diagram`}>
      <text x={GAP} y="28" fill="#6b6b6b" fontFamily="monospace" fontSize="11" letterSpacing="1.5">
        {CAPTION[kind].toUpperCase()}
      </text>
      {nodes.map((node, i) => {
        const x = GAP + i * (nw + GAP);
        const stroke = node.accent ? "#22d472" : "#3a3a3a";
        return (
          <g key={node.label}>
            {i > 0 && (
              <line x1={x - GAP} y1={y + H / 2} x2={x} y2={y + H / 2} stroke="#3a3a3a" strokeWidth="1.5" markerEnd="url(#pd-arrow)" />
            )}
            <rect x={x} y={y} width={nw} height={H} rx="7" fill="#1a1a1a" stroke={stroke} strokeWidth="1.5" strokeDasharray={node.dashed ? "3 3" : undefined} />
            <text x={x + nw / 2} y={y + H / 2 + 3} textAnchor="middle" fill="#f2f2f2" fontFamily="monospace" fontSize="9.5">
              {node.label}
            </text>
          </g>
        );
      })}
      <defs>
        <marker id="pd-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 10 5 0 10z" fill="#3a3a3a" />
        </marker>
      </defs>
    </svg>
  );
}
