import { useI18n } from "../i18n";

interface ContactButtonProps {
  href?: string;
}

export function ContactButton({ href = "mailto:emanuele.ielmini@gmail.com" }: ContactButtonProps) {
  const { copy } = useI18n();
  return (
    <a
      href={href}
      className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
      style={{
        background: "linear-gradient(135deg, #18a355 0%, #22d472 100%)",
        boxShadow: "0 0 32px rgba(34, 212, 114, 0.25), 0 4px 12px rgba(24, 163, 85, 0.3)",
      }}
    >
      {copy.contactMe}
    </a>
  );
}
