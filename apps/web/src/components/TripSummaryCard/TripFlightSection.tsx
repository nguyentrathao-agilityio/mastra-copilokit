import { Plane, CheckCircle } from 'lucide-react';

// Utils
import { cn, formatDuration, formatTime } from '@/utils';

// Components
import { Typography } from '@/components/common';

// Types
import type { SuggestedFlight } from '@repo/types';
import type { Flight } from '@repo/types';

interface TripFlightSectionProps {
  /** Flight from tool result (suggested) */
  suggested?: SuggestedFlight | null;
  /** Flight already booked in local state */
  booked?: Flight | null;
  className?: string;
}

const TripFlightSection = ({ suggested, booked, className }: TripFlightSectionProps) => {
  const flight = booked ?? suggested;
  const isBooked = !!booked;

  if (!flight) return null;

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {/* Section label */}
      <div className="flex items-center justify-between gap-2">
        <Typography
          as="span"
          variant="label"
          weight="medium"
          color="tertiary"
          className="uppercase tracking-widest"
        >
          Flight
        </Typography>
        {isBooked ? (
          <span className="bg-badge-success-bg text-badge-success-text text-badge flex items-center gap-1 rounded-full px-2 py-0.5 font-medium">
            <CheckCircle size={10} aria-hidden="true" />
            booked
          </span>
        ) : (
          <span className="bg-badge-info-bg text-badge-info-text text-badge rounded-full px-2 py-0.5 font-medium">
            suggested
          </span>
        )}
      </div>

      {/* Flight row */}
      <div className="border-border-secondary bg-background-secondary flex items-center justify-between gap-3 rounded-lg border px-4 py-3">
        <div className="flex items-center gap-2">
          <Plane size={14} className="text-text-secondary shrink-0" aria-hidden="true" />
          <div>
            <Typography variant="body" weight="medium">
              {flight.airline.name} · {flight.flightNumber}
            </Typography>
            <Typography variant="meta" color="secondary">
              {flight.origin} → {flight.destination}
              {' · '}
              {formatTime(flight.departureTime)} – {formatTime(flight.arrivalTime)}
              {' · '}
              {formatDuration(flight.durationMinutes)}
              {flight.stops > 0 && ` · ${flight.stops} stop${flight.stops !== 1 ? 's' : ''}`}
            </Typography>
          </div>
        </div>
        <Typography as="span" variant="option-title" weight="medium" className="shrink-0">
          ${flight.price}
          <Typography as="span" variant="meta" color="tertiary">
            {' '}
            / person
          </Typography>
        </Typography>
      </div>
    </div>
  );
};

export { TripFlightSection };
