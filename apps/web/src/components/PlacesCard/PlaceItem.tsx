import { Clock, Star } from 'lucide-react';

// Components
import { Badge, Typography } from '@/components';

// Constants
import {
  PLACE_CATEGORY_BADGE_VARIANTS,
  PLACE_CATEGORY_LABELS,
  PLACE_ICON_SIZES,
  PLACE_PRICE_LABEL_FALLBACK,
  PLACE_PRICE_LABELS,
} from '@/constants';

// Types
import type { Place } from '@repo/types';

interface PlaceItemProps {
  place: Place;
}

const PlaceItem = ({ place }: PlaceItemProps) => (
  <div className="px-4 py-3">
    {/* Row 1: name + recommended badge */}
    <div className="flex items-start justify-between gap-2">
      <Typography variant="option-title" weight="medium">
        {place.name}
      </Typography>
      <div className="flex shrink-0 items-center gap-1.5">
        {place.isRecommended && (
          <Star
            size={PLACE_ICON_SIZES.recommended}
            className="text-badge-warning-text fill-badge-warning-text"
            aria-label="Recommended"
          />
        )}
        <Badge
          variant={PLACE_CATEGORY_BADGE_VARIANTS[place.category]}
          label={PLACE_CATEGORY_LABELS[place.category]}
          showIcon={false}
        />
      </div>
    </div>

    {/* Description */}
    {place.description && (
      <Typography
        variant="meta"
        color="secondary"
        className="mt-0.5 line-clamp-2 pt-3 leading-relaxed"
      >
        {place.description}
      </Typography>
    )}

    {/* Meta row */}
    <div className="mt-2 flex flex-wrap items-center gap-3">
      <Typography as="span" variant="meta" color="tertiary" className="flex items-center gap-1">
        <Star
          size={PLACE_ICON_SIZES.meta}
          className="text-badge-warning-text fill-badge-warning-text"
          aria-hidden="true"
        />
        {place.rating.toFixed(1)} ({place.reviewCount.toLocaleString()})
      </Typography>
      <Typography as="span" variant="meta" color="tertiary">
        {PLACE_PRICE_LABELS[place.priceLevel] ?? PLACE_PRICE_LABEL_FALLBACK}
      </Typography>
      {place.openingHours && (
        <Typography as="span" variant="meta" color="tertiary" className="flex items-center gap-1">
          <Clock size={PLACE_ICON_SIZES.meta} aria-hidden="true" />
          {place.openingHours}
        </Typography>
      )}
    </div>
  </div>
);

export { PlaceItem };
