import { renderHook } from '@testing-library/react';
import { useHotelAction } from '@/hooks/useHotelAction';

const mockUseRenderToolCall = jest.fn();

jest.mock('@copilotkit/react-core', () => ({
  useRenderToolCall: (...args: unknown[]) => mockUseRenderToolCall(...args),
}));

jest.mock('@/hooks', () => ({
  useTripState: () => ({ selectHotel: jest.fn(), state: {} }),
}));

jest.mock('@/constants', () => ({
  TOOL_NAMES: { HOTEL: 'hotelTool' },
  TOOL_STATUS: { IN_PROGRESS: 'inProgress', EXECUTING: 'executing', COMPLETE: 'complete' },
}));

jest.mock('@/components', () => ({
  HotelCard: () => null,
  LoadingCard: () => null,
}));

jest.mock('@/utils', () => ({
  isToolPending: (status: string) => status === 'inProgress' || status === 'executing',
}));

jest.mock('@repo/schemas', () => ({
  HotelAvailability: {},
  HotelSearchResultSchema: { safeParse: () => ({ success: false }) },
}));

beforeEach(() => mockUseRenderToolCall.mockClear());

describe('useHotelAction', () => {
  it('registers useRenderToolCall on mount', () => {
    renderHook(() => useHotelAction());
    expect(mockUseRenderToolCall).toHaveBeenCalledTimes(1);
  });

  it('registers with the hotelTool name', () => {
    renderHook(() => useHotelAction());
    expect(mockUseRenderToolCall).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'hotelTool' })
    );
  });

  it('render returns LoadingCard when status is inProgress', () => {
    renderHook(() => useHotelAction());
    const { render } = mockUseRenderToolCall.mock.calls[0][0];
    const result = render({ status: 'inProgress', result: null, args: {} });
    expect(result).not.toBeNull();
  });
});
