import { renderHook } from '@testing-library/react';
import { useRouteAction } from '@/hooks/useRouteAction';

const mockUseRenderToolCall = jest.fn();

jest.mock('@copilotkit/react-core', () => ({
  useRenderToolCall: (...args: unknown[]) => mockUseRenderToolCall(...args),
}));

jest.mock('@/constants', () => ({
  TOOL_NAMES: { ROUTE: 'routeTool' },
  ROUTE_LOADING_SKELETON_COUNT: 3,
}));
jest.mock('@/components', () => ({ RouteCard: () => null, LoadingCard: () => null }));
jest.mock('@/utils', () => ({ isToolPending: (s: string) => s === 'inProgress' }));
jest.mock('@repo/schemas', () => ({
  RouteResultSchema: { safeParse: () => ({ success: false }) },
}));

describe('useRouteAction', () => {
  it('registers with the routeTool name', () => {
    renderHook(() => useRouteAction());
    expect(mockUseRenderToolCall).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'routeTool' })
    );
  });
});
