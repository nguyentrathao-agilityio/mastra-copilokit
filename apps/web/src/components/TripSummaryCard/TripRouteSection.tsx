import { useState } from 'react';
import { CalendarDays } from 'lucide-react';

// Utils
import { cn, formatDuration, offsetDate, chunk, getSlot } from '@/utils';

// Constants
import { ROUTE_TIME_SLOTS } from '@/constants';
import type { RouteTimeSlot } from '@/constants';

// Components
import { Typography, FilterChip } from '@/components';
import type { FilterOption } from '@/components';

// Types
import type { LandmarkStop, RouteResult } from '@repo/schemas';

interface TripRouteSectionProps {
  route?: RouteResult | null;
  days: number;
  startDate?: string;
  className?: string;
}

interface StopItemProps {
  stop: LandmarkStop;
  globalIdx: number;
}

const StopItem = ({ stop, globalIdx }: StopItemProps) => (
  <div className="flex gap-2.5">
    {/* Number badge */}
    <span className="bg-background-primary border-border-secondary text-label text-text-tertiary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border font-medium">
      {globalIdx + 1}
    </span>

    <div className="min-w-0 flex-1">
      <div className="flex items-baseline gap-2">
        <Typography variant="body" weight="medium" color="primary">
          {stop.name}
        </Typography>
        {stop.visitDurationMin && (
          <Typography as="span" variant="meta" color="tertiary">
            · {formatDuration(stop.visitDurationMin)}
          </Typography>
        )}
      </div>

      {stop.entranceFee !== undefined && stop.entranceFee > 0 && (
        <Typography variant="meta" color="tertiary">
          Entrance: ${stop.entranceFee}
        </Typography>
      )}
    </div>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

/**
 * Day-by-day route plan with FilterChip day tabs.
 * Stops are distributed evenly across days and then grouped into
 * morning / afternoon / evening slots by proportional index.
 */
const TripRouteSection = ({ route, days, startDate, className }: TripRouteSectionProps) => {
  const [activeDay, setActiveDay] = useState(0);

  if (!route?.stops?.length) return null;

  const effectiveDays = Math.max(1, days);
  const stopsPerDay = Math.ceil(route.stops.length / effectiveDays);
  const dayGroups = chunk(route.stops, stopsPerDay);

  // FilterChip options — one per actual day group
  const dayOptions: FilterOption[] = dayGroups.map((_, i) => ({
    value: String(i),
    label: `Day ${i + 1}`,
  }));

  const currentStops = dayGroups[activeDay] ?? [];
  const dayDate = offsetDate(startDate, activeDay);

  // Group current day's stops into time-of-day slots
  const slotMap = new Map<RouteTimeSlot, { stop: LandmarkStop; globalIdx: number }[]>();
  ROUTE_TIME_SLOTS.forEach(({ key }) => slotMap.set(key, []));
  currentStops.forEach((stop, idx) => {
    const globalIdx = activeDay * stopsPerDay + idx;
    const slot = getSlot(idx, currentStops.length);
    slotMap.get(slot)!.push({ stop, globalIdx });
  });

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {/* Section header */}
      <div className="flex items-center justify-between gap-2">
        <Typography
          as="span"
          variant="label"
          weight="medium"
          color="tertiary"
          className="uppercase tracking-widest"
        >
          Day-by-day plan suggestion
        </Typography>
        <Typography as="span" variant="meta" color="tertiary">
          {effectiveDays} day{effectiveDays !== 1 ? 's' : ''} ·{' '}
          {formatDuration(route.totalDurationMin)} total
        </Typography>
      </div>

      {/* Day tabs */}
      {dayOptions.length > 1 && (
        <div className="flex flex-wrap gap-1.5">
          {dayOptions.map((opt) => (
            <FilterChip
              key={opt.value}
              option={opt}
              isActive={opt.value === String(activeDay)}
              onSelect={(v) => setActiveDay(Number(v))}
            />
          ))}
        </div>
      )}

      {/* Day content */}
      <div className="border-border-secondary bg-background-secondary flex flex-col gap-4 rounded-lg border px-4 py-3">
        {/* Day header */}
        <div className="flex items-center gap-2">
          <CalendarDays size={14} className="text-text-secondary shrink-0" aria-hidden="true" />
          <Typography variant="body" weight="medium">
            Day {activeDay + 1}
            {dayDate && (
              <Typography as="span" variant="body" color="tertiary">
                {' '}
                — {dayDate}
              </Typography>
            )}
          </Typography>
        </div>

        {/* Time slots */}
        {ROUTE_TIME_SLOTS.map(({ key, label, Icon }) => {
          const stops = slotMap.get(key) ?? [];
          if (stops.length === 0) return null;

          return (
            <div key={key} className="flex flex-col gap-2">
              {/* Slot label */}
              <div className="flex items-center gap-1.5">
                <Icon size={13} className="text-text-secondary" aria-hidden="true" />
                <Typography
                  as="span"
                  variant="label"
                  weight="medium"
                  color="secondary"
                  className="uppercase tracking-wide"
                >
                  {label}
                </Typography>
              </div>

              {/* Stops list */}
              <div className="flex flex-col gap-3 pl-1">
                {stops.map(({ stop, globalIdx }) => (
                  <StopItem key={stop.name} stop={stop} globalIdx={globalIdx} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Travel tip */}
      {route.travelTip && (
        <Typography as="p" variant="meta" color="secondary" className="italic">
          💡 {route.travelTip}
        </Typography>
      )}
    </div>
  );
};

export { TripRouteSection };
