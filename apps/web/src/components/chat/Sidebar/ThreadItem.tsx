import { useCallback } from 'react';
import { MessageSquare, Trash2 } from 'lucide-react';
import type { KeyboardEvent, MouseEvent } from 'react';

// Utils
import { cn } from '@/utils';

// Components
import { Button, Typography } from '@/components';

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
        'group relative mx-2 mb-0.5 flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-colors',
        isActive
          ? 'bg-brand-50 text-brand-700'
          : 'text-text-secondary hover:bg-background-secondary hover:text-text-primary'
      )}
    >
      <MessageSquare
        size={13}
        className={cn('shrink-0', isActive ? 'text-brand-500' : 'text-text-tertiary')}
      />
      <Typography variant="meta" weight="medium" className="min-w-0 flex-1 truncate">
        {title || 'New chat'}
      </Typography>
      <Button
        variant="ghost"
        aria-label="Delete"
        onClick={handleDelete}
        className="hidden shrink-0 rounded p-0.5 group-hover:flex"
      >
        <Trash2 size={12} />
      </Button>
      {isActive && (
        <span className="bg-brand-500 absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-r" />
      )}
    </div>
  );
};
