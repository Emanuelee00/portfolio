import { FadeIn } from "../components/FadeIn";
import { services } from "../content/data";

function ServiceRow({ service, delay }: { service: (typeof services)[number]; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="flex items-center gap-6 border-t border-foreground/10 py-8 last:border-b sm:py-10 md:py-12">
        <span className="font-black text-foreground/10" style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}>
          {service.number}
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium uppercase text-foreground" style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}>
            {service.name}
          </h3>
          <p className="max-w-2xl font-light leading-relaxed text-foreground/60" style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}>
            {service.description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-surface px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2 className="hero-heading mb-16 text-center font-black uppercase sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
        Services
      </h2>

      <div className="mx-auto max-w-5xl">
        {services.map((service, i) => (
          <ServiceRow key={service.number} service={service} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
