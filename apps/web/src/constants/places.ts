import type { BadgeVariant } from '@/components/common';
import type { PlaceCategory } from '@repo/types';

export const PLACE_FILTER_VALUES = {
  ATTRACTION: 'attraction',
  RESTAURANT: 'restaurant',
  CAFE: 'cafe',
  ACTIVITY: 'activity',
  NIGHTLIFE: 'nightlife',
  SHOPPING: 'shopping',
} as const;

export const PLACES_CATEGORY_FILTERS = [
  {
    value: PLACE_FILTER_VALUES.ATTRACTION,
    label: 'Attractions',
  },
  {
    value: PLACE_FILTER_VALUES.RESTAURANT,
    label: 'Restaurants',
  },
  {
    value: PLACE_FILTER_VALUES.CAFE,
    label: 'Cafes',
  },
  {
    value: PLACE_FILTER_VALUES.ACTIVITY,
    label: 'Activities',
  },
  {
    value: PLACE_FILTER_VALUES.NIGHTLIFE,
    label: 'Nightlife',
  },
  {
    value: PLACE_FILTER_VALUES.SHOPPING,
    label: 'Shopping',
  },
] as const satisfies ReadonlyArray<{
  value: PlaceCategory;
  label: string;
}>;

export const PLACES_LOADING_SKELETON_COUNT = 6;

export const PLACE_CATEGORY_BADGE_VARIANTS: Readonly<Record<PlaceCategory, BadgeVariant>> = {
  [PLACE_FILTER_VALUES.ATTRACTION]: 'accent',
  [PLACE_FILTER_VALUES.RESTAURANT]: 'danger',
  [PLACE_FILTER_VALUES.CAFE]: 'warning',
  [PLACE_FILTER_VALUES.ACTIVITY]: 'primary',
  [PLACE_FILTER_VALUES.NIGHTLIFE]: 'secondary',
  [PLACE_FILTER_VALUES.SHOPPING]: 'success',
};

export const PLACE_PRICE_LABELS = {
  1: 'Free',
  2: '$',
  3: '$$',
  4: '$$$',
} as const satisfies Readonly<Record<number, string>>;

export const PRICE_OPTIONS = Object.entries(PLACE_PRICE_LABELS).map(([value, label]) => ({
  value,
  label,
}));

export const PLACE_PRICE_LABEL_FALLBACK = '$';

export const PLACE_ICON_SIZES = {
  recommended: 12,
  meta: 11,
} as const;
