import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { LiveProjectButton } from "../components/LiveProjectButton";
import { projects } from "../content/data";

const rounded = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";
type Project = (typeof projects)[number];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className={`relative z-10 -mt-10 bg-background px-5 py-20 sm:-mt-12 sm:px-8 md:-mt-14 md:px-10 ${rounded}`}
    >
      <h2 className="hero-heading mb-16 text-center font-black uppercase sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
        Project
      </h2>

      <div className="mx-auto max-w-5xl">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="sticky top-24 h-[85vh] md:top-32" style={{ top: `${index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className={`flex h-full flex-col gap-6 border-2 border-foreground/15 bg-background p-4 sm:p-6 md:p-8 ${rounded}`}
      >
        <CardHeader project={project} />
        <CardImages />
      </motion.div>
    </div>
  );
}

function CardHeader({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <span className="font-black text-foreground/10" style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}>
          {project.number}
        </span>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">{project.category}</span>
          <span className="text-xl font-medium uppercase sm:text-2xl md:text-3xl">{project.name}</span>
        </div>
      </div>
      <LiveProjectButton href={project.liveUrl} />
    </div>
  );
}

function CardImages() {
  return (
    <div className="flex flex-1 gap-3">
      <div className="flex w-2/5 flex-col gap-3">
        <Placeholder style={{ height: "clamp(130px, 16vw, 230px)" }} />
        <Placeholder style={{ height: "clamp(160px, 22vw, 340px)" }} className="flex-1" />
      </div>
      <Placeholder className="w-3/5 flex-1" />
    </div>
  );
}

function Placeholder({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <div className={`flex items-center justify-center border border-foreground/10 bg-surface ${rounded} ${className}`} style={style}>
      <ImageIcon className="h-8 w-8 text-muted" strokeWidth={1.25} />
    </div>
  );
}
