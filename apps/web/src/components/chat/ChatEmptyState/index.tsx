import { Plane } from 'lucide-react';
import { cn } from '@/utils';

const SUGGESTIONS = [
  {
    emoji: '🗺️',
    title: 'Explore places',
    example: '"Show me places to visit in Da Nang"',
    message: 'Show me places to visit in Da Nang',
  },
  {
    emoji: '🏨',
    title: 'Show hotels',
    example: '"Show hotels in Hoi An"',
    message: 'Show hotels in Hoi An',
  },
  {
    emoji: '✈️',
    title: 'Show flights',
    example: '"Find flights to Bangkok"',
    message: 'Find flights to Bangkok',
  },
  {
    emoji: '🧳',
    title: 'Plan my trip',
    example: '"Create itinerary for Da Nang"',
    message: 'Create itinerary for Da Nang',
  },
] as const;

interface SuggestionCardProps {
  emoji: string;
  title: string;
  example: string;
  onClick: () => void;
  className?: string;
}

const SuggestionCard = ({ emoji, title, example, onClick, className }: SuggestionCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'border-border-secondary bg-background-primary hover:bg-background-secondary flex flex-col items-start gap-1.5 rounded-lg border p-4 text-left transition-colors',
      className
    )}
  >
    <span className="text-xl leading-none">{emoji}</span>
    <span className="text-body text-text-primary font-medium">{title}</span>
    <span className="text-meta font-regular text-text-secondary">{example}</span>
  </button>
);

interface ChatEmptyStateProps {
  onSuggestionClick: (message: string) => void;
}

const ChatEmptyState = ({ onSuggestionClick }: ChatEmptyStateProps) => (
  <div className="flex min-h-full flex-col items-center justify-center">
    <div className="bg-brand-500 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
      <Plane size={28} className="text-white" />
    </div>
    <h2 className="text-display text-text-primary mb-3 font-medium">Where to next?</h2>
    <p className="text-body font-regular text-text-secondary mb-8 max-w-md text-center">
      I'll help you plan the trip — itineraries, flights, places to stay, and where the locals
      actually eat.
    </p>
    <div className="grid w-full max-w-lg grid-cols-2 gap-3">
      {SUGGESTIONS.map((s) => {
        const handleClick = () => onSuggestionClick(s.message);
        return (
          <SuggestionCard
            key={s.title}
            emoji={s.emoji}
            title={s.title}
            example={s.example}
            onClick={handleClick}
          />
        );
      })}
    </div>
  </div>
);

export { ChatEmptyState };
export type { ChatEmptyStateProps };
