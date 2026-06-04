import React from 'react';
import { renderHook } from '@testing-library/react';
import { useRenderToolCall } from '@copilotkit/react-core';
import { useLocalTipsAction } from '@/hooks/useLocalTipsAction';

jest.mock('@/constants', () => ({ TOOL_NAMES: { LOCAL_TIPS: 'localTipsTool' } }));
jest.mock('@/components', () => ({ LocalTipsCard: () => null }));
jest.mock('@/utils', () => ({ isToolPending: (s: string) => s === 'inProgress' }));

const mockSafeParse = jest.fn(() => ({ success: false }));
jest.mock('@repo/schemas', () => ({
  TipsResultSchema: { safeParse: (...args: unknown[]) => mockSafeParse(...args) },
}));

beforeEach(() => {
  jest.mocked(useRenderToolCall).mockClear();
  mockSafeParse.mockReturnValue({ success: false });
});

describe('useLocalTipsAction', () => {
  it('registers with the localTipsTool name', () => {
    renderHook(() => useLocalTipsAction());
    expect(jest.mocked(useRenderToolCall)).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'localTipsTool' })
    );
  });

  it('render returns LocalTipsCard (loading) when status is pending', () => {
    renderHook(() => useLocalTipsAction());
    const { render } = jest.mocked(useRenderToolCall).mock.calls[0][0];
    const result = render({ status: 'inProgress', result: null });
    expect(result).not.toBeNull();
  });

  it('render returns empty fragment when safeParse fails', () => {
    mockSafeParse.mockReturnValue({ success: false });
    renderHook(() => useLocalTipsAction());
    const { render } = jest.mocked(useRenderToolCall).mock.calls[0][0];
    const result = render({ status: 'complete', result: {} });
    expect(result.type).toBe(React.Fragment);
  });

  it('render returns empty fragment when count is 0', () => {
    mockSafeParse.mockReturnValue({
      success: true,
      data: { count: 0, tips: [], country: 'Vietnam', summary: '' },
    });
    renderHook(() => useLocalTipsAction());
    const { render } = jest.mocked(useRenderToolCall).mock.calls[0][0];
    const result = render({ status: 'complete', result: { count: 0 } });
    expect(result.type).toBe(React.Fragment);
  });

  it('render returns LocalTipsCard with data when parse succeeds and count > 0', () => {
    const tipsData = {
      country: 'Vietnam',
      count: 1,
      summary: 'Tips for Vietnam',
      tips: [
        {
          id: 't1',
          category: 'food',
          scope: 'city',
          title: 'Try Banh Mi',
          content: 'Delicious local food',
          isEssential: true,
          location: null,
        },
      ],
    };
    mockSafeParse.mockReturnValue({ success: true, data: tipsData });
    renderHook(() => useLocalTipsAction());
    const { render } = jest.mocked(useRenderToolCall).mock.calls[0][0];
    const result = render({ status: 'complete', result: tipsData });
    expect(result).not.toBeNull();
  });
});
