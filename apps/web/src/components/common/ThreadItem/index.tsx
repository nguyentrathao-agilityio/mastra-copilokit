'use client';

import { useState, useCallback, useRef, KeyboardEvent, MouseEvent } from 'react';

// Components
import { ThreadItemMenu } from './ThreadItemMenu';

// Hooks
import { useAutoFocus } from '@/hooks';

// Utils
import { cn, formatRelativeTime } from '@/utils';

// Types
import type { Thread } from '@/types';

interface ThreadItemProps {
  thread: Thread;
  isActive: boolean;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onRename: (id: string, newTitle: string) => void;
}

/**
 * Single thread row with a hover-revealed "⋮" menu for rename and delete.
 */
const ThreadItem = ({ thread, isActive, onSelect, onDelete, onRename }: ThreadItemProps) => {
  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState(thread.title);
  const renameInputRef = useRef<HTMLInputElement>(null);

  useAutoFocus(renameInputRef, isRenaming);

  const handleSelect = useCallback(() => {
    if (!isRenaming) onSelect(thread.id);
  }, [onSelect, thread.id, isRenaming]);

  const handleRowKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') handleSelect();
    },
    [handleSelect]
  );

  const handleRenameStart = useCallback(() => {
    setRenameValue(thread.title);
    setIsRenaming(true);
  }, [thread.title]);

  /**
   * Commits the rename action on input blur or Enter key, if the title is not empty and has changed.
   */
  const handleRenameCommit = useCallback(() => {
    const trimmed = renameValue.trim();
    if (trimmed && trimmed !== thread.title) {
      onRename(thread.id, trimmed);
    }

    setIsRenaming(false);
  }, [renameValue, thread.title, thread.id, onRename]);

  /**
   * Handles both Enter key and blur event to commit the rename action.
   * Escape key cancels the rename and resets the input value.
   */
  const handleRenameKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') handleRenameCommit();
      if (e.key === 'Escape') {
        setRenameValue(thread.title);
        setIsRenaming(false);
      }
    },
    [handleRenameCommit, thread.title]
  );

  const handleDelete = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      onDelete(thread.id);
    },
    [onDelete, thread.id]
  );

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleSelect}
      onKeyDown={handleRowKeyDown}
      className={cn(
        'group relative flex cursor-pointer select-none flex-col gap-0.5 rounded-md border-2 px-3 py-2 transition-colors',
        isActive
          ? 'border-border-info bg-background-secondary'
          : 'hover:bg-background-secondary border-transparent'
      )}
    >
      <div className="flex items-center gap-2">
        {isRenaming ? (
          <input
            ref={renameInputRef}
            value={renameValue}
            onChange={(e) => setRenameValue(e.target.value)}
            onKeyDown={handleRenameKeyDown}
            onBlur={handleRenameCommit}
            onClick={(e) => e.stopPropagation()}
            className="border-border-secondary text-body text-text-primary min-w-0 flex-1 border-b bg-transparent font-medium outline-none"
          />
        ) : thread.title ? (
          <p className="text-body text-text-primary flex-1 truncate font-medium">{thread.title}</p>
        ) : (
          <div className="bg-border-secondary h-3 w-3/4 animate-pulse rounded" />
        )}

        {/* Always reserve space for the menu button to prevent layout shift */}
        <div className={isRenaming ? 'invisible' : undefined}>
          <ThreadItemMenu onRenameClick={handleRenameStart} onDeleteClick={handleDelete} />
        </div>
      </div>

      {thread.preview && !isRenaming && (
        <p className="text-meta font-regular text-text-tertiary truncate">{thread.preview}</p>
      )}

      {!isRenaming && (
        <p className="font-regular text-text-tertiary text-[12px]">
          {formatRelativeTime(thread.updatedAt)}
        </p>
      )}
    </div>
  );
};

export { ThreadItem };
