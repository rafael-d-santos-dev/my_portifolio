import {
  SprayCan,
  Dumbbell,
  Sparkles,
  Calendar,
  Clock,
  UserCheck,
  SlidersHorizontal,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type PreviewKind = 'northstar' | 'novafit' | 'agendaflow' | 'apex';

interface ProjectPreviewProps {
  kind: PreviewKind;
  className?: string;
}

export function ProjectPreview({ kind, className }: ProjectPreviewProps) {
  if (kind === 'northstar') {
    return <NorthStarPreview className={className} />;
  }
  if (kind === 'novafit') {
    return <NovaFitPreview className={className} />;
  }
  if (kind === 'agendaflow') {
    return <AgendaFlowPreview className={className} />;
  }
  return <ApexPreview className={className} />;
}

function NorthStarPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-sky-50 via-white to-violet-50',
        className
      )}
      aria-hidden="true"
    >
      {/* faux browser bar */}
      <div className="flex items-center gap-1.5 border-b border-slate-200/70 bg-white/70 px-3 py-2 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-red-300" />
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        <span className="ml-2 h-3 flex-1 rounded-full bg-slate-100" />
      </div>

      <div className="flex flex-1 gap-3 p-4">
        {/* sidebar */}
        <div className="hidden w-24 flex-col gap-2 sm:flex">
          <div className="flex items-center gap-1.5">
            <span className="grid h-5 w-5 place-items-center rounded-md bg-sky-500/90 text-white">
              <SprayCan className="h-3 w-3" />
            </span>
            <span className="h-2 w-14 rounded bg-slate-300" />
          </div>
          <div className="mt-2 flex flex-col gap-1.5">
            {['Home', 'Services', 'Pricing', 'Contact'].map((label, i) => (
              <span
                key={label}
                className={cn(
                  'h-2 rounded',
                  i === 1 ? 'w-16 bg-sky-400/80' : 'w-12 bg-slate-200'
                )}
              />
            ))}
          </div>
        </div>

        {/* main */}
        <div className="flex flex-1 flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="h-3 w-28 rounded bg-slate-400" />
              <span className="h-2 w-20 rounded bg-slate-200" />
            </div>
            <span className="h-7 w-16 rounded-lg bg-sky-500/90" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 bg-white p-2"
              >
                <div className="mb-1.5 h-8 w-8 rounded-lg bg-sky-100" />
                <span className="block h-2 w-full rounded bg-slate-200" />
                <span className="mt-1 block h-1.5 w-2/3 rounded bg-slate-100" />
              </div>
            ))}
          </div>

          <div className="mt-auto rounded-lg border border-slate-200 bg-white p-2.5">
            <span className="block h-2 w-16 rounded bg-slate-300" />
            <div className="mt-1.5 flex gap-1.5">
              <span className="h-5 flex-1 rounded bg-slate-100" />
              <span className="h-5 w-12 rounded-lg bg-sky-500/90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NovaFitPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-violet-950 via-ink to-violet-900 text-white',
        className
      )}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-orange text-ink">
            <Dumbbell className="h-3 w-3" />
          </span>
          <span className="h-2.5 w-16 rounded bg-white/30" />
        </div>
        <div className="flex gap-1.5">
          {['Classes', 'Plans', 'Schedule'].map((l, i) => (
            <span
              key={l}
              className={cn(
                'h-2 rounded',
                i === 0 ? 'w-10 bg-orange/80' : 'w-8 bg-white/20'
              )}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-orange/20 px-2 py-0.5">
            <Sparkles className="h-2.5 w-2.5 text-orange" />
            <span className="h-1.5 w-10 rounded bg-orange/70" />
          </span>
          <span className="h-1.5 w-8 rounded bg-white/30" />
          <span className="h-1.5 w-8 rounded bg-white/30" />
        </div>

        <div className="flex flex-col gap-1">
          <span className="h-4 w-3/4 rounded bg-white/70" />
          <span className="h-2 w-1/2 rounded bg-white/30" />
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          {['Yoga', 'HIIT', 'Strength', 'Cardio'].map((l, i) => (
            <span
              key={l}
              className={cn(
                'h-6 rounded-md',
                i === 1 ? 'bg-orange/90' : 'bg-white/15'
              )}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[
            { t: 'Basic', a: false },
            { t: 'Pro', a: true },
          ].map((p) => (
            <div
              key={p.t}
              className={cn(
                'rounded-lg border p-2.5',
                p.a
                  ? 'border-orange/60 bg-orange/15'
                  : 'border-white/15 bg-white/5'
              )}
            >
              <span
                className={cn(
                  'block h-2 w-10 rounded',
                  p.a ? 'bg-orange' : 'bg-white/40'
                )}
              />
              <span className="mt-1.5 block h-3 w-14 rounded bg-white/60" />
              <span className="mt-1 block h-1.5 w-full rounded bg-white/20" />
              <span className="mt-0.5 block h-1.5 w-2/3 rounded bg-white/20" />
              <span
                className={cn(
                  'mt-2 block h-5 w-full rounded-md',
                  p.a ? 'bg-orange' : 'bg-white/20'
                )}
              />
            </div>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-7 gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                'h-8 rounded',
                i % 2 === 0 ? 'bg-white/15' : 'bg-violet/40'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AgendaFlowPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[#1c182b] via-[#241f38] to-[#151222] text-white',
        className
      )}
      aria-hidden="true"
    >
      {/* Top Application / Portal Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-3.5 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-violet text-white shadow-sm">
            <Calendar className="h-3 w-3" />
          </span>
          <span className="text-[0.72rem] font-semibold tracking-wide text-white/90">
            AgendaFlow
          </span>
          <span className="hidden items-center gap-1 rounded bg-white/10 px-1.5 py-0.5 text-[0.62rem] font-medium text-white/70 sm:inline-flex">
            <SlidersHorizontal className="h-2.5 w-2.5 text-orange" />
            Executive & Medical
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-violet/20 px-2 py-0.5 text-[0.62rem] font-medium text-violet-soft text-purple-200">
            Step 3 of 7
          </span>
          <span className="hidden rounded bg-emerald-500/20 px-1.5 py-0.5 text-[0.62rem] font-medium text-emerald-300 sm:inline-block">
            Admin Sync Live
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-3.5">
        {/* Step Progress Line */}
        <div className="flex items-center gap-1">
          {['Service', 'Staff', 'Time', 'Client', 'Confirm'].map((step, i) => (
            <div key={step} className="flex flex-1 items-center gap-1">
              <span
                className={cn(
                  'h-1.5 flex-1 rounded-full transition-all',
                  i <= 2 ? 'bg-violet' : 'bg-white/15'
                )}
              />
            </div>
          ))}
        </div>

        {/* Two column visual interface */}
        <div className="grid flex-1 grid-cols-12 gap-2 pt-1">
          {/* Calendar & Slots (Left side, 7 cols) */}
          <div className="col-span-12 flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-2.5 sm:col-span-7">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-orange" />
                  <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-white/80">
                    Select Date & Time
                  </span>
                </div>
                <span className="text-[0.65rem] font-medium text-white/50">
                  Oct 2026
                </span>
              </div>

              {/* Mini Calendar Week */}
              <div className="mt-2 grid grid-cols-7 gap-1 text-center">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <span
                    key={i}
                    className="text-[0.58rem] font-medium text-white/40"
                  >
                    {day}
                  </span>
                ))}
                {[12, 13, 14, 15, 16, 17, 18].map((d, i) => (
                  <span
                    key={d}
                    className={cn(
                      'grid h-6 place-items-center rounded-md text-[0.65rem] font-medium transition-all',
                      i === 3
                        ? 'bg-violet text-white shadow-sm ring-1 ring-violet/50'
                        : i === 2 || i === 4
                        ? 'bg-white/10 text-white/90'
                        : 'text-white/40'
                    )}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Time Slot Chips */}
            <div className="mt-2 grid grid-cols-3 gap-1">
              {[
                { time: '09:30', active: false },
                { time: '11:00', active: true },
                { time: '14:15', active: false },
                { time: '15:30', active: false },
                { time: '16:45', active: false },
                { time: '17:30', active: false },
              ].map((slot) => (
                <span
                  key={slot.time}
                  className={cn(
                    'grid h-5 place-items-center rounded text-[0.6rem] font-medium transition-all',
                    slot.active
                      ? 'border border-orange/80 bg-orange/20 text-orange'
                      : 'border border-white/10 bg-white/5 text-white/70'
                  )}
                >
                  {slot.time}
                </span>
              ))}
            </div>
          </div>

          {/* Admin & Booking Overview (Right side, 5 cols) */}
          <div className="col-span-12 flex flex-col justify-between gap-1.5 sm:col-span-5">
            {/* Booking Card */}
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] font-medium text-white/50">
                  Appointment
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[0.55rem] font-semibold text-emerald-300">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  Confirmed
                </span>
              </div>
              <div className="mt-1.5 flex items-center gap-1.5">
                <div className="grid h-6 w-6 place-items-center rounded-full bg-violet/30 text-violet-200">
                  <UserCheck className="h-3 w-3" />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-[0.7rem] font-semibold text-white">
                    Premium Session
                  </div>
                  <div className="text-[0.58rem] text-white/60">
                    Dr. Alena • 45 min
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Metrics Peek */}
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2">
              <div className="flex items-center justify-between text-[0.6rem] text-white/70">
                <span>Daily Capacity</span>
                <span className="font-semibold text-orange">85% booked</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-violet to-orange" />
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[0.55rem] text-white/50">
                <span>5 Environments</span>
                <span>Auto-validation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApexPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#050507] text-[#F4F5F7]',
        className
      )}
      aria-hidden="true"
    >
      {/* Dramatic dark studio atmosphere & lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-14 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full bg-[#F4F5F7]/[0.07] blur-2xl" />
        <div className="absolute bottom-8 left-1/4 h-24 w-48 -translate-x-1/2 rounded-full bg-[#D91E2A]/20 blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] border-t border-white/10 bg-gradient-to-b from-[#0B0C0F] to-[#050507]" />
      </div>

      {/* Editorial header & wordmark (positioned below card top badges) */}
      <div className="relative z-10 flex items-end justify-between px-4 pt-12 sm:px-5 sm:pt-14">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans text-xl font-black uppercase tracking-[-0.06em] text-[#F4F5F7] sm:text-2xl">
              APEX
            </span>
            <span className="font-mono text-xs font-bold tracking-[0.16em] text-[#D91E2A] sm:text-sm">
              R-01
            </span>
          </div>
          <span className="mt-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.26em] text-[#F4F5F7]/65 sm:text-[0.6rem]">
            SCULPTED FOR UNBROKEN AIR
          </span>
        </div>

        <span className="hidden rounded border border-white/10 bg-[#0B0C0F]/80 px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-[#F4F5F7]/60 sm:inline-block">
          AERO // CH-01
        </span>
      </div>

      {/* Stylized CSS sports coupe silhouette */}
      <div className="relative z-10 mx-auto my-auto flex w-full max-w-[17rem] flex-col items-center px-4 sm:max-w-[20rem]">
        <div className="relative h-20 w-full sm:h-24">
          {/* Aerodynamic airflow lines */}
          <div className="absolute inset-x-6 top-1 h-px bg-gradient-to-r from-transparent via-[#F4F5F7]/20 to-transparent" />
          <div className="absolute left-2 right-10 top-3.5 h-px bg-gradient-to-r from-transparent via-[#D91E2A]/35 to-transparent" />

          {/* Vehicle silhouette container */}
          <div className="absolute inset-x-3 bottom-2 h-14 sm:h-16">
            {/* Cabin / greenhouse */}
            <div className="absolute left-[22%] right-[24%] top-0 h-7 rounded-tl-[2.2rem] rounded-tr-[1rem] border-t border-white/25 bg-gradient-to-r from-[#181A22] via-[#252834] to-[#0B0C0F]" />
            {/* Side glass */}
            <div className="absolute left-[27%] right-[30%] top-1.5 h-3.5 rounded-tl-[1.5rem] rounded-tr-[0.5rem] bg-[#050507]/85 ring-1 ring-white/10" />

            {/* Sculpted lower coupe chassis */}
            <div className="absolute inset-x-0 bottom-2.5 h-7 rounded-tl-[0.6rem] rounded-tr-[1.7rem] rounded-bl-[0.35rem] rounded-br-[0.6rem] border-t border-white/20 bg-gradient-to-r from-[#12141B] via-[#1C1F29] to-[#0B0C0F] shadow-2xl">
              {/* Side aero intake */}
              <div className="absolute left-[34%] top-2 h-3 w-8 -skew-x-12 rounded-sm border-l-2 border-[#D91E2A]/85 bg-[#050507]" />
              {/* Front splitter & headlight DRL */}
              <div className="absolute right-0.5 top-2 h-1 w-4 -rotate-6 rounded-full bg-[#F4F5F7] shadow-[0_0_8px_rgba(244,245,247,0.8)]" />
              {/* Rear tail-light blade */}
              <div className="absolute left-0 top-1.5 h-1 w-5 rounded-full bg-[#D91E2A] shadow-[0_0_10px_#D91E2A]" />
            </div>

            {/* Front & rear wheels */}
            <div className="absolute bottom-0 left-[12%] grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-[#050507] shadow-lg sm:h-8 sm:w-8">
              <div className="grid h-4 w-4 place-items-center rounded-full border border-white/25 bg-[#0B0C0F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D91E2A]/90" />
              </div>
            </div>
            <div className="absolute bottom-0 right-[12%] grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-[#050507] shadow-lg sm:h-8 sm:w-8">
              <div className="grid h-4 w-4 place-items-center rounded-full border border-white/25 bg-[#0B0C0F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D91E2A]/90" />
              </div>
            </div>
          </div>

          {/* Ground reflection & red ambient underglow */}
          <div className="absolute inset-x-4 bottom-1 h-1.5 rounded-full bg-[#050507] blur-[2px]" />
          <div className="absolute bottom-1 left-6 h-0.5 w-20 rounded-full bg-[#D91E2A]/45 blur-[2px]" />
        </div>
      </div>

      {/* Bottom technical telemetry & scroll progress strip */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 bg-[#0B0C0F]/95 px-4 py-2 backdrop-blur-sm sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D91E2A]" />
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-[#F4F5F7]/70">
            CANVAS ENGINE ACTIVE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-[0.55rem] text-[#F4F5F7]/55">
            01 / 04
          </span>
          <div className="h-1 w-14 overflow-hidden rounded-full bg-white/10 sm:w-20">
            <div className="h-full w-2/5 rounded-full bg-[#D91E2A]" />
          </div>
        </div>
      </div>
    </div>
  );
}


