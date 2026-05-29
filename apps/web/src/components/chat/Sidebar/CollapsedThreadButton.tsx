import { useCallback } from 'react';
import { MessageSquare } from 'lucide-react';

import { cn } from '@/utils';
import { Button } from '@/components';

interface CollapsedThreadButtonProps {
  id: string;
  title: string;
  isActive: boolean;
  onSelect: (id: string) => void;
}

export const CollapsedThreadButton = ({
  id,
  title,
  isActive,
  onSelect,
}: CollapsedThreadButtonProps) => {
  const handleSelect = useCallback(() => onSelect(id), [id, onSelect]);

  return (
    <Button
      variant="ghost"
      title={title ?? 'Chat'}
      onClick={handleSelect}
      className={cn('mx-auto mb-0.5 h-9 w-9 p-0', isActive && 'bg-brand-100 text-brand-600')}
    >
      <MessageSquare size={15} />
    </Button>
  );
};
