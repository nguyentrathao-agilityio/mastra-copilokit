import { z } from 'zod';

// Response schema from the hotel API (snake_case)
export const HotelAvailabilityResponseSchema = z.object({
  id: z.string(),
  short_code: z.string(),
  code: z.string(),
  name: z.string(),
  city: z.string(),
  country: z.string(),
  address: z.string(),
  star_rating: z.number(),
  price_per_night: z.number(),
  currency: z.string(),
  amenities: z.array(z.string()),
  rating: z.number(),
  review_count: z.number(),
  image_url: z.string(),
  available: z.boolean(), //
  available_rooms: z.number(), //
  max_occupancy_per_room: z.number(), //
  nights: z.number(), //
  total_price: z.number(), //
});

export const HotelSearchResponseSchema = z.object({
  total: z.number(),
  limit: z.number(),
  offset: z.number(),
  results: z.array(HotelAvailabilityResponseSchema),
  search: z.object({
    city: z.string(),
    check_in: z.string(),
    check_out: z.string(),
    nights: z.number(),
    rooms: z.number(),
    adults: z.number().optional(),
    children: z.number().optional(),
  }),
});

export type HotelAvailabilityResponse = z.infer<typeof HotelAvailabilityResponseSchema>;
export type HotelSearchResponse = z.infer<typeof HotelSearchResponseSchema>;
