import { useRenderToolCall } from '@copilotkit/react-core';
import { z } from 'zod';

// Schemas
import {
  WeatherResultSchema,
  RouteResultSchema,
  PlacesSearchResultSchema,
  TipsResultSchema,
  HotelSearchResultSchema,
} from '@repo/schemas';

// Components
import {
  LoadingCard,
  WeatherCard,
  RouteCard,
  PlacesCard,
  LocalTipsCard,
  HotelCard,
} from '@/components';

const ItineraryFlowResultSchema = z.object({
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

export const useItineraryFlowAction = () => {
  useRenderToolCall({
    name: 'runItineraryTool',
    description: 'Render the full itinerary: weather, route, places, tips, and hotels',
    parameters: [
      { name: 'destination', type: 'string', description: 'Destination city', required: true },
      { name: 'startDate', type: 'string', description: 'Start date', required: false },
      { name: 'endDate', type: 'string', description: 'End date', required: false },
      { name: 'travelers', type: 'number', description: 'Number of travelers', required: false },
    ],
    render: ({ result, status }) => {
      if (status !== 'complete') {
        return <LoadingCard lines={8} />;
      }

      const parsed = ItineraryFlowResultSchema.safeParse(result);
      if (!parsed.success) return <LoadingCard lines={8} />;

      const { weather, route, places, tips, hotel } = parsed.data;

      return (
        <div className="flex flex-col gap-3">
          {weather && <WeatherCard data={weather} />}
          {route && <RouteCard data={route} />}
          {places && <PlacesCard data={places} />}
          {tips && <LocalTipsCard data={tips} />}
          {hotel && (
            <HotelCard
              data={hotel}
              city={parsed.data.destination}
              checkIn={parsed.data.startDate}
              checkOut={parsed.data.endDate}
            />
          )}
        </div>
      );
    },
  });
};
