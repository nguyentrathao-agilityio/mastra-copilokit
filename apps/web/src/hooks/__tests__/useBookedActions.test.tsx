import { renderHook } from '@testing-library/react';
import { useBookedActions } from '@/hooks/useBookedActions';

const mockUseCopilotAction = jest.fn();

jest.mock('@copilotkit/react-core', () => ({
  useCopilotAction: (...args: unknown[]) => mockUseCopilotAction(...args),
}));

jest.mock('@/hooks/useTripState', () => ({
  useTripState: () => ({ state: {} }),
}));

jest.mock('@/constants', () => ({
  ACTIONS: {
    SHOW_BOOKED_FLIGHTS: 'show-booked-flights',
    SHOW_BOOKED_HOTEL: 'show-booked-hotel',
  },
}));

jest.mock('@/components', () => ({
  LoadingCard: () => null,
  FlightOptionItem: () => null,
  HotelOptionItem: () => null,
}));

jest.mock('@/utils', () => ({ isToolPending: (s: string) => s === 'inProgress' }));

beforeEach(() => mockUseCopilotAction.mockClear());

describe('useBookedActions', () => {
  it('registers two CopilotKit actions on mount', () => {
    renderHook(() => useBookedActions());
    expect(mockUseCopilotAction).toHaveBeenCalledTimes(2);
  });

  it('registers the show-booked-flights action', () => {
    renderHook(() => useBookedActions());
    const names = mockUseCopilotAction.mock.calls.map((c) => c[0].name);
    expect(names).toContain('show-booked-flights');
  });

  it('registers the show-booked-hotel action', () => {
    renderHook(() => useBookedActions());
    const names = mockUseCopilotAction.mock.calls.map((c) => c[0].name);
    expect(names).toContain('show-booked-hotel');
  });
});
