import { useCallback, useEffect } from 'react';
import { History, MessageSquare, Plus } from 'lucide-react';

// Components
import { ThreadItem } from '@/components/common';

// Stores
import { useThreadStore } from '@/stores';

// Utils
import { cn } from '@/utils';

/**
 * Conversation history section: new chat button, thread list, and empty state.
 * "New chat" only signals intent — the thread is created on first message send.
 */
const ThreadList = () => {
  const {
    threads,
    activeThreadId,
    isPendingNewChat,
    isLoading,
    startNewChat,
    selectThread,
    deleteThread,
    renameThread,
    fetchThreads,
  } = useThreadStore();

  const isPending = isPendingNewChat && activeThreadId === null;

  const handleNewChat = useCallback(() => startNewChat(), [startNewChat]);
  const handleSelect = useCallback((id: string) => selectThread(id), [selectThread]);
  const handleDelete = useCallback((id: string) => deleteThread(id), [deleteThread]);
  const handleRename = useCallback(
    (id: string, newTitle: string) => renameThread(id, newTitle),
    [renameThread]
  );

  /**
   * Fetch threads on mount
   */
  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <div className="flex flex-col">
      <button
        onClick={handleNewChat}
        disabled={isPending}
        className={cn(
          'border-brand-500 text-body font-regular text-brand-600 mb-10 flex w-full items-center gap-2 rounded-md border px-3 py-1.5 transition-colors',
          isPending ? 'cursor-not-allowed opacity-40' : 'hover:bg-brand-50'
        )}
      >
        <Plus size={14} />
        New chat
      </button>

      <p className="text-label text-brand-600 flex select-none items-center gap-1.5 px-1 font-medium uppercase tracking-widest">
        <History size={12} />
        History
      </p>
      {isLoading && threads.length === 0 ? (
        <div className="flex flex-col gap-0.5 pt-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-md px-3 py-2">
              <div className="bg-border-secondary h-3 w-3/4 animate-pulse rounded" />
              <div className="bg-border-secondary mt-1.5 h-2.5 w-1/3 animate-pulse rounded" />
            </div>
          ))}
        </div>
      ) : threads.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-8 text-center">
          <MessageSquare size={20} className="text-text-tertiary" />
          <p className="text-meta font-regular text-text-tertiary">No conversations yet</p>
        </div>
      ) : (
        <div className="flex flex-col gap-0.5">
          {threads.map((thread) => (
            <ThreadItem
              key={thread.id}
              thread={thread}
              isActive={!isPendingNewChat && thread.id === activeThreadId}
              onSelect={handleSelect}
              onDelete={handleDelete}
              onRename={handleRename}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { ThreadList };
