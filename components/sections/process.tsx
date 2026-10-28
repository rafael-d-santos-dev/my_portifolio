import { PROCESS } from '@/lib/site-data';
import { SectionHeading } from '@/components/sections/section-heading';

export function Process() {
  return (
    <section className="relative border-y border-border/60 bg-lavender-soft/60 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Process"
          title="How I work"
          description="A simple, transparent path from first conversation to a polished, finished website."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item, i) => (
            <li
              key={item.step}
              className="group relative flex flex-col rounded-3xl border border-border/80 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="font-display text-5xl font-semibold leading-none text-violet/15 transition-colors duration-500 group-hover:text-violet/30">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>

              {i < PROCESS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 hidden h-px w-6 bg-violet/25 lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
