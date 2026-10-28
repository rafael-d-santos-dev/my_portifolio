import Link from 'next/link';
import { ArrowUpRight, Github, ExternalLink, Check } from 'lucide-react';
import { PROJECTS } from '@/lib/site-data';
import { SectionHeading } from '@/components/sections/section-heading';
import { ProjectPreview } from '@/components/sections/project-preview';
import { cn } from '@/lib/utils';

export function Work() {
  return (
    <section id="work" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects & concepts"
          description="A selection of website concepts and builds. Each card shows the structure, features, and goals behind the work."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const hasDemo = Boolean(project.demoUrl);
  const hasRepo = Boolean(project.repoUrl);

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift',
        index === 0 && 'lg:row-span-1'
      )}
    >
      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ProjectPreview kind={project.preview} className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/5 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-ink shadow-soft backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
          {project.category}
        </span>

        {project.concept && (
          <span className="absolute right-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-lavender shadow-soft backdrop-blur-sm">
            Portfolio Concept
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft text-pretty">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="inline-flex items-center gap-1.5 rounded-full bg-lavender-soft px-3 py-1 text-xs font-medium text-ink-soft"
            >
              <Check className="h-3 w-3 text-violet" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-white/60 px-2.5 py-1 text-xs font-medium text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3 pt-1">
          {hasDemo ? (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-violet px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-violet-deep hover:shadow-lift outline-none focus-visible:ring-2 focus-visible:ring-violet/70 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-violet/40 bg-violet/5 px-4 py-2.5 text-sm font-medium text-ink-soft/70"
              title="Demo URL will be added when available"
            >
              <ExternalLink className="h-4 w-4" />
              Demo link pending
            </span>
          )}

          {hasRepo ? (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/60 px-4 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-violet/40 hover:text-violet outline-none focus-visible:ring-2 focus-visible:ring-violet/70 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              <Github className="h-4 w-4" />
              Source Code
            </Link>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-ink/15 px-4 py-2.5 text-sm font-medium text-ink-soft/70"
              title="Repository URL will be added when available"
            >
              <Github className="h-4 w-4" />
              Repo link pending
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
