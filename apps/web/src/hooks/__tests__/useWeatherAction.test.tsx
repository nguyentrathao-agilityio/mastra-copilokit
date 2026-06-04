import React from 'react';
import { renderHook } from '@testing-library/react';
import { useRenderToolCall } from '@copilotkit/react-core';
import { useWeatherAction } from '@/hooks/useWeatherAction';

jest.mock('@/constants', () => ({ TOOL_NAMES: { WEATHER: 'weatherTool' } }));
jest.mock('@/components', () => ({ WeatherCard: () => null, LoadingCard: () => null }));
jest.mock('@/utils', () => ({ isToolPending: (s: string) => s === 'inProgress' }));

const mockSafeParse = jest.fn<{ success: boolean; data?: unknown }, unknown[]>(() => ({
  success: false,
}));
jest.mock('@repo/schemas', () => ({
  WeatherResultSchema: { safeParse: (arg: unknown) => mockSafeParse(arg) },
}));

beforeEach(() => {
  jest.mocked(useRenderToolCall).mockClear();
  mockSafeParse.mockReturnValue({ success: false });
});

describe('useWeatherAction', () => {
  it('registers with the weatherTool name', () => {
    renderHook(() => useWeatherAction());
    expect(jest.mocked(useRenderToolCall)).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'weatherTool' })
    );
  });

  it('render returns LoadingCard when isToolPending is true', () => {
    renderHook(() => useWeatherAction());
    const { render } = jest.mocked(useRenderToolCall).mock.calls[0][0];
    const result = render({ status: 'inProgress', args: {}, result: undefined });
    expect(result).not.toBeNull();
    expect(result.type).toBeDefined();
  });

  it('render returns empty fragment when safeParse fails', () => {
    mockSafeParse.mockReturnValue({ success: false });
    renderHook(() => useWeatherAction());
    const { render } = jest.mocked(useRenderToolCall).mock.calls[0][0];
    const result = render({ status: 'complete', args: {}, result: {} });
    expect(result.type).toBe(React.Fragment);
  });

  it('render returns WeatherCard when safeParse succeeds', () => {
    const fakeData = { city: 'Da Nang', forecast: [] };
    mockSafeParse.mockReturnValue({ success: true, data: fakeData });
    renderHook(() => useWeatherAction());
    const { render } = jest.mocked(useRenderToolCall).mock.calls[0][0];
    const result = render({ status: 'complete', args: {}, result: fakeData });
    expect(result).not.toBeNull();
    expect(result.type).not.toBe(React.Fragment);
  });
});
