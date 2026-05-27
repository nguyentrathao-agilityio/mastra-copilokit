import { useHumanInTheLoop } from '@copilotkit/react-core';

// Hooks
import { useTripState } from './useTripState';

// Components
import { ItineraryConfirmCard } from '@/components/ItineraryCard/ItineraryConfirmCard';

export const useItineraryAction = () => {
  const { setItineraryDetails, setItineraryActive } = useTripState();

  useHumanInTheLoop({
    name: 'confirmItinerary',
    description: 'Confirm trip details before generating the full itinerary',
    parameters: [
      { name: 'destination', type: 'string', description: 'Destination city', required: false },
      { name: 'country', type: 'string', description: 'Country', required: false },
      { name: 'startDate', type: 'string', description: 'Start date YYYY-MM-DD', required: false },
      { name: 'endDate', type: 'string', description: 'End date YYYY-MM-DD', required: false },
      { name: 'travelers', type: 'number', description: 'Number of travelers', required: false },
    ],
    render: ({ args, respond }) => {
      if (!respond) return <></>;

      return (
        <ItineraryConfirmCard
          destination={args?.destination ?? ''}
          country={args?.country ?? ''}
          startDate={args?.startDate ?? ''}
          endDate={args?.endDate ?? ''}
          travelers={args?.travelers ?? 1}
          onConfirm={(modified) => {
            setItineraryDetails({
              destination: modified.destination,
              startDate: modified.startDate,
              endDate: modified.endDate,
              travelers: modified.travelers,
            });
            setItineraryActive(true);
            respond({ confirmed: true, ...modified });
          }}
          onCancel={() => {
            respond({ confirmed: false });
          }}
        />
      );
    },
  });
};
