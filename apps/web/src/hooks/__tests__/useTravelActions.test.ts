import { renderHook } from '@testing-library/react';
import { useTravelActions } from '@/hooks/useTravelActions';

const mockUseCopilotReadable = jest.fn();

jest.mock('@copilotkit/react-core', () => ({
  useCopilotReadable: (...args: unknown[]) => mockUseCopilotReadable(...args),
}));

jest.mock('@/hooks/useTripState', () => ({
  useTripState: () => ({ state: {} }),
}));

beforeEach(() => mockUseCopilotReadable.mockClear());

describe('useTravelActions', () => {
  it('registers two useCopilotReadable calls on mount', () => {
    renderHook(() => useTravelActions());
    expect(mockUseCopilotReadable).toHaveBeenCalledTimes(2);
  });

  it('registers flight readable with correct description', () => {
    renderHook(() => useTravelActions());
    const [flightCall] = mockUseCopilotReadable.mock.calls;
    expect(flightCall[0].description).toContain('Flights');
  });

  it('registers hotel readable with correct description', () => {
    renderHook(() => useTravelActions());
    const [, hotelCall] = mockUseCopilotReadable.mock.calls;
    expect(hotelCall[0].description).toContain('Hotel');
  });

  it('passes "No flights booked" when no flights in state', () => {
    renderHook(() => useTravelActions());
    const [flightCall] = mockUseCopilotReadable.mock.calls;
    expect(flightCall[0].value).toBe('No flights booked');
  });

  it('passes "No hotel booked" when no hotel in state', () => {
    renderHook(() => useTravelActions());
    const [, hotelCall] = mockUseCopilotReadable.mock.calls;
    expect(hotelCall[0].value).toBe('No hotel booked');
  });
});
