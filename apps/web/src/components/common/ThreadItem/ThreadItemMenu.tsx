'use client';

import { useState, useCallback, useRef, MouseEvent } from 'react';
import { MoreVertical, Pencil, Trash2 } from 'lucide-react';

// Hooks
import { useClickOutside } from '@/hooks';

// Utils
import { cn } from '@/utils';

interface ThreadItemMenuProps {
  onRenameClick: () => void;
  onDeleteClick: (e: MouseEvent) => void;
}

/**
 * "⋮" button + dropdown menu for rename and delete actions on a thread row.
 * Manages its own open/close state; relies on parent's `group` class for hover visibility.
 */
const ThreadItemMenu = ({ onRenameClick, onDeleteClick }: ThreadItemMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false), isOpen);

  const handleToggle = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  const handleRename = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      setIsOpen(false);
      onRenameClick();
    },
    [onRenameClick]
  );

  const handleDelete = useCallback(
    (e: MouseEvent) => {
      setIsOpen(false);
      onDeleteClick(e);
    },
    [onDeleteClick]
  );

  return (
    <div className="relative shrink-0" ref={menuRef}>
      <button
        onClick={handleToggle}
        aria-label="More options"
        className={cn(
          'text-text-tertiary hover:text-text-secondary cursor-pointer rounded p-0.5 transition-opacity',
          isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        )}
      >
        <MoreVertical size={14} />
      </button>

      {isOpen && (
        <div className="border-border-secondary bg-background-primary absolute right-0 top-full z-20 mt-1 w-36 rounded-lg border py-2">
          <button
            onClick={handleRename}
            className="text-body font-regular text-text-primary hover:bg-background-secondary transition-color cursors-pointer flex w-full cursor-pointer items-center gap-2 px-3 py-2"
          >
            <Pencil size={13} />
            Rename
          </button>
          <div className="bg-border-tertiary mx-2 my-0.5 h-px" />
          <button
            onClick={handleDelete}
            className="text-body font-regular text-text-primary hover:bg-background-secondary cursors-pointer flex w-full cursor-pointer items-center gap-2 px-3 py-2 transition-colors"
          >
            <Trash2 size={13} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export { ThreadItemMenu };
