import { renderHook } from '@testing-library/react';
import { usePlacesAction } from '@/hooks/usePlacesAction';

const mockUseRenderToolCall = jest.fn();

jest.mock('@copilotkit/react-core', () => ({
  useRenderToolCall: (...args: unknown[]) => mockUseRenderToolCall(...args),
}));

jest.mock('@/constants', () => ({
  TOOL_NAMES: { PLACES: 'placesTool' },
  PLACES_LOADING_SKELETON_COUNT: 3,
}));
jest.mock('@/components', () => ({ PlacesCard: () => null, LoadingCard: () => null }));
jest.mock('@/utils', () => ({ isToolPending: (s: string) => s === 'inProgress' }));
jest.mock('@repo/schemas', () => ({
  PlacesSearchResultSchema: { safeParse: () => ({ success: false }) },
}));

describe('usePlacesAction', () => {
  it('registers with the placesTool name', () => {
    renderHook(() => usePlacesAction());
    expect(mockUseRenderToolCall).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'placesTool' })
    );
  });
});
