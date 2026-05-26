import { Star } from 'lucide-react';

// Utils
import { formatPrice, getAmenityIcon, getAmenityColor, getRatingColor } from '@/utils';

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
  const ratingColor = getRatingColor(hotel.rating);

  return (
    <Card isSelected={isSelected} paddingClass="px-4 py-3">
      <div className="flex flex-col gap-3">
        {/* Top section: name, stars, rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-2">
            <div className="flex items-center gap-2">
              <Typography variant="option-title" weight="medium">
                {hotel.name}
              </Typography>
              <StarRating count={hotel.starRating} />
            </div>
            {/* Rating badge */}
            <div
              className={`rounded-pill text-badge inline-flex w-fit px-2 py-0.5 font-medium ${ratingColor.bgClass} ${ratingColor.textClass}`}
            >
              ★ {hotel.rating.toFixed(1)}/5
            </div>
          </div>

          {/* Right: badge */}
          {badge && <Badge variant={badgeVariant} label={badge} showIcon={false} />}
        </div>

        {/* Amenities section */}
        {hotel.amenities.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.slice(0, HOTEL_AMENITIES_MAX_DISPLAY).map((amenity, idx) => {
              const Icon = getAmenityIcon(amenity);
              const colorClass = getAmenityColor(amenity, idx);
              return (
                <div
                  key={amenity}
                  className={`rounded-pill text-badge inline-flex items-center gap-1 px-2.5 py-1 font-medium ${colorClass}`}
                >
                  {Icon && <Icon size={14} />}
                  <span>{amenity}</span>
                </div>
              );
            })}
            {hotel.amenities.length > HOTEL_AMENITIES_MAX_DISPLAY && (
              <div className="text-meta font-regular text-text-tertiary flex items-center">
                +{hotel.amenities.length - HOTEL_AMENITIES_MAX_DISPLAY} more
              </div>
            )}
          </div>
        )}

        {/* Bottom section: price and button */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <Typography variant="option-title" weight="medium" color="primary">
              {formatPrice(hotel.pricePerNight, hotel.currency)}/night
            </Typography>
            <Typography variant="meta" color="tertiary">
              {formatPrice(hotel.totalPrice, hotel.currency)} total
              {hotel.nights && ` for ${hotel.nights} night${hotel.nights !== 1 ? 's' : ''}`}
            </Typography>
          </div>
          <Button
            size="sm"
            variant={isSelected ? 'primary' : 'secondary'}
            onClick={handleSelect}
            className="w-[90px] shrink-0"
          >
            {isSelected ? 'Unselect' : 'Select'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export { HotelOptionItem };
