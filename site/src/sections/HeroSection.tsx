import { FadeIn } from "../components/FadeIn";
import { ContactButton } from "../components/ContactButton";
import { useI18n, type Language } from "../i18n";

const languages: Language[] = ["fr", "en", "it", "es"];

function LanguageSelector() {
  const { language, setLanguage } = useI18n();
  return (
    <div className="language-switcher" role="group" aria-label="Language">
      {languages.map((code) => (
        <button
          key={code}
          type="button"
          className={language === code ? "is-active" : ""}
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

function Navbar() {
  const { copy } = useI18n();
  const navLinks = [
    { label: copy.nav[0], href: "#work" },
    { label: copy.nav[1], href: "#about" },
    { label: copy.nav[2], href: "#contact" },
  ];
  return (
    <FadeIn as="nav" delay={0} y={-20} className="relative z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/90">EI</span>
      <div className="flex items-center gap-4 sm:gap-8">
        <div className="hidden gap-6 sm:flex sm:gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-foreground sm:text-xs">
              {link.label}
            </a>
          ))}
        </div>
        <LanguageSelector />
      </div>
    </FadeIn>
  );
}

function HeroGlow() {
  return <div aria-hidden className="pointer-events-none absolute -left-40 -top-52 h-[680px] w-[680px] rounded-full" style={{ background: "radial-gradient(circle, rgba(34,212,114,0.16) 0%, rgba(34,212,114,0) 68%)" }} />;
}

export function HeroSection() {
  const { copy } = useI18n();
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <HeroGlow />
      <Navbar />
      <div className="relative flex flex-1 flex-col justify-center px-6 pb-16 md:px-10">
        <FadeIn delay={0.1} y={30}>
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary sm:text-xs">{copy.role}</span>
        </FadeIn>
        <FadeIn delay={0.14} y={20}>
          <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 sm:text-[11px]">
            Top 10 · SANS CTF European Championship
          </span>
        </FadeIn>
        <FadeIn delay={0.18} y={40}>
          <h1 className="mt-5 font-black uppercase leading-[0.86] tracking-[-0.03em]" style={{ fontSize: "clamp(3rem, 15vw, 12rem)" }}>
            <span className="block text-foreground">Emanuele</span>
            <span className="block text-primary sm:ml-[0.15em]">Ielmini</span>
          </h1>
        </FadeIn>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <FadeIn delay={0.32} y={20} as="p" className="max-w-md font-light leading-relaxed text-foreground/70">
            <span style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)" }}>{copy.intro}</span>
          </FadeIn>
          <FadeIn delay={0.44} y={20}><ContactButton /></FadeIn>
        </div>
      </div>
    </section>
  );
}
