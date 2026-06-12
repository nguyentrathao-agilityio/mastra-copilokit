import { useEffect, useCallback } from 'react';

// Components
import { Button } from '../Button';

// Stores
import { useSuggestionStore } from '@/stores';

// Constants
import { TOOL_SUGGESTIONS } from '@/constants';

interface SuggestionChipsProps {
  toolName: string;
}

/**
 * Renders clickable suggestion chips below a tool result card.
 * Only the most recently completed tool shows chips — older cards stay silent.
 */
const SuggestionChips = ({ toolName }: SuggestionChipsProps) => {
  const lastTool = useSuggestionStore((s) => s.lastTool);
  const setLastTool = useSuggestionStore((s) => s.setLastTool);
  const onSend = useSuggestionStore((s) => s.onSend);

  useEffect(() => {
    setLastTool(toolName);
  }, [toolName, setLastTool]);

  const handleClick = useCallback(
    (text: string) => {
      if (!onSend) return;
      setLastTool(null);
      void onSend(text);
    },
    [onSend, setLastTool]
  );

  const suggestions = TOOL_SUGGESTIONS[toolName] ?? [];

  if (lastTool !== toolName || !suggestions.length) return null;

  return (
    <div className="flex flex-wrap gap-2 pb-3 pt-2">
      {suggestions.map((s) => (
        <Button
          key={s}
          variant="ghost"
          size="sm"
          onClick={() => handleClick(s)}
          className="text-badge-primary-text font-regular border px-2.5 py-1 shadow"
        >
          {s}
        </Button>
      ))}
    </div>
  );
};

export { SuggestionChips };
