import { z } from 'zod';

export const PlaceSchema = z.object({
  id: z.string(),
  name: z.string(),
  city: z.string(),
  category: z.string(),
  description: z.string(),
  opening_hours: z.string().optional(),
  price_level: z.number(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});

export const PlacesResultSchema = z.object({ results: z.array(PlaceSchema) });

export const RouteLegApiSchema = z.object({
  straight_line_km: z.number(),
  recommended_mode: z.string(),
  legs: z
    .array(
      z.object({
        mode: z.string(),
        distance_km: z.number(),
        duration_minutes: z.number(),
      })
    )
    .default([]),
});

export type Place = z.infer<typeof PlaceSchema>;
export type RouteLegApi = z.infer<typeof RouteLegApiSchema>;
