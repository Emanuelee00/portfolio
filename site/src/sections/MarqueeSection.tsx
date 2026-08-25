import { useEffect, useRef, useState } from "react";

function buildRow(count: number, prefix: string) {
  const base = Array.from({ length: count }, (_, i) => `${prefix}-${i + 1}`);
  return [...base, ...base, ...base];
}

const row1 = buildRow(11, "proj");
const row2 = buildRow(10, "work");

function MarqueeRow({
  tiles,
  offset,
  direction,
  className = "",
}: {
  tiles: string[];
  offset: number;
  direction: 1 | -1;
  className?: string;
}) {
  return (
    <div className={`flex gap-3 ${className}`} style={{ transform: `translateX(${direction * (offset - 200)}px)`, willChange: "transform" }}>
      {tiles.map((key, i) => (
        <Tile key={`${key}-${i}`} />
      ))}
    </div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-background pb-10 pt-24 sm:pt-32 md:pt-40">
      <MarqueeRow tiles={row1} offset={offset} direction={1} />
      <MarqueeRow tiles={row2} offset={offset} direction={-1} className="mt-3" />
    </section>
  );
}

function Tile() {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-2xl border border-border bg-surface font-mono text-xs text-muted"
      style={{ width: 420, height: 270 }}
    >
      {"// preview"}
    </div>
  );
}
