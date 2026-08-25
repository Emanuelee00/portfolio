import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

function computeMagnetOffset(el: HTMLElement, e: MouseEvent, padding: number, strength: number) {
  const rect = el.getBoundingClientRect();
  const withinX = e.clientX >= rect.left - padding && e.clientX <= rect.right + padding;
  const withinY = e.clientY >= rect.top - padding && e.clientY <= rect.bottom + padding;
  if (!withinX || !withinY) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  return { x: (e.clientX - centerX) / strength, y: (e.clientY - centerY) / strength };
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0px)");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const offset = computeMagnetOffset(el, e, padding, strength);
      setIsActive(offset !== null);
      setTransform(offset ? `translate3d(${offset.x}px, ${offset.y}px, 0px)` : "translate3d(0px, 0px, 0px)");
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform, transition: isActive ? activeTransition : inactiveTransition, willChange: "transform" }}
    >
      {children}
    </div>
  );
}
