import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  const totalChars = text.replace(/ /g, "").length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((char, ci) => {
            const start = charIndex / totalChars;
            charIndex += 1;
            const end = charIndex / totalChars;
            return <Char key={ci} char={char} progress={scrollYProgress} range={[start, end]} />;
          })}
          {wi !== words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ opacity, position: "absolute", left: 0, top: 0 }}>{char}</motion.span>
    </span>
  );
}
