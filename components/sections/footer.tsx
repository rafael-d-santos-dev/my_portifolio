import Link from 'next/link';
import { Github, ArrowUp, Mail } from 'lucide-react';
import { SITE, NAV_LINKS } from '@/lib/site-data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-lavender-soft/50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="#top"
              className="group flex items-center gap-2.5 text-base font-semibold tracking-tight text-ink"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-violet text-sm font-bold text-white shadow-soft">
                RD
              </span>
              <span className="font-display font-semibold">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Freelance web design &amp; development for small businesses.
              Available for remote projects worldwide.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft/70">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-violet"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft/70">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-violet"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </Link>
              </li>
              <li>
                <Link
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-violet"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-violet"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-soft/70">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <Link
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/60 px-3.5 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-violet/40 hover:text-violet"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
