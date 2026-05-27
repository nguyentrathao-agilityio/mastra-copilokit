import { useMemo, useState } from 'react';
import { Building2 } from 'lucide-react';

// Utils
import { cn, computeHotelBadges, formatDateRange } from '@/utils';

// Components
import { LoadingCard, Typography } from '@/components/common';
import { HotelOptionItem } from './HotelOptionItem';

// Types
import type { HotelSearchResult } from '@repo/types';

interface HotelCardProps {
  data?: HotelSearchResult;
  city?: string;
  checkIn?: string;
  checkOut?: string;
  isLoading?: boolean;
  className?: string;
  onSelect?: (hotelId: string) => void;
}

const HotelCard = ({
  data,
  city,
  checkIn,
  checkOut,
  isLoading = false,
  className,
  onSelect,
}: HotelCardProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  if (isLoading || !data) return <LoadingCard lines={5} />;

  const handleSelect = (id: string) => {
    if (selectedId === id) {
      setSelectedId(null);
      return;
    }
    setSelectedId(id);
    onSelect?.(id);
  };

  const badges = useMemo(() => computeHotelBadges(data.results), [data.results]);

  return (
    <div className={cn('flex w-full max-w-2xl flex-col gap-3', className)}>
      <div className="border-border-tertiary overflow-hidden rounded-lg border">
        {/* Header */}
        <div className="border-border-tertiary border-b px-5 py-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Building2 size={16} className="text-text-secondary" aria-hidden="true" />
              <div className="flex flex-col gap-0.5">
                <Typography variant="card-title" weight="medium">
                  Hotels{city ? ` in ${city}` : ''}
                </Typography>
                <Typography variant="meta" color="tertiary">
                  {data.total} option{data.total !== 1 ? 's' : ''} found
                </Typography>
              </div>
            </div>
            {checkIn && checkOut && (
              <Typography as="span" variant="meta" color="tertiary">
                {formatDateRange(checkIn, checkOut)}
              </Typography>
            )}
          </div>
        </div>

        {/* Hotel list */}
        <div className="bg-background-primary flex flex-col gap-2 p-3">
          {data.results.map((hotel) => {
            const badge = badges.get(hotel.id);
            return (
              <HotelOptionItem
                key={hotel.id}
                hotel={hotel}
                isSelected={selectedId === hotel.id}
                onSelect={handleSelect}
                badge={badge?.label}
                badgeVariant={badge?.variant}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
