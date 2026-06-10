import { CustomAssistantMessage } from '@/components/chat/CustomAssistantMessage';
import { CustomUserMessage } from '@/components/chat/CustomUserMessage';
import { useCopilotChatInternal } from '@copilotkit/react-core';
import type { InputProps, MessagesProps } from '@copilotkit/react-ui';
import { CopilotChat } from '@copilotkit/react-ui';
import '@copilotkit/react-ui/styles.css';
import { useMemo, useRef } from 'react';
import { useShallow } from 'zustand/shallow';

// Stores
import { useThreadStore } from '@/stores';

// Hooks
import {
  useBookedActions,
  useBookingInfo,
  useFlightAction,
  useHotelAction,
  useInjectThreadHistory,
  useLocalTipsAction,
  usePlacesAction,
  useRouteAction,
  useTitleSync,
  useTripSummaryAction,
  useWeatherAction,
} from '@/hooks';

// Components
import { BookingPanel } from './BookingPanel';
import { ChatInputBar } from './ChatInputBar';
import { ChatMessages } from './ChatMessages';

export const TravelChat = () => {
  const sendRef = useRef<((text: string) => Promise<unknown>) | null>(null);
  const { messages } = useCopilotChatInternal();
  const isEmpty = messages.length === 0;

  const { activeThreadId, isResumed, threads } = useThreadStore(
    useShallow((state) => ({
      activeThreadId: state.activeThreadId,
      isResumed: state.isResumed,
      threads: state.threads,
    }))
  );

  const activeThread = threads.find((thread) => thread.id === activeThreadId);
  const threadTitle = activeThread?.title ?? 'Travel Assistant';

  const { isLoading: isHistoryLoading } = useInjectThreadHistory(activeThreadId, isResumed);
  const isHistoryLoadingRef = useRef(isHistoryLoading);
  isHistoryLoadingRef.current = isHistoryLoading;

  useBookingInfo();
  useFlightAction();
  useHotelAction();
  useWeatherAction();
  usePlacesAction();
  useRouteAction();
  useLocalTipsAction();
  useTripSummaryAction();
  useTitleSync();
  useBookedActions();

  const CustomInput = useMemo(() => {
    const InputComp = (props: InputProps) => {
      sendRef.current = props.onSend;
      return <ChatInputBar {...props} />;
    };

    return InputComp;
  }, []);

  const CustomMessages = useMemo(() => {
    const MessagesComp = (props: MessagesProps) => (
      <ChatMessages {...props} sendRef={sendRef} isHistoryLoading={isHistoryLoadingRef.current} />
    );

    return MessagesComp;
  }, []);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="border-border-secondary bg-background-primary flex h-14 shrink-0 items-center justify-between border-b px-5">
        <div className="flex flex-col justify-center gap-1">
          <h1 className="text-body text-text-primary font-medium leading-none">{threadTitle}</h1>
        </div>
      </header>

      <BookingPanel />

      <CopilotChat
        className="flex flex-1 flex-col overflow-hidden"
        Messages={CustomMessages}
        Input={CustomInput}
        AssistantMessage={CustomAssistantMessage}
        UserMessage={CustomUserMessage}
      />
    </div>
  );
};
