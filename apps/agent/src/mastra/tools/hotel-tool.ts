import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// Constants
import { API_URL, ENDPOINTS } from '@/constants';

// Schemas
import { HotelSearchResultSchema } from '@repo/schemas';
import { HotelSearchResponseSchema } from '@/schemas';

type HotelToolOutput = z.infer<typeof HotelSearchResultSchema>;

export const searchHotels = async (inputData: {
  city: string;
  checkIn: string;
  checkOut: string;
  rooms?: number;
  adults?: number;
  children?: number;
  availableOnly?: boolean;
  minStars?: number;
  maxPrice?: number;
  amenities?: string[];
  limit?: number;
  offset?: number;
}) => {
  const {
    city,
    checkIn,
    checkOut,
    rooms = 1,
    adults = 2,
    children = 0,
    availableOnly = false,
    minStars,
    maxPrice,
    amenities,
    limit = 20,
    offset = 0,
  } = inputData;

  const endpoint = `${API_URL}${ENDPOINTS.HOTELS}`;
  const params = new URLSearchParams({
    city: city.trim(),
    check_in: checkIn,
    check_out: checkOut,
    rooms: String(rooms),
    adults: String(adults),
    children: String(children),
    available_only: String(availableOnly),
    limit: String(limit),
    offset: String(offset),
  });

  if (minStars !== undefined) params.append('min_stars', String(minStars));
  if (maxPrice !== undefined) params.append('max_price', String(maxPrice));
  if (amenities && amenities.length > 0) {
    amenities.forEach((amenity) => params.append('amenities', amenity));
  }

  try {
    const res = await fetch(`${endpoint}?${params.toString()}`);

    if (!res.ok) {
      throw new Error(`Hotel API failed: ${res.status} ${res.statusText}`);
    }

    const raw = await res.json();
    const parsed = HotelSearchResponseSchema.safeParse(raw);

    if (!parsed.success) {
      throw new Error(`Invalid hotel response shape: ${parsed.error.message}`);
    }

    const data = parsed.data;

    const result: HotelToolOutput = {
      total: data.total,
      limit: data.limit,
      offset: data.offset,
      results: data.results.map((hotel) => ({
        id: hotel.id,
        shortCode: hotel.short_code,
        code: hotel.code,
        name: hotel.name,
        city: hotel.city,
        country: hotel.country,
        address: hotel.address,
        starRating: hotel.star_rating,
        pricePerNight: hotel.price_per_night,
        currency: hotel.currency,
        amenities: hotel.amenities,
        rating: hotel.rating,
        reviewCount: hotel.review_count,
        imageUrl: hotel.image_url,
        available: hotel.available,
        availableRooms: hotel.available_rooms,
        maxOccupancyPerRoom: hotel.max_occupancy_per_room,
        nights: hotel.nights,
        totalPrice: hotel.total_price,
      })),
      search: {
        city: data.search.city,
        checkIn: data.search.check_in,
        checkOut: data.search.check_out,
        nights: data.search.nights,
        rooms: data.search.rooms,
        adults: data.search.adults,
        children: data.search.children,
      },
    };

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to search hotels: ${error.message}`);
    }
    throw new Error('Failed to search hotels: Unknown error');
  }
};

export const hotelTool = createTool({
  id: 'search-hotels',
  description: 'Search available hotels for a destination with flexible filters',
  inputSchema: z.object({
    city: z.string().describe('City name to search, e.g. "Da Nang" or "Bangkok"'),
    checkIn: z.string().describe('Check-in date in YYYY-MM-DD format'),
    checkOut: z.string().describe('Check-out date in YYYY-MM-DD format'),
    rooms: z.number().int().min(1).max(10).optional().default(1).describe('Number of rooms needed'),
    adults: z.number().int().min(1).max(20).optional().default(2).describe('Number of adults'),
    children: z.number().int().min(0).optional().default(0).describe('Number of children'),
    availableOnly: z.boolean().optional().default(false).describe('Only return available hotels'),
    minStars: z.number().int().min(1).max(5).optional().describe('Minimum star rating (1-5)'),
    maxPrice: z.number().positive().optional().describe('Maximum price per night in USD'),
    amenities: z
      .array(z.string())
      .optional()
      .describe('Required amenities (e.g. ["wifi", "pool", "breakfast"])'),
    limit: z
      .number()
      .int()
      .min(1)
      .max(100)
      .optional()
      .default(20)
      .describe('Maximum number of results to return'),
    offset: z.number().int().min(0).optional().default(0).describe('Pagination offset'),
  }),
  outputSchema: HotelSearchResultSchema,
  execute: async (inputData) => {
    return await searchHotels(inputData);
  },
});
