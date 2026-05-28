import { useCoAgent } from '@copilotkit/react-core';
import { useEffect, useCallback, useRef } from 'react';

import { AGENT_NAME } from '@/constants';

import { useThreadStore } from '@/stores/threadStore';
import { useTripStateStore } from '@/stores/tripStateStore';

import type { Flight, HotelAvailability, SelectedFlight, TripState } from '@repo/types';
import { useShallow } from 'zustand/react/shallow';

export const useTripState = () => {
  const sessionId = useThreadStore((s) => s.activeThreadId);
  const { setTripState, clearTripState } = useTripStateStore(
    useShallow((s) => ({
      setTripState: s.setTripState,
      clearTripState: s.clearTripState,
    }))
  );

  const { state, setState } = useCoAgent<TripState>({
    name: AGENT_NAME,
    initialState: (): TripState => useTripStateStore.getState().tripStates[sessionId] ?? {},
  });

  const hasRestoredRef = useRef(false);
  const userSelectedRef = useRef(false);

  useEffect(() => {
    if (hasRestoredRef.current) return;
    hasRestoredRef.current = true;
    const saved = useTripStateStore.getState().tripStates[sessionId];
    if (saved && Object.keys(saved).length > 0) setState(saved);
  }, []);

  const persistState = useCallback(
    (nextState: TripState) => {
      setTripState(sessionId, nextState);
    },
    [sessionId, setTripState]
  );

  const selectFlight = useCallback(
    (flight: Flight, type: keyof SelectedFlight) => {
      userSelectedRef.current = true;
      setState((prev) => {
        const next = { ...(prev ?? {}), flights: { ...(prev?.flights ?? {}), [type]: flight } };
        persistState(next);
        return next;
      });
    },
    [setState]
  );

  const selectHotel = useCallback(
    (hotel: HotelAvailability) => {
      userSelectedRef.current = true;
      setState((prev) => {
        const next = { ...(prev ?? {}), hotel };
        persistState(next);
        return next;
      });
    },
    [setState]
  );

  const setItineraryDetails = useCallback(
    (details: Pick<TripState, 'destination' | 'startDate' | 'endDate' | 'travelers'>) => {
      setState((prev) => {
        const destinationChanged = prev?.destination && prev.destination !== details.destination;
        return {
          ...(prev ?? {}),
          ...details,
          ...(destinationChanged && { flights: undefined, hotel: undefined }),
        };
      });
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
    userSelectedRef.current = false;
    hasRestoredRef.current = false;
    setState({});
    clearTripState(sessionId);
  }, [setState, sessionId, clearTripState]);

  return { state, selectFlight, selectHotel, setItineraryDetails, setItineraryActive, clearTrip };
};
