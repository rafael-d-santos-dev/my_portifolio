import { Store, Rocket, Smartphone, type LucideIcon } from 'lucide-react';
import { SERVICES } from '@/lib/site-data';
import { SectionHeading } from '@/components/sections/section-heading';

const ICONS: Record<string, LucideIcon> = {
  Store,
  Rocket,
  Smartphone,
};

export function Services() {
  return (
    <section
      id="services"
      className="relative border-y border-border/60 bg-lavender-soft/60 py-20 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-40 mask-fade-b" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you"
          description="Three focused services I offer through my developing skills and portfolio, aimed at small businesses that need a clear, modern presence online."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Store;
            return (
              <article
                key={service.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-radial from-violet/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-violet text-white shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft text-pretty">
                  {service.description}
                </p>
                <span className="mt-5 font-mono text-xs font-semibold text-violet/70">
                  0{i + 1}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
