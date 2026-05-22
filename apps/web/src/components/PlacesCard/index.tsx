'use client';

import { useCallback, useState } from 'react';
import { MapPin } from 'lucide-react';

// Utils
import { cn } from '@/utils';

// Components
import { Card, Divider, LoadingCard, Typography } from '@/components/common';
import { FilterBar } from '@/components/FilterBar';
import { PlaceItem } from './PlaceItem';

// Constants
import {
  PLACES_CATEGORY_FILTERS,
  PLACE_FILTER_VALUES,
  PLACES_LOADING_SKELETON_COUNT,
} from '@/constants';

// Types
import type { PlaceCategory, PlaceSearchResult } from '@repo/types';

interface PlacesCardProps {
  data?: PlaceSearchResult;
  isLoading?: boolean;
  className?: string;
}

/**
 * Generative UI card — places discovery with category filter.
 */
const PlacesCard = ({ data, isLoading = false, className }: PlacesCardProps) => {
  const [activeFilter, setActiveFilter] = useState<string>(PLACE_FILTER_VALUES.ALL);

  const handleFilter = useCallback((value: string) => setActiveFilter(value), []);

  if (isLoading || !data) return <LoadingCard lines={PLACES_LOADING_SKELETON_COUNT} />;

  const filtered =
    activeFilter === PLACE_FILTER_VALUES.ALL
      ? data.results
      : data.results.filter((p) => p.category === (activeFilter as PlaceCategory));

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {/* Header card */}
      <Card paddingClass="px-5 py-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-text-secondary" aria-hidden="true" />
            <Typography variant="card-title" weight="medium">
              Places{data.city ? ` in ${data.city}` : ''}
            </Typography>
          </div>
          <Typography as="span" variant="meta" color="tertiary">
            {data.total} places
          </Typography>
        </div>
      </Card>

      {/* Filter bar */}
      <FilterBar
        filters={PLACES_CATEGORY_FILTERS}
        activeFilter={activeFilter}
        onChange={handleFilter}
      />

      <Divider />

      {/* Place list */}
      {filtered.length > 0 ? (
        <div className="flex flex-col gap-2">
          {filtered.map((place) => (
            <PlaceItem key={place.id} place={place} />
          ))}
        </div>
      ) : (
        <Typography variant="meta" color="tertiary" className="py-4 text-center">
          No places in this category
        </Typography>
      )}
    </div>
  );
};

export default PlacesCard;
