import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet">
        <span className="h-px w-6 bg-violet/50" />
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
