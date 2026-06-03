import { useMemo, useRef, useCallback } from 'react';
import '@copilotkit/react-ui/styles.css';
import { CopilotChat, AssistantMessage as DefaultAssistantMessage } from '@copilotkit/react-ui';
import type { AssistantMessageProps, InputProps, MessagesProps } from '@copilotkit/react-ui';
import { useCopilotChatInternal } from '@copilotkit/react-core';
import { useShallow } from 'zustand/shallow';

// Stores
import { useThreadStore } from '@/stores';

// Hooks
import {
  useTitleSync,
  useWeatherAction,
  useRouteAction,
  useFlightAction,
  usePlacesAction,
  useLocalTipsAction,
  useHotelAction,
  useTripSummaryAction,
  useInjectThreadHistory,
} from '@/hooks';

// Components
import { ChatMessages } from './ChatMessages';
import { ChatInputBar } from './ChatInputBar';

// Constants
import { ASSISTANT_MESSAGE_FAILED_TERMS, CHAT_ROLE } from '@/constants';

export const TravelChat = () => {
  const sendRef = useRef<((text: string) => Promise<unknown>) | null>(null);
  const { messages } = useCopilotChatInternal();
  const isEmpty = messages.length === 0;

  const { activeThreadId, isResumed } = useThreadStore(
    useShallow((state) => ({ activeThreadId: state.activeThreadId, isResumed: state.isResumed }))
  );

  useInjectThreadHistory(activeThreadId, isResumed);
  useFlightAction();
  useHotelAction();
  useWeatherAction();
  usePlacesAction();
  useRouteAction();
  useLocalTipsAction();
  useTripSummaryAction();
  // useBookedActions();
  // useTravelActions();
  // useFlightSelectionGate();
  // useHotelBookingGate();

  // useProvideInfoFlight();
  // useProvideInfoHotel();
  useTitleSync();

  const CustomInput = useMemo(() => {
    const InputComp = (props: InputProps) => {
      sendRef.current = props.onSend;
      return <ChatInputBar {...props} />;
    };

    return InputComp;
  }, []);

  const CustomMessages = useMemo(() => {
    const MessagesComp = (props: MessagesProps) => <ChatMessages {...props} sendRef={sendRef} />;

    return MessagesComp;
  }, []);

  const CustomAssistantMessage = useCallback((props: AssistantMessageProps) => {
    const { message, messages } = props;

    if (message && messages) {
      const idx = messages.findIndex((m) => m.id === message.id);
      const lastUserIdx = [...messages]
        .slice(0, idx)
        .reduce((acc, m, i) => (m.role === CHAT_ROLE.USER ? i : acc), -1);
      const turnMessages = messages.slice(lastUserIdx + 1, idx);
      const assistantWithToolInTurn = turnMessages.find(
        (m) => m.role === CHAT_ROLE.ASSISTANT && m.toolCalls?.length
      );
      const toolResultInTurn = turnMessages.find((m) => m.role === CHAT_ROLE.TOOL);
      const isCancelOrError =
        toolResultInTurn?.content?.toLowerCase().includes('cancelled') ||
        toolResultInTurn?.content?.toLowerCase().includes('cancel') ||
        toolResultInTurn?.content?.toLowerCase().includes('error');

      // If the tool call in this assistant turn resulted in an error, we still want to show the assistant message.
      const isFailureMessage = ASSISTANT_MESSAGE_FAILED_TERMS.some((term) =>
        message.content?.toLowerCase().includes(term)
      );

      if (
        !isCancelOrError &&
        assistantWithToolInTurn &&
        message.content &&
        !message.toolCalls?.length &&
        !isFailureMessage
      ) {
        return null;
      }
    }

    return <DefaultAssistantMessage {...props} />;
  }, []);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="border-border-secondary bg-background-primary flex h-14 shrink-0 items-center justify-between border-b px-5">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-body text-text-primary font-medium leading-none">
              Travel Assistant
            </h1>
            {!isEmpty && (
              <p className="text-label text-text-tertiary mt-0.5">
                Ask me anything about your trip
              </p>
            )}
          </div>
        </div>
      </header>

      <CopilotChat
        className="flex flex-1 flex-col overflow-hidden"
        // AssistantMessage={CustomAssistantMessage}
        Messages={CustomMessages}
        Input={CustomInput}
      />
    </div>
  );
};
