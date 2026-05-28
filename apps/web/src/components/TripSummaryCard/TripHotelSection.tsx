import { CheckCircle, Star } from 'lucide-react';

// Utils
import { cn } from '@/utils';

// Components
import { Typography } from '@/components/common';

// Types
import type { HotelAvailability } from '@repo/schemas';
import type { Hotel } from '@repo/types';

interface TripHotelSectionProps {
  /** Hotel from tool result (suggested) */
  suggested?: HotelAvailability | null;
  /** Hotel already booked in local state */
  booked?: Hotel | null;
  nights: number;
  className?: string;
}

const TripHotelSection = ({ suggested, booked, nights, className }: TripHotelSectionProps) => {
  const hotel = booked ?? suggested;
  const isBooked = !!booked;

  if (!hotel) return null;

  const pricePerNight = hotel.pricePerNight;
  const totalPrice =
    'totalPrice' in hotel ? (hotel as HotelAvailability).totalPrice : pricePerNight * nights;
  const imageUrl = hotel.imageUrl;

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
          Hotel
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

      {/* Hotel card */}
      <div className="border-border-secondary bg-background-secondary overflow-hidden rounded-lg border">
        {/* Hotel image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={hotel.name}
            className="h-32 w-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        )}

        {/* Hotel info row */}
        <div className="flex items-start justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <Typography variant="body" weight="medium" className="truncate">
              {hotel.name}
            </Typography>
            <div className="mt-0.5 flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: hotel.starRating }).map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className="text-text-secondary fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <Typography as="span" variant="meta" color="secondary">
                {hotel.city}
              </Typography>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <Typography as="p" variant="option-title" weight="medium">
              ${pricePerNight}
              <Typography as="span" variant="meta" color="tertiary">
                {' '}
                / night
              </Typography>
            </Typography>
            {nights > 0 && (
              <Typography as="p" variant="meta" color="tertiary">
                ${totalPrice} · {nights} night{nights !== 1 ? 's' : ''}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TripHotelSection };
