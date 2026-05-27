import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

// Schemas
import {
  WeatherResultSchema,
  RouteResultSchema,
  PlacesSearchResultSchema,
  TipsResultSchema,
  HotelSearchResultSchema,
} from '@repo/schemas';

// Services
import { getWeather, getRoute, getPlaces, getLocalTips, searchHotels } from '@/services';

export const ItineraryFlowResultSchema = z.object({
  destination: z.string(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  travelers: z.number().optional(),
  weather: WeatherResultSchema.nullable(),
  route: RouteResultSchema.nullable(),
  places: PlacesSearchResultSchema.nullable(),
  tips: TipsResultSchema.nullable(),
  hotel: HotelSearchResultSchema.nullable(),
});

export type ItineraryFlowResult = z.infer<typeof ItineraryFlowResultSchema>;

const runItinerary = async (input: {
  destination: string;
  startDate?: string;
  endDate?: string;
  travelers?: number;
}): Promise<ItineraryFlowResult> => {
  const { destination, startDate, endDate, travelers = 2 } = input;
  const days =
    startDate && endDate
      ? Math.ceil(
          (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)
        )
      : 3;

  const [weatherResult, routeResult, placesResult, tipsResult, hotelResult] =
    await Promise.allSettled([
      getWeather({ city: destination, days: days ?? 5 }),
      getRoute({ city: destination }),
      getPlaces({ city: destination, sort: 'rating_desc', limit: 10 }),
      getLocalTips({ city: destination }),
      startDate && endDate
        ? searchHotels({
            city: destination,
            checkIn: startDate,
            checkOut: endDate,
            adults: travelers,
          })
        : Promise.reject(new Error('No dates provided')),
    ]);

  return {
    destination,
    startDate,
    endDate,
    travelers,
    weather: weatherResult.status === 'fulfilled' ? weatherResult.value : null,
    route: routeResult.status === 'fulfilled' ? routeResult.value : null,
    places: placesResult.status === 'fulfilled' ? placesResult.value : null,
    tips: tipsResult.status === 'fulfilled' ? tipsResult.value : null,
    hotel: hotelResult.status === 'fulfilled' ? hotelResult.value : null,
  };
};

export const runItineraryTool = createTool({
  id: 'run-itinerary',
  description:
    'Run the full itinerary flow for a destination — fetches weather, route, places, tips, and hotels in one call. Use this after confirmItinerary is confirmed.',
  inputSchema: z.object({
    destination: z.string().describe('Destination city, e.g. "Da Nang"'),
    startDate: z.string().optional().describe('Trip start date YYYY-MM-DD'),
    endDate: z.string().optional().describe('Trip end date YYYY-MM-DD'),
    travelers: z.number().int().min(1).optional().describe('Number of travelers'),
  }),
  outputSchema: ItineraryFlowResultSchema,
  execute: runItinerary,
});
