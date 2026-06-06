import { cn } from '@/utils';

const SkeletonBubble = ({ align, widths }: { align: 'left' | 'right'; widths: string[] }) => (
  <div className={cn('mb-3 flex w-full', align === 'right' ? 'justify-end' : 'justify-start')}>
    <div className="flex max-w-[70%] flex-col gap-1.5">
      {widths.map((width, index) => (
        <div
          key={index}
          aria-hidden="true"
          className={cn('bg-border-tertiary h-9 animate-pulse rounded-lg', width)}
        />
      ))}
    </div>
  </div>
);

/**
 * Skeleton placeholder shown while thread history is being fetched.
 * Simulates alternating user/assistant bubbles to preserve layout during load.
 */
const ChatHistoryLoading = () => (
  <div
    role="status"
    aria-busy="true"
    aria-label="Loading chat history"
    className="flex flex-col px-1 pt-2"
  >
    <SkeletonBubble align="right" widths={['w-48']} />
    <SkeletonBubble align="left" widths={['w-64', 'w-56']} />
    <SkeletonBubble align="right" widths={['w-36']} />
    <SkeletonBubble align="left" widths={['w-72', 'w-60', 'w-48']} />
  </div>
);

export { ChatHistoryLoading };
