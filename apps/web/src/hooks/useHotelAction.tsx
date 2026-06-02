import { useRenderToolCall } from '@copilotkit/react-core';

// Constants
import { TOOL_NAMES } from '@/constants';

// Components
import { ErrorCard, HotelCard, LoadingCard } from '@/components';

// Utils
import { isToolPending } from '@/utils';

// Hooks
import { useTripState } from '@/hooks';

// Schemas
import { HotelAvailability, HotelSearchResultSchema } from '@repo/schemas';

export const useHotelAction = () => {
  const { selectHotel, state } = useTripState();

  useRenderToolCall({
    name: TOOL_NAMES.HOTEL,
    description: 'Show available hotels for a city and dates based on user request',
    parameters: [
      {
        name: 'city',
        type: 'string',
        description: 'City name to search, e.g. "Da Nang" or "Bangkok"',
        required: true,
      },
      {
        name: 'checkIn',
        type: 'string',
        description: 'Check-in date in YYYY-MM-DD format',
        required: true,
      },
      {
        name: 'checkOut',
        type: 'string',
        description: 'Check-out date in YYYY-MM-DD format',
        required: true,
      },
      { name: 'rooms', type: 'number', description: 'Number of rooms needed', required: false },
      { name: 'adults', type: 'number', description: 'Number of adults', required: false },
      { name: 'children', type: 'number', description: 'Number of children', required: false },
    ],
    render: ({ status, result, args }) => {
      if (isToolPending(status)) return <LoadingCard lines={5} />;

      const parsed = HotelSearchResultSchema.safeParse(result);
      if (!parsed.success) return <ErrorCard message={result?.error} />;

      const selectedHotel =
        parsed.data.results.find((hotel: HotelAvailability) => hotel.id === state.hotel?.id) ??
        null;

      return (
        <HotelCard
          data={parsed.data}
          city={args.city}
          checkIn={args.checkIn}
          checkOut={args.checkOut}
          onSelect={selectHotel}
          isConfirmed={!!state.hotel}
          initialHotel={selectedHotel}
        />
      );
    },
  });
};
