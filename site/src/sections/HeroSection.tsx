import { User } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { ContactButton } from "../components/ContactButton";
import { navLinks } from "../content/data";

function Navbar() {
  return (
    <FadeIn
      as="nav"
      delay={0}
      y={-20}
      className="relative z-20 flex justify-between px-6 pt-6 md:px-10 md:pt-8"
    >
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-medium uppercase tracking-wider text-foreground/90 transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
        >
          {link.label}
        </a>
      ))}
    </FadeIn>
  );
}

function HeroPortrait() {
  return (
    <FadeIn
      delay={0.6}
      y={30}
      className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
    >
      <Magnet padding={150} strength={3}>
        <div className="flex aspect-[4/5] w-full items-center justify-center rounded-[40px] border border-border bg-surface">
          <User className="h-1/4 w-1/4 text-muted" strokeWidth={1} />
        </div>
      </Magnet>
    </FadeIn>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: "clip" }}>
      <Navbar />

      <div className="mt-6 overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-[8.5vw] font-black uppercase leading-none tracking-tight sm:text-[9vw] md:text-[9.75vw] lg:text-[10.5vw]">
            hi, i&apos;m emanuele
          </h1>
        </FadeIn>
      </div>

      <div className="relative flex flex-1 items-end justify-between pb-7 sm:pb-8 md:pb-10">
        <FadeIn
          delay={0.35}
          y={20}
          as="p"
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-foreground/80 sm:max-w-[220px] md:max-w-[260px]"
        >
          <span style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}>
            a full-stack developer who builds things end-to-end, from interface to infrastructure
          </span>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>

        <HeroPortrait />
      </div>
    </section>
  );
}
