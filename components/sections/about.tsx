import { Code2, Layout, Accessibility, Smartphone } from 'lucide-react';
import { SITE } from '@/lib/site-data';
import { SectionHeading } from '@/components/sections/section-heading';

const VALUES = [
  {
    icon: Layout,
    title: 'Clean, modern design',
    text: 'Layouts that put your content first and feel current without being flashy.',
  },
  {
    icon: Smartphone,
    title: 'Responsive by default',
    text: 'Every site is built to work well on phones, tablets, and desktops.',
  },
  {
    icon: Accessibility,
    title: 'Accessible & readable',
    text: 'Good contrast, semantic structure, and keyboard-friendly navigation.',
  },
  {
    icon: Code2,
    title: 'Solid, maintainable code',
    text: 'Modern tools and clean code so the site is easy to update later.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="About"
              title="Thoughtful design. Practical solutions."
            />
            <div className="mt-7 max-w-md space-y-4 text-[1rem] leading-relaxed text-ink-soft text-pretty">
              <p>
                I&apos;m {SITE.name}, an aspiring freelance web designer and
                developer focused on building modern, responsive, and
                user-friendly websites.
              </p>
              <p>
                I&apos;m developing my portfolio through practical projects and
                enjoy creating clean, engaging digital experiences that help
                small businesses strengthen their online presence. My approach
                is straightforward: clear structure, honest communication, and a
                focus on what your visitors actually need.
              </p>
              <p>
                I&apos;m open to freelance opportunities and collaborations
                worldwide, and I treat every project as a chance to build
                something that genuinely works for the people who use it.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-500 hover:border-violet/40 hover:shadow-lift"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lavender-soft text-violet transition-colors duration-300 group-hover:bg-violet group-hover:text-white">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
