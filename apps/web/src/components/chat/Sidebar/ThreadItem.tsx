import { useCallback } from 'react';
import { Trash2 } from 'lucide-react';
import type { KeyboardEvent, MouseEvent } from 'react';

import { cn } from '@/utils';
import { Button } from '@/components';

export interface ThreadItemProps {
  id: string;
  title: string | null;
  isActive: boolean;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ThreadItem = ({ id, title, isActive, onSelect, onDelete }: ThreadItemProps) => {
  const handleSelect = useCallback(() => onSelect(id), [id, onSelect]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter') onSelect(id);
    },
    [id, onSelect]
  );

  const handleDelete = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      onDelete(id);
    },
    [id, onDelete]
  );

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      className={cn(
        'group relative mx-2 mb-0.5 flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 transition-colors',
        isActive ? 'bg-sidebar-item-active' : 'hover:bg-sidebar-item-hover'
      )}
    >
      <span
        className={cn(
          'h-1.5 w-1.5 shrink-0 rounded-full',
          isActive ? 'bg-sidebar-dot-active' : 'bg-sidebar-dot-idle'
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          'text-meta min-w-0 flex-1 truncate font-medium',
          isActive ? 'text-sidebar-text' : 'text-sidebar-text-muted'
        )}
      >
        {title || 'New chat'}
      </span>
      <Button
        variant="ghost"
        aria-label="Delete conversation"
        onClick={handleDelete}
        className="text-sidebar-text-muted hover:text-sidebar-text hidden shrink-0 p-0.5 hover:bg-transparent group-hover:flex"
      >
        <Trash2 size={12} />
      </Button>
    </div>
  );
};
