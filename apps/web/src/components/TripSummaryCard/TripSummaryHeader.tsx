import { MapPin, Calendar, Users } from 'lucide-react';

// Utils
import { cn, formatDisplayDate } from '@/utils';

// Components
import { Typography } from '@/components/common';

interface TripSummaryHeaderProps {
  destination: string;
  startDate?: string;
  endDate?: string;
  travelers: number;
  days: number;
  className?: string;
}

/**
 * Header row for TripSummaryCard — destination, date range, traveler count, nights.
 */
const TripSummaryHeader = ({
  destination,
  startDate,
  endDate,
  travelers,
  days,
  className,
}: TripSummaryHeaderProps) => (
  <div className={cn('flex flex-col gap-2', className)}>
    <div className="flex items-center gap-2">
      <MapPin size={16} className="text-text-secondary shrink-0" aria-hidden="true" />
      <Typography variant="card-title" weight="medium">
        {destination}
      </Typography>
      <span className="bg-background-secondary text-badge text-text-tertiary rounded-full px-2 py-0.5 font-medium">
        trip summary
      </span>
    </div>

    <div className="flex flex-wrap items-center gap-3">
      {startDate && endDate && (
        <div className="flex items-center gap-1.5">
          <Calendar size={13} className="text-text-tertiary" aria-hidden="true" />
          <Typography as="span" variant="meta" color="secondary">
            {formatDisplayDate(startDate)} – {formatDisplayDate(endDate)}
          </Typography>
        </div>
      )}

      <div className="flex items-center gap-1.5">
        <Users size={13} className="text-text-tertiary" aria-hidden="true" />
        <Typography as="span" variant="meta" color="secondary">
          {travelers} traveler{travelers !== 1 ? 's' : ''}
        </Typography>
      </div>

      <div className="flex items-center gap-1">
        <Typography as="span" variant="meta" color="tertiary">
          {days} night{days !== 1 ? 's' : ''}
        </Typography>
      </div>
    </div>
  </div>
);

export { TripSummaryHeader };
