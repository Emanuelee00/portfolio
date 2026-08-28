export type DiagramKind = "inception" | "qista" | "pipeline" | "langgraph";

const NODES: Record<DiagramKind, { label: string; accent?: boolean; dashed?: boolean }[]> = {
  inception: [{ label: "nginx · TLS", accent: true }, { label: "WordPress" }, { label: "MariaDB" }],
  qista: [{ label: "map UI" }, { label: "Express" }, { label: "FastAPI", accent: true }, { label: "OpenWeather", dashed: true }],
  pipeline: [{ label: "git push", accent: true }, { label: "build" }, { label: "Traefik" }, { label: "HTTPS" }],
  langgraph: [{ label: "research" }, { label: "draft" }, { label: "panel" }, { label: "gate", accent: true }, { label: "build" }],
};

const CAPTION: Record<DiagramKind, string> = {
  inception: "docker-compose",
  qista: "request flow",
  pipeline: "push → live",
  langgraph: "human-in-the-loop",
};

const W = 320;
const GAP = 12;
const H = 40;

export function ProjectDiagram({ kind }: { kind: DiagramKind }) {
  const nodes = NODES[kind];
  const nw = (W - GAP * (nodes.length + 1)) / nodes.length;
  const y = 92;
  const centerX = (i: number) => GAP + i * (nw + GAP) + nw / 2;
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label={`${kind} diagram`}>
      <text x={GAP} y="26" fill="#6b6b6b" fontFamily="monospace" fontSize="11" letterSpacing="1.5">
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
      {kind === "langgraph" && (
        <g>
          <path
            d={`M ${centerX(2)} ${y + H} C ${centerX(2)} ${y + H + 36}, ${centerX(1)} ${y + H + 36}, ${centerX(1)} ${y + H}`}
            fill="none"
            stroke="#2f6b48"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            markerEnd="url(#pd-arrow)"
          />
          <text x={(centerX(1) + centerX(2)) / 2} y={y + H + 44} textAnchor="middle" fill="#6b6b6b" fontFamily="monospace" fontSize="8.5">
            refine ×3
          </text>
        </g>
      )}
      <defs>
        <marker id="pd-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 10 5 0 10z" fill="#3a3a3a" />
        </marker>
      </defs>
    </svg>
  );
}
