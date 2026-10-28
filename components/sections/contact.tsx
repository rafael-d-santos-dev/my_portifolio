import Link from 'next/link';
import { Github, Mail, ArrowUpRight, Globe, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/site-data';
import { SectionHeading } from '@/components/sections/section-heading';

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-violet/20 bg-gradient-violet px-6 py-14 shadow-lift sm:px-12 sm:py-16 lg:px-16">
          {/* decorative */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-orange/25 blur-2xl" />
            <div className="absolute right-8 top-8 h-3 w-3 animate-float-slow rounded-full bg-orange" />
            <div className="absolute left-12 bottom-10 h-2 w-2 animate-float-slower rounded-full bg-white/60" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Have a project in mind?"
                description="Tell me what you're building, and let's explore how I can help."
                className="[&_h2]:text-white [&_p]:text-white/85 [&_span]:text-white/80 [&_span_span]:bg-white/40"
              />

              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/80">
                Whether you need a brand-new website or a redesign of an
                existing one, I&apos;m happy to talk through the details with no
                obligation.
              </p>

              <Link
                href={`mailto:${SITE.email}`}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-violet shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange hover:text-ink outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-violet"
              >
                Let&apos;s Work Together
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70">
                  <Mail className="h-3.5 w-3.5" />
                  Email
                </p>
                <Link
                  href={`mailto:${SITE.email}`}
                  className="mt-3 inline-flex items-center gap-1.5 break-all text-base font-medium text-white underline-offset-4 transition-colors hover:text-orange hover:underline"
                >
                  {SITE.email}
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>

              <div className="h-px bg-white/15" />

              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70">
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </p>
                <Link
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 break-all text-base font-medium text-white underline-offset-4 transition-colors hover:text-orange hover:underline"
                >
                  github.com/rafael-d-santos-dev
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>

              <div className="h-px bg-white/15" />

              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70">
                  <Globe className="h-3.5 w-3.5" />
                  Availability
                </p>
                <p className="mt-3 text-base font-medium text-white">
                  {SITE.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
