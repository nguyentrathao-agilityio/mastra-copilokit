import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// Constants
import { API_URL, ENDPOINTS } from '@/constants';

// Schemas
import { PlacesSearchResultSchema } from '@repo/schemas';
import type { PlacesSearchResult, PlaceResultItem } from '@repo/schemas';
import { PlacesInputSchema, ApiPlacesSearchResponseSchema } from '@/schemas';
import type { ApiPlace } from '@/schemas';

// Utils
import { apiFetch } from '@/utils';

const mapPlace = (place: ApiPlace): PlaceResultItem => ({
  id: place.id,
  shortCode: place.short_code,
  name: place.name,
  city: place.city,
  country: place.country,
  category: place.category,
  description: place.description,
  address: place.address,
  rating: place.rating,
  reviewCount: place.review_count,
  priceLevel: place.price_level,
  openingHours: place.opening_hours ?? undefined,
  imageUrl: place.image_url,
  tags: place.tags,
  isRecommended: place.is_recommended,
  latitude: place.latitude,
  longitude: place.longitude,
});

export const getPlaces = async (
  input: z.infer<typeof PlacesInputSchema>
): Promise<PlacesSearchResult> => {
  const params = Object.fromEntries(
    Object.entries({
      city: input.city,
      category: input.category,
      min_rating: input.min_rating,
      price_level: input.price_level?.toString(),
      recommended: input.recommended ? 'true' : undefined,
      sort: input.sort ?? 'rating_desc',
      limit: String(input.limit ?? 20),
      offset: String(input.offset ?? 0),
    }).filter((entry): entry is [string, string] => !!entry[1])
  );

  const data = await apiFetch(
    `${API_URL}${ENDPOINTS.PLACES_SEARCH}`,
    ApiPlacesSearchResponseSchema,
    params
  );

  return {
    total: data.total,
    city: data.city,
    category: data.category,
    results: data.results.map(mapPlace),
  };
};

export const placesTool = createTool({
  id: 'get-places',
  description:
    'Search places of interest in a city — attractions, restaurants, cafes, activities, nightlife, and shopping. Supports filtering by category and price level.',
  inputSchema: PlacesInputSchema,
  outputSchema: PlacesSearchResultSchema,
  execute: getPlaces,
});
