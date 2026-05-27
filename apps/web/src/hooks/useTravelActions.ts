// hooks/useTravelActions.ts
import { useCopilotReadable } from '@copilotkit/react-core';

// Hooks
import { useTripState } from './useTripState';

export const useTravelActions = () => {
  const { state } = useTripState();

  useCopilotReadable({
    description: 'Flights booked by the user. Contains departure and optionally return flight.',
    value: state.flights ? JSON.stringify(state.flights) : 'No flights booked',
    available: 'enabled',
  });

  useCopilotReadable({
    description: 'Hotel booked by the user.',
    value: state.hotel ? JSON.stringify(state.hotel) : 'No hotel booked',
    available: 'enabled',
  });
};
