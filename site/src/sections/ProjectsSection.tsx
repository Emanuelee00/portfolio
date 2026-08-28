import { FadeIn } from "../components/FadeIn";
import { ProjectDiagram } from "../components/ProjectDiagram";
import { projects, type Project } from "../content/data";
import { useI18n } from "../i18n";

function ProjectMedia({ project }: { project: Project }) {
  if (!project.image) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface p-6">
        {project.diagram ? (
          <ProjectDiagram kind={project.diagram} />
        ) : (
          <span className="font-mono text-sm text-muted">{project.context ?? project.codeUrl?.replace("https://github.com/", "")}</span>
        )}
      </div>
    );
  }
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border">
      <img src={project.image} alt={project.name} loading="lazy" className="aspect-[16/10] w-full object-cover" />
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-14 w-14 bg-primary"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
      />
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const { copy } = useI18n();
  if (!project.liveUrl && !project.codeUrl) return null;
  const btn =
    "inline-flex items-center gap-2 rounded-full border border-foreground/25 px-5 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors";
  return (
    <div className="mt-2 flex flex-wrap gap-3">
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className={`${btn} hover:border-primary hover:text-primary`}>
          {copy.live}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </a>
      )}
      {project.codeUrl && (
        <a href={project.codeUrl} target="_blank" rel="noreferrer" className={`${btn} text-foreground/70 hover:border-foreground hover:text-foreground`}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.66 3.95.29.25.55.73.55 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          {copy.code}
        </a>
      )}
    </div>
  );
}

function ProjectInfo({ project, flip }: { project: Project; flip: boolean }) {
  const { copy } = useI18n();
  const url = project.liveUrl ?? project.codeUrl;
  const blurb = copy.blurbs[projects.indexOf(project)] ?? project.blurb;
  return (
    <div className={`flex flex-col gap-4 md:w-2/5 ${flip ? "md:items-end md:text-right" : ""}`}>
      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
        {url ? (
          <a href={url} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">
            {project.name}
          </a>
        ) : (
          project.name
        )}
      </h3>
      {project.award && (
        <span className="font-mono text-[11px] uppercase tracking-wider text-primary">★ {project.award}</span>
      )}
      <p className="max-w-md font-light leading-relaxed text-foreground/70">{blurb}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-muted">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <ProjectLinks project={project} />
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <FadeIn y={40} className="relative border-t border-foreground/10 py-12 md:py-16">
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-6 font-black ${flip ? "left-0 md:left-4" : "right-0 md:right-4"}`}
        style={{ fontSize: "clamp(5rem, 12vw, 11rem)", color: "rgba(242,242,242,0.045)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className={`relative flex flex-col gap-8 md:items-center md:gap-14 ${flip ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="md:w-3/5">
          <ProjectMedia project={project} />
        </div>
        <ProjectInfo project={project} flip={flip} />
      </div>
    </FadeIn>
  );
}

export function ProjectsSection() {
  const { copy } = useI18n();
  return (
    <section id="work" className="relative z-10 bg-background px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-baseline justify-between md:mb-20">
          <h2 className="font-black uppercase tracking-[-0.03em]" style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}>
            {copy.work}
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{copy.selected}</span>
        </div>
        {projects
          .filter((project) => !project.hidden)
          .map((project, i) => (
            <ProjectRow key={project.name} project={project} index={i} />
          ))}
      </div>
    </section>
  );
}
