import { FadeIn } from "../components/FadeIn";
import { AnimatedText } from "../components/AnimatedText";
import { useI18n } from "../i18n";

export function AboutSection() {
  const { copy } = useI18n();
  return (
    <section id="about" className="relative border-t border-foreground/10 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn y={20}>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-primary">{copy.aboutLabel}</span>
        </FadeIn>
        <AnimatedText
          text={copy.about}
          className="mt-8 max-w-3xl font-light leading-relaxed text-foreground/80 text-[clamp(1.1rem,2.4vw,1.6rem)]"
        />
      </div>
    </section>
  );
}
