import { Star } from 'lucide-react';

// Utils
import { formatPrice } from '@/utils';

// Components
import { Badge, Button, Card, StarRating, Typography } from '@/components/common';
import type { BadgeVariant } from '@/components/common';

// Constants
import { HOTEL_AMENITIES_MAX_DISPLAY } from '@/constants';

// Types
import type { HotelAvailability } from '@repo/types';

interface HotelOptionItemProps {
  hotel: HotelAvailability;
  isSelected: boolean;
  onSelect: (id: string) => void;
  badge?: string;
  badgeVariant?: BadgeVariant;
}

const HotelOptionItem = ({
  hotel,
  isSelected,
  onSelect,
  badge,
  badgeVariant = 'success',
}: HotelOptionItemProps) => {
  const handleSelect = () => onSelect(hotel.id);

  return (
    <Card isSelected={isSelected} paddingClass="px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        {/* Left: name + stars + meta */}
        <div className="flex min-w-0 flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <Typography variant="option-title" weight="medium">
              {hotel.name}
            </Typography>
            <StarRating count={hotel.starRating} />
          </div>
          <Typography variant="meta" color="secondary" className="flex items-center gap-1">
            <Star
              size={10}
              className="text-badge-warning-text fill-badge-warning-text"
              aria-hidden="true"
            />
            {hotel.rating.toFixed(1)} &middot; {hotel.nights} night{hotel.nights !== 1 ? 's' : ''}{' '}
            &middot; {hotel.amenities.slice(0, HOTEL_AMENITIES_MAX_DISPLAY).join(', ')}
          </Typography>
        </div>

        {/* Right: badge + price + Select */}
        <div className="flex shrink-0 items-center gap-2">
          {badge && <Badge variant={badgeVariant} label={badge} showIcon={false} />}
          <div className="text-right">
            <Typography variant="option-title" weight="medium" color="primary">
              {formatPrice(hotel.pricePerNight, hotel.currency)}/night
            </Typography>
            <Typography variant="label" color="tertiary">
              {formatPrice(hotel.totalPrice, hotel.currency)} total
            </Typography>
          </div>
          <Button size="sm" variant="secondary" onClick={handleSelect}>
            Select
          </Button>
        </div>
      </div>
    </Card>
  );
};

export { HotelOptionItem };
