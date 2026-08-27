import { FadeIn } from "../components/FadeIn";

const email = "emanuele.ielmini@gmail.com";
const github = "https://github.com/Emanuelee00";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-foreground/10 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn y={20}>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-primary">/ contact</span>
        </FadeIn>
        <FadeIn y={40} delay={0.1}>
          <h2
            className="mt-6 font-black uppercase leading-[0.9] tracking-[-0.03em] text-transparent"
            style={{ fontSize: "clamp(3rem, 12vw, 9rem)", WebkitTextStroke: "1.5px #f2f2f2" }}
          >
            Let&rsquo;s talk
          </h2>
        </FadeIn>
        <FadeIn y={20} delay={0.2} className="mt-10 flex flex-col gap-3 font-mono text-sm sm:flex-row sm:gap-8">
          <a href={`mailto:${email}`} className="text-primary transition-colors hover:text-primary-dark">
            {email}
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
            github.com/Emanuelee00
          </a>
        </FadeIn>
      </div>
      <footer className="mx-auto mt-24 flex max-w-5xl justify-between font-mono text-[11px] tracking-wide text-muted">
        <span>© 2026 Emanuele Ielmini</span>
        <span className="hidden sm:inline">React · TypeScript · Vite · Tailwind</span>
      </footer>
    </section>
  );
}
