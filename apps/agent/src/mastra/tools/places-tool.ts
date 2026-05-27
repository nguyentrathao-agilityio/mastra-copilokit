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

const getPlaces = async (input: z.infer<typeof PlacesInputSchema>): Promise<PlacesSearchResult> => {
  const params: Record<string, string> = {};

  if (input.city) params.city = input.city;
  if (input.category) params.category = input.category;
  if (input.price_level != null) params.price_level = String(input.price_level);

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
