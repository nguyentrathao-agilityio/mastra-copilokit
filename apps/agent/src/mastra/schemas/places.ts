import { z } from 'zod';

export const PlacesCategorySchema = z.enum([
  'attraction',
  'restaurant',
  'cafe',
  'activity',
  'nightlife',
  'shopping',
]);

export const PlacesInputSchema = z.object({
  city: z.string().optional().describe('City name, e.g. "Da Nang" or "Hanoi"'),
  category: PlacesCategorySchema.optional().describe(
    'Filter by place category: attraction, restaurant, cafe, activity, nightlife, shopping'
  ),
  price_level: z
    .number()
    .int()
    .min(1)
    .max(4)
    .optional()
    .describe('Price level filter: 1=free/cheap … 4=luxury'),
});

export const ApiPlaceSchema = z.object({
  id: z.string(),
  short_code: z.string(),
  name: z.string(),
  city: z.string(),
  country: z.string(),
  category: PlacesCategorySchema,
  description: z.string(),
  address: z.string(),
  rating: z.number(),
  review_count: z.number(),
  price_level: z.number(),
  opening_hours: z.string().nullable().optional(),
  image_url: z.string(),
  tags: z.array(z.string()),
  is_recommended: z.boolean(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});

export const ApiPlacesSearchResponseSchema = z.object({
  total: z.number(),
  results: z.array(ApiPlaceSchema),
  city: z.string().optional(),
  category: z.string().optional(),
  min_rating: z.number().optional(),
  price_level: z.number().optional(),
  recommended_only: z.boolean().optional(),
  sort: z.string().optional(),
});

export type PlacesInput = z.infer<typeof PlacesInputSchema>;
export type ApiPlace = z.infer<typeof ApiPlaceSchema>;
export type ApiPlacesSearchResponse = z.infer<typeof ApiPlacesSearchResponseSchema>;
