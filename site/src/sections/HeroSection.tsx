import { FadeIn } from "../components/FadeIn";
import { ContactButton } from "../components/ContactButton";
import { navLinks } from "../content/data";

function Navbar() {
  return (
    <FadeIn
      as="nav"
      delay={0}
      y={-20}
      className="relative z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/90">EI</span>
      <div className="flex gap-6 sm:gap-10">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-foreground sm:text-xs"
          >
            {link.label}
          </a>
        ))}
      </div>
    </FadeIn>
  );
}

function HeroGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -left-40 -top-52 h-[680px] w-[680px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(34,212,114,0.16) 0%, rgba(34,212,114,0) 68%)" }}
    />
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <HeroGlow />
      <Navbar />
      <div className="relative flex flex-1 flex-col justify-center px-6 pb-16 md:px-10">
        <FadeIn delay={0.1} y={30}>
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary sm:text-xs">
            Full-Stack Developer · Creative Coder
          </span>
        </FadeIn>
        <FadeIn delay={0.18} y={40}>
          <h1
            className="mt-5 font-black uppercase leading-[0.86] tracking-[-0.03em]"
            style={{ fontSize: "clamp(3rem, 15vw, 12rem)" }}
          >
            <span className="block text-foreground">Emanuele</span>
            <span className="block text-primary sm:ml-[0.15em]">Ielmini</span>
          </h1>
        </FadeIn>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <FadeIn delay={0.32} y={20} as="p" className="max-w-md font-light leading-relaxed text-foreground/70">
            <span style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)" }}>
              I build things end-to-end — from the interface down to the container. Fast frontends,
              clean APIs, pipelines that just work.
            </span>
          </FadeIn>
          <FadeIn delay={0.44} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
        <FadeIn delay={0.56} y={16} className="mt-10 flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="font-mono text-[11px] tracking-wide text-muted">
            Available for freelance &amp; contract work
          </span>
        </FadeIn>
      </div>
    </section>
  );
}
