import React from 'react';
import { renderHook } from '@testing-library/react';
import { useFlightAction } from '@/hooks/useFlightAction';

const mockUseRenderToolCall = jest.fn();

jest.mock('@copilotkit/react-core', () => ({
  useRenderToolCall: (...args: unknown[]) => mockUseRenderToolCall(...args),
}));

// Mock the entire @/hooks barrel to prevent loading all hooks (avoids ESM chain via @mastra/client-js)
jest.mock('@/hooks', () => ({
  useTripState: () => ({ selectFlight: jest.fn(), state: {} }),
}));

jest.mock('@/constants', () => ({
  TOOL_NAMES: { FLIGHTS: 'flightsTool' },
  TOOL_STATUS: { IN_PROGRESS: 'inProgress', EXECUTING: 'executing', COMPLETE: 'complete' },
  FLIGHT_BASE_PARAMS: [],
}));

jest.mock('@/components', () => ({
  FlightCard: () => null,
  LoadingCard: () => null,
}));

jest.mock('@/utils', () => ({
  isToolPending: (status: string) => status === 'inProgress' || status === 'executing',
}));

beforeEach(() => mockUseRenderToolCall.mockClear());

describe('useFlightAction', () => {
  it('registers useRenderToolCall on mount', () => {
    renderHook(() => useFlightAction());
    expect(mockUseRenderToolCall).toHaveBeenCalledTimes(1);
  });

  it('registers with the flightsTool name', () => {
    renderHook(() => useFlightAction());
    expect(mockUseRenderToolCall).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'flightsTool' })
    );
  });

  it('render returns LoadingCard when status is inProgress', () => {
    renderHook(() => useFlightAction());
    const { render } = mockUseRenderToolCall.mock.calls[0][0];
    const result = render({ status: 'inProgress', result: null, args: {} });
    expect(result).not.toBeNull();
  });

  it('render returns empty fragment when result has no results', () => {
    renderHook(() => useFlightAction());
    const { render } = mockUseRenderToolCall.mock.calls[0][0];
    const result = render({ status: 'complete', result: { results: [] }, args: {} });
    expect(result.type).toBe(React.Fragment);
  });
});
