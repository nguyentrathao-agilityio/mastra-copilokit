import { HotelCard, LoadingCard } from '@/components';
import { useRenderToolCall } from '@copilotkit/react-core';
import { HotelSearchResultSchema } from '@repo/schemas';
import { useTripState } from '@/hooks';

export const useHotelAction = () => {
  const { selectHotel, state } = useTripState();

  useRenderToolCall({
    name: 'hotelTool',
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
      if (status === 'inProgress' || status === 'executing') {
        return <LoadingCard lines={5} />;
      }

      const pasred = HotelSearchResultSchema.safeParse(result);
      if (!pasred.success) return <></>;

      return (
        <HotelCard
          data={pasred.data}
          city={args.city}
          checkIn={args.checkIn}
          checkOut={args.checkOut}
          onSelect={selectHotel}
          isConfirmed={!!state.hotel}
        />
      );
    },
  });
};
