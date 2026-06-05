import { render, screen } from '@testing-library/react';
import { useCopilotChatInternal } from '@copilotkit/react-core';
import { TravelChat } from '../TravelChat';

jest.mock('@/stores', () => ({
  useThreadStore: jest.fn((selector: (s: object) => unknown) =>
    selector({ activeThreadId: 'thread-1', isResumed: false })
  ),
}));

jest.mock('zustand/shallow', () => ({ useShallow: (fn: unknown) => fn }));

jest.mock('@/hooks', () => ({
  useTitleSync: jest.fn(),
  useWeatherAction: jest.fn(),
  useRouteAction: jest.fn(),
  useFlightAction: jest.fn(),
  usePlacesAction: jest.fn(),
  useLocalTipsAction: jest.fn(),
  useHotelAction: jest.fn(),
  useTripSummaryAction: jest.fn(),
  useInjectThreadHistory: jest.fn(),
  useBookingInfo: jest.fn(),
  useBookedActions: jest.fn(),
}));

beforeEach(() => {
  jest
    .mocked(useCopilotChatInternal)
    .mockReturnValue({ messages: [] } as unknown as ReturnType<typeof useCopilotChatInternal>);
});

describe('TravelChat', () => {
  describe('rendering', () => {
    it('renders the "Travel Assistant" heading', () => {
      render(<TravelChat />);
      expect(screen.getByRole('heading', { name: 'Travel Assistant' })).toBeInTheDocument();
    });

    it('does not show the subtitle when there are no messages', () => {
      render(<TravelChat />);
      expect(screen.queryByText('Ask me anything about your trip')).not.toBeInTheDocument();
    });

    it('shows the subtitle when messages exist', () => {
      jest
        .mocked(useCopilotChatInternal)
        .mockReturnValue({ messages: [{ id: 'm1', role: 'user', content: '' }] } as ReturnType<
          typeof useCopilotChatInternal
        >);
      render(<TravelChat />);
      expect(screen.getByText('Ask me anything about your trip')).toBeInTheDocument();
    });

    it('renders the CopilotChat component', () => {
      const { CopilotChat } = jest.requireMock('@copilotkit/react-ui');
      render(<TravelChat />);
      expect(CopilotChat).toHaveBeenCalled();
    });
  });

  describe('hooks', () => {
    it('mounts without errors when all action hooks are registered', () => {
      expect(() => render(<TravelChat />)).not.toThrow();
    });
  });
});
