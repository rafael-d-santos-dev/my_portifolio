import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { SITE } from '@/lib/site-data';

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60 mask-fade-b" />
        <div className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-radial from-violet/20 via-violet/5 to-transparent blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-radial from-orange/25 to-transparent blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div className="animate-reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/25 bg-white/70 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-violet shadow-soft backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            {SITE.eyebrow}
          </span>

          <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
            {SITE.role}
          </p>

          <h1 className="mt-3 font-display text-[2.4rem] font-semibold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.5rem]">
            I build websites that help{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-violet">small businesses</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 z-0 h-3 -rotate-1 rounded bg-orange/45"
              />
            </span>{' '}
            stand out.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
            Modern, responsive websites and user-friendly digital experiences
            designed to help small businesses strengthen their online presence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all duration-300 hover:bg-violet-deep hover:-translate-y-0.5 outline-none focus-visible:ring-2 focus-visible:ring-violet/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lavender"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:border-violet/40 hover:bg-white hover:text-violet outline-none focus-visible:ring-2 focus-visible:ring-violet/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lavender"
            >
              Let&apos;s Work Together
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft/80">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-violet" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
              </span>
              Available for freelance projects
            </span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-soft/30" />
            <span>{SITE.location}</span>
          </p>
        </div>

        {/* Abstract CSS visual */}
        <div
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-violet opacity-[0.07] blur-2xl" />
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-3">
            {Array.from({ length: 36 }).map((_, i) => {
              const isViolet = [4, 9, 14, 15, 20, 27, 28, 33].includes(i);
              const isOrange = [7, 22, 29].includes(i);
              const isRing = [2, 11, 18, 25, 31].includes(i);
              return (
                <div
                  key={i}
                  className={[
                    'rounded-xl border transition-colors',
                    isViolet
                      ? 'bg-violet/85 border-violet shadow-soft'
                      : isOrange
                        ? 'bg-orange/80 border-orange shadow-soft'
                        : isRing
                          ? 'border-violet/35 bg-white/40'
                          : 'border-violet/10 bg-white/30',
                  ].join(' ')}
                />
              );
            })}
          </div>

          {/* Floating orbs */}
          <div className="absolute -left-6 top-10 h-20 w-20 animate-float-slow rounded-2xl bg-gradient-warm shadow-lift" />
          <div className="absolute -right-4 bottom-16 h-24 w-24 animate-float-slower rounded-full border-2 border-violet/30 bg-white/50 backdrop-blur-sm shadow-soft" />
          <div className="absolute right-12 top-4 h-10 w-10 animate-float-slow rounded-lg bg-violet/90 shadow-soft" />

          {/* Orbiting ring */}
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-violet/30" />
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-orange shadow-soft" />
          </div>
        </div>
      </div>
    </section>
  );
}
