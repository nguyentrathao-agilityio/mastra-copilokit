import { renderHook } from '@testing-library/react';
import { useTripSummaryAction } from '@/hooks/useTripSummaryAction';

const mockUseRenderToolCall = jest.fn();

jest.mock('@copilotkit/react-core', () => ({
  useRenderToolCall: (...args: unknown[]) => mockUseRenderToolCall(...args),
}));

jest.mock('@/hooks/useTripState', () => ({
  useTripState: () => ({ state: {} }),
}));

jest.mock('@/constants', () => ({ TOOL_NAMES: { TRIP_SUMMARY: 'tripSummaryTool' } }));
jest.mock('@/components', () => ({ TripSummaryCard: () => null, LoadingCard: () => null }));
jest.mock('@/utils', () => ({ isToolPending: (s: string) => s === 'inProgress' }));
jest.mock('@repo/schemas', () => ({
  TripSummaryResultSchema: { safeParse: () => ({ success: false }) },
}));

describe('useTripSummaryAction', () => {
  it('registers with the tripSummaryTool name', () => {
    renderHook(() => useTripSummaryAction());
    expect(mockUseRenderToolCall).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'tripSummaryTool' })
    );
  });
});
