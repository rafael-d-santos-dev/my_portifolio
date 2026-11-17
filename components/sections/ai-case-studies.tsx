import Link from 'next/link';
import {
  AlertCircle,
  ArrowUpRight,
  Bot,
  ExternalLink,
  Info,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { AI_CASE_STUDIES, AI_CASE_STUDIES_DISCLOSURE } from '@/lib/site-data';
import { SectionHeading } from '@/components/sections/section-heading';

export function AiCaseStudies() {
  return (
    <section
      id="ai-case-studies"
      className="relative border-t border-border/60 bg-background py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="AI INTEGRATION CONCEPTS"
          title="AI Integration Case Studies"
          description="Explore how conversational assistants can be integrated into business websites to guide visitors, simplify decisions and improve customer interactions."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {AI_CASE_STUDIES.map((study) => (
            <article
              key={study.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-lavender-soft px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-ink">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-violet"
                  />
                  {study.category}
                </span>

                <span className="rounded-full bg-ink px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-lavender">
                  {study.badge}
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-violet text-white shadow-soft transition-transform duration-500 group-hover:scale-105"
                >
                  <Bot className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {study.name}
                </h3>
              </div>

              <dl className="mt-6 space-y-4 border-t border-border/60 pt-5">
                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-violet-deep">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    Business Problem
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft text-pretty">
                    {study.businessProblem}
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-violet-deep">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Proposed AI Solution
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft text-pretty">
                    {study.proposedSolution}
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-violet-deep">
                    <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                    Potential Business Benefit
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft text-pretty">
                    {study.potentialBenefit}
                  </dd>
                </div>
              </dl>

              <div className="mt-auto pt-7">
                <Link
                  href={study.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${study.ctaLabel}: ${study.name}`}
                  className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-full bg-violet px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-violet-deep hover:shadow-lift outline-none focus-visible:ring-2 focus-visible:ring-violet/70 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  {study.ctaLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 flex items-start gap-3 rounded-2xl border border-border/70 bg-lavender-soft/70 px-5 py-4 text-sm leading-relaxed text-ink-soft">
          <Info
            className="mt-0.5 h-4 w-4 shrink-0 text-violet-deep"
            aria-hidden="true"
          />
          <span>{AI_CASE_STUDIES_DISCLOSURE}</span>
        </p>
      </div>
    </section>
  );
}
