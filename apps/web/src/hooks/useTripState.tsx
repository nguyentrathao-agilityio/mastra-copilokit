import { useCoAgent } from '@copilotkit/react-core';
import { useEffect, useCallback } from 'react';

// Constants
import { AGENT_NAME } from '@/constants';

// Types
import type { Flight, Hotel, SelectedFlight, TripState } from '@repo/types';

const STORAGE_KEY = 'trip-state';

export const useTripState = () => {
  const { state, setState } = useCoAgent<TripState>({
    name: AGENT_NAME,
    initialState: (): TripState => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? (JSON.parse(saved) as TripState) : {};
      } catch {
        return {};
      }
    },
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const selectFlight = useCallback(
    (flight: Flight, type: keyof SelectedFlight) => {
      setState((prev) => ({
        ...(prev ?? {}),
        flights: { ...(prev?.flights ?? {}), [type]: flight },
      }));
    },
    [setState]
  );

  const selectHotel = useCallback(
    (hotel: Hotel) => {
      setState((prev) => ({
        ...(prev ?? {}),
        hotel,
      }));
    },
    [setState]
  );

  const setItineraryDetails = useCallback(
    (details: Pick<TripState, 'destination' | 'startDate' | 'endDate' | 'travelers'>) => {
      setState((prev) => ({ ...(prev ?? {}), ...details }));
    },
    [setState]
  );

  const setItineraryActive = useCallback(
    (active: boolean) => {
      setState((prev) => ({ ...(prev ?? {}), itineraryActive: active }));
    },
    [setState]
  );

  const clearTrip = useCallback(() => {
    setState({});
    localStorage.removeItem(STORAGE_KEY);
  }, [setState]);

  return { state, selectFlight, selectHotel, setItineraryDetails, setItineraryActive, clearTrip };
};
