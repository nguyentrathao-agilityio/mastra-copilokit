import { renderHook } from '@testing-library/react';
import { useWeatherAction } from '@/hooks/useWeatherAction';

const mockUseRenderToolCall = jest.fn();

jest.mock('@copilotkit/react-core', () => ({
  useRenderToolCall: (...args: unknown[]) => mockUseRenderToolCall(...args),
}));

jest.mock('@/constants', () => ({ TOOL_NAMES: { WEATHER: 'weatherTool' } }));
jest.mock('@/components', () => ({ WeatherCard: () => null, LoadingCard: () => null }));
jest.mock('@/utils', () => ({ isToolPending: (s: string) => s === 'inProgress' }));
jest.mock('@repo/schemas', () => ({
  WeatherResultSchema: { safeParse: () => ({ success: false }) },
}));

describe('useWeatherAction', () => {
  it('registers with the weatherTool name', () => {
    renderHook(() => useWeatherAction());
    expect(mockUseRenderToolCall).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'weatherTool' })
    );
  });
});
