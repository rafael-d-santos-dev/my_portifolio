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

type PreviewKind = 'northstar' | 'novafit' | 'agendaflow';

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
  return <AgendaFlowPreview className={className} />;
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

