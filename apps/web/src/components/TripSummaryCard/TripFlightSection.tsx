import { Plane, CheckCircle } from 'lucide-react';

// Utils
import { cn, formatDuration, formatTime } from '@/utils';

// Components
import { Typography } from '@/components/common';

// Types
import { SuggestedFlight } from '@repo/schemas';
import type { Flight } from '@repo/types';

interface TripFlightSectionProps {
  /** Flight from tool result (suggested) */
  suggested?: SuggestedFlight | null;
  /** Departure flight already booked in local state */
  booked?: Flight | null;
  /** Return flight already booked in local state */
  bookedReturn?: Flight | null;
  className?: string;
}

interface FlightRowProps {
  flight: Flight | SuggestedFlight;
  label?: string;
}

const FlightRow = ({ flight, label }: FlightRowProps) => (
  <div className="flex flex-col gap-1.5">
    {label && (
      <Typography
        variant="meta"
        weight="medium"
        color="secondary"
        className="uppercase tracking-widest"
      >
        {label}
      </Typography>
    )}
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

const TripFlightSection = ({
  suggested,
  booked,
  bookedReturn,
  className,
}: TripFlightSectionProps) => {
  const departureFlight = booked ?? suggested;
  const isBooked = !!booked;
  const hasReturn = !!bookedReturn;

  if (!departureFlight) return null;

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

      {/* Departure row */}
      <FlightRow flight={departureFlight} label={hasReturn ? 'Departure' : undefined} />

      {/* Return row */}
      {hasReturn && <FlightRow flight={bookedReturn} label="Return" />}
    </div>
  );
};

export { TripFlightSection };
