import { useRef } from 'react';
import { useHumanInTheLoop } from '@copilotkit/react-core';

// Context
import { useApprovalRequest } from '@/hooks/useApprovalRequest';

// Hooks
import { useTripState } from './useTripState';

// Components
import { ItineraryConfirmCard } from '@/components/ItineraryCard/ItineraryConfirmCard';

const ACTION_NAME = 'confirmItinerary';

export const useItineraryAction = () => {
  const { setItineraryDetails, setItineraryActive } = useTripState();
  const { savePending, clearPending } = useApprovalRequest();
  const savedRef = useRef(false);

  useHumanInTheLoop({
    name: ACTION_NAME,
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

      if (!savedRef.current) {
        savedRef.current = true;
        savePending(ACTION_NAME, args as Record<string, unknown>);
      }

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
            clearPending();
            respond({ confirmed: true, ...modified });
          }}
          onCancel={() => {
            clearPending();
            respond({ confirmed: false });
          }}
        />
      );
    },
  });
};
