import { Armchair, ArrowRight } from 'lucide-react';

// Utils
import { formatDuration, formatPrice, formatTime } from '@/utils';

// Components
import { Badge, Button, Card, Typography, BadgeVariant } from '@/components';

// Constants
import { FLIGHT_LOW_SEATS_THRESHOLD } from '@/constants';

// Types
import type { Flight } from '@repo/types';

interface FlightOptionItemProps {
  flight: Flight;
  isSelected: boolean;
  onSelect: (id: string) => void;
  badge?: string;
  badgeVariant?: BadgeVariant;
}

const FlightOptionItem = ({
  flight,
  isSelected,
  onSelect,
  badge,
  badgeVariant = 'success',
}: FlightOptionItemProps) => {
  const handleSelect = () => onSelect(flight.id);
  const stopsLabel =
    flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`;

  return (
    <Card isSelected={isSelected} paddingClass="px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        {/* Left: airline · flight, then times */}
        <div className="flex min-w-0 flex-col gap-0.5">
          <Typography variant="option-title" weight="medium">
            {flight.airline.name} &middot; {flight.flightNumber}
          </Typography>
          <Typography variant="meta" color="secondary" className="flex items-center gap-1">
            {formatTime(flight.departureTime)}
            <ArrowRight size={10} aria-hidden="true" />
            {formatTime(flight.arrivalTime)} &middot; {formatDuration(flight.durationMinutes)}{' '}
            &middot; {stopsLabel}
          </Typography>
        </div>

        {/* Right: badge + price + Select */}
        <div className="flex shrink-0 items-center gap-2">
          {badge && <Badge variant={badgeVariant} label={badge} showIcon={false} />}
          <Typography variant="option-title" weight="medium" color="primary">
            {formatPrice(flight.price, flight.currency)}
          </Typography>
          <Button size="sm" variant="secondary" onClick={handleSelect}>
            Select
          </Button>
        </div>
      </div>

      {/* Seats warning */}
      {flight.seatsAvailable <= FLIGHT_LOW_SEATS_THRESHOLD && (
        <Typography variant="meta" color="tertiary" className="mt-1.5 flex items-center gap-1">
          <Armchair size={11} aria-hidden="true" />
          {flight.seatsAvailable} seats left
        </Typography>
      )}
    </Card>
  );
};

export { FlightOptionItem };
