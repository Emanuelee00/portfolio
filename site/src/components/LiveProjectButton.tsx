interface LiveProjectButtonProps {
  href: string;
}

export function LiveProjectButton({ href }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-block rounded-full border-2 border-foreground/60 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground/10"
    >
      Live Project
    </a>
  );
}
