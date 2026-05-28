import { MapPin } from 'lucide-react';

// Utils
import { cn } from '@/utils';

// Components
import { Typography } from '@/components/common';

// Types
import type { PlacesSearchResult } from '@repo/schemas';

interface TripPlacesSectionProps {
  places?: PlacesSearchResult | null;
  className?: string;
}

const TripPlacesSection = ({ places, className }: TripPlacesSectionProps) => {
  if (!places?.results?.length) return null;

  const topPlaces = places.results.slice(0, 6);

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex items-center justify-between gap-2">
        <Typography
          as="span"
          variant="label"
          weight="medium"
          color="tertiary"
          className="uppercase tracking-widest"
        >
          Top places
        </Typography>
        <Typography as="span" variant="meta" color="tertiary">
          {places.total} total
        </Typography>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {topPlaces.map((place) => (
          <div
            key={place.id}
            className="border-border-secondary bg-background-secondary flex items-center gap-1.5 rounded-md border px-2.5 py-1"
          >
            <MapPin size={11} className="text-text-tertiary shrink-0" aria-hidden="true" />
            <Typography as="span" variant="meta" color="primary">
              {place.name}
            </Typography>
            {place.rating > 0 && (
              <Typography as="span" variant="meta" color="tertiary">
                {place.rating.toFixed(1)}
              </Typography>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { TripPlacesSection };
