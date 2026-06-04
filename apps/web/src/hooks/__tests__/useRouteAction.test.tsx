import React from 'react';
import { renderHook } from '@testing-library/react';
import { useRenderToolCall } from '@copilotkit/react-core';
import { useRouteAction } from '@/hooks/useRouteAction';

jest.mock('@/constants', () => ({
  TOOL_NAMES: { ROUTE: 'routeTool' },
  ROUTE_LOADING_SKELETON_COUNT: 3,
}));
jest.mock('@/components', () => ({ RouteCard: () => null, LoadingCard: () => null }));
jest.mock('@/utils', () => ({ isToolPending: (s: string) => s === 'inProgress' }));

const mockSafeParse = jest.fn(() => ({ success: false }));
jest.mock('@repo/schemas', () => ({
  RouteResultSchema: { safeParse: (...args: unknown[]) => mockSafeParse(...args) },
}));

beforeEach(() => {
  jest.mocked(useRenderToolCall).mockClear();
  mockSafeParse.mockReturnValue({ success: false });
});

describe('useRouteAction', () => {
  it('registers with the routeTool name', () => {
    renderHook(() => useRouteAction());
    expect(jest.mocked(useRenderToolCall)).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'routeTool' })
    );
  });

  it('render returns LoadingCard when status is pending', () => {
    renderHook(() => useRouteAction());
    const { render } = jest.mocked(useRenderToolCall).mock.calls[0][0];
    const result = render({ status: 'inProgress', result: null });
    expect(result).not.toBeNull();
  });

  it('render returns empty fragment when safeParse fails', () => {
    mockSafeParse.mockReturnValue({ success: false });
    renderHook(() => useRouteAction());
    const { render } = jest.mocked(useRenderToolCall).mock.calls[0][0];
    const result = render({ status: 'complete', result: {} });
    expect(result.type).toBe(React.Fragment);
  });

  it('render returns empty fragment when stops array is empty', () => {
    mockSafeParse.mockReturnValue({
      success: true,
      data: { city: 'Da Nang', stops: [], legs: [], totalDurationMin: 0 },
    });
    renderHook(() => useRouteAction());
    const { render } = jest.mocked(useRenderToolCall).mock.calls[0][0];
    const result = render({ status: 'complete', result: { stops: [] } });
    expect(result.type).toBe(React.Fragment);
  });

  it('render returns RouteCard when parse succeeds with stops', () => {
    const routeData = {
      city: 'Da Nang',
      totalDurationMin: 240,
      travelTip: 'Bring water',
      stops: [
        { name: 'Marble Mountains', city: 'Da Nang' },
        { name: 'Dragon Bridge', city: 'Da Nang' },
      ],
      legs: [{ mode: 'walk', durationMin: 15, distanceKm: 1.2 }],
    };
    mockSafeParse.mockReturnValue({ success: true, data: routeData });
    renderHook(() => useRouteAction());
    const { render } = jest.mocked(useRenderToolCall).mock.calls[0][0];
    const result = render({ status: 'complete', result: routeData });
    expect(result).not.toBeNull();
    expect(result.type).not.toBe(React.Fragment);
  });
});
