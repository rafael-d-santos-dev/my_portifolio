'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SITE, NAV_LINKS } from '@/lib/site-data';

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-lavender/85 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link
          href="#top"
          className="group flex items-center gap-2.5 rounded-md text-base font-semibold tracking-tight text-ink outline-none focus-visible:ring-2 focus-visible:ring-violet/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lavender"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-violet text-sm font-bold text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
            RD
          </span>
          <span className="font-display text-[1.05rem] font-semibold">
            {SITE.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-violet/10 hover:text-violet outline-none focus-visible:ring-2 focus-visible:ring-violet/70"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-lavender shadow-soft transition-all duration-300 hover:bg-violet hover:shadow-lift outline-none focus-visible:ring-2 focus-visible:ring-violet/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lavender"
          >
            Let&apos;s Work Together
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink transition-colors hover:bg-violet/10 md:hidden outline-none focus-visible:ring-2 focus-visible:ring-violet/70"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-border/60 bg-lavender/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-violet/10 hover:text-violet outline-none focus-visible:ring-2 focus-visible:ring-violet/70"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-1">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-3 text-base font-semibold text-lavender shadow-soft transition-colors hover:bg-violet"
            >
              Let&apos;s Work Together
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
