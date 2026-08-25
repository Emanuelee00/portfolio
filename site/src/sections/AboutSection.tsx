import { Moon, Box, Blocks, Boxes } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { AnimatedText } from "../components/AnimatedText";
import { ContactButton } from "../components/ContactButton";
import { aboutText } from "../content/data";

const corners = [
  { icon: Moon, delay: 0.1, x: -80, position: "left-[1%] top-[4%] sm:left-[2%] md:left-[4%]", size: "w-[120px] sm:w-[160px] md:w-[210px]" },
  { icon: Box, delay: 0.25, x: -80, position: "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]", size: "w-[100px] sm:w-[140px] md:w-[180px]" },
  { icon: Blocks, delay: 0.15, x: 80, position: "right-[1%] top-[4%] sm:right-[2%] md:right-[4%]", size: "w-[120px] sm:w-[160px] md:w-[210px]" },
  { icon: Boxes, delay: 0.3, x: 80, position: "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]", size: "w-[130px] sm:w-[170px] md:w-[220px]" },
];

function CornerIcon({ icon: Icon }: { icon: typeof Moon }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full border border-border bg-surface">
      <Icon className="h-1/3 w-1/3 text-primary" strokeWidth={1.25} />
    </div>
  );
}

function CornerDecorations() {
  return corners.map((c) => (
    <FadeIn key={c.position} delay={c.delay} x={c.x} y={0} duration={0.9} className={`absolute ${c.position} ${c.size}`}>
      <CornerIcon icon={c.icon} />
    </FadeIn>
  ));
}

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen px-5 py-20 sm:px-8 md:px-10">
      <CornerDecorations />

      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={aboutText}
            className="max-w-[560px] font-medium leading-relaxed text-foreground/80 text-[clamp(1rem,2vw,1.35rem)]"
          />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
