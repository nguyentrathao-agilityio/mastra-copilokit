import { renderHook } from '@testing-library/react';
import { useLocalTipsAction } from '@/hooks/useLocalTipsAction';

const mockUseRenderToolCall = jest.fn();

jest.mock('@copilotkit/react-core', () => ({
  useRenderToolCall: (...args: unknown[]) => mockUseRenderToolCall(...args),
}));

jest.mock('@/constants', () => ({ TOOL_NAMES: { LOCAL_TIPS: 'localTipsTool' } }));
jest.mock('@/components', () => ({ LocalTipsCard: () => null }));
jest.mock('@/utils', () => ({ isToolPending: (s: string) => s === 'inProgress' }));
jest.mock('@repo/schemas', () => ({
  TipsResultSchema: { safeParse: () => ({ success: false }) },
}));

describe('useLocalTipsAction', () => {
  it('registers with the localTipsTool name', () => {
    renderHook(() => useLocalTipsAction());
    expect(mockUseRenderToolCall).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'localTipsTool' })
    );
  });
});
