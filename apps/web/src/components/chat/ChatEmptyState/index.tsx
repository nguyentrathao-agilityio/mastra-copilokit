import { useCallback } from 'react';
import { ArrowRight, Plane } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';

// Constants
import { DESTINATION_PILLS, PRIMARY_SUGGESTION, SECONDARY_SUGGESTIONS } from '@/constants';

// Components
import { Button } from '@/components';
import { useTheme } from '@/components/ThemeProvider';

interface PrimaryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

const PrimaryCard = ({ icon: Icon, title, description, onClick }: PrimaryCardProps) => {
  const { theme } = useTheme();
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={clsx(
        'border-brand-100 w-full justify-start gap-4 rounded-lg border-2 px-5 py-4',
        theme === 'dark' ? 'bg-brand-900' : 'bg-badge-primary-bg'
      )}
    >
      <div
        className={clsx(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
          theme === 'dark' ? 'bg-brand-800' : 'bg-brand-100'
        )}
      >
        <Icon size={18} className="text-brand-500" />
      </div>
      <div className="flex flex-col gap-0.5 text-left">
        <span className="text-body text-badge-primary-text font-medium">{title}</span>
        <span className="text-meta text-text-secondary">{description}</span>
      </div>
    </Button>
  );
};

interface SecondaryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

const SecondaryCard = ({ icon: Icon, title, description, onClick }: SecondaryCardProps) => (
  <Button
    variant="secondary"
    onClick={onClick}
    className="h-auto w-full flex-col items-start gap-1.5 rounded-lg p-4"
  >
    <Icon size={15} className="text-text-tertiary" />
    <span className="text-body text-text-primary font-medium">{title}</span>
    <span className="text-meta font-regular text-text-secondary text-start">{description}</span>
  </Button>
);

interface DestinationPillProps {
  city: string;
  onClick: () => void;
}

const DestinationPill = ({ city, onClick }: DestinationPillProps) => {
  const { theme } = useTheme();
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      rightIcon={<ArrowRight size={11} className="shrink-0" />}
      className={clsx(
        'text-meta text-text-secondary rounded-pill gap-1 border px-3 py-1',
        theme === 'dark'
          ? 'border-border-secondary hover:border-brand-500 hover:bg-brand-900 hover:text-text-primary'
          : 'border-border-secondary hover:border-brand-500 hover:bg-brand-50 hover:text-text-primary'
      )}
    >
      {city}
    </Button>
  );
};

interface ChatEmptyStateProps {
  onSuggestionClick: (message: string) => void;
}

/**
 * Empty state shown before the first message in a thread.
 * Renders a primary CTA card, 3 secondary cards, and clickable destination pills.
 */
const ChatEmptyState = ({ onSuggestionClick }: ChatEmptyStateProps) => {
  const handlePrimary = useCallback(
    () => onSuggestionClick(PRIMARY_SUGGESTION.message),
    [onSuggestionClick]
  );

  return (
    <div className="flex min-h-full flex-col items-center justify-center px-4">
      <div className="bg-brand-500 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl">
        <Plane size={24} className="text-white" />
      </div>

      <h2 className="text-display text-text-primary mb-3 font-medium">Where to next?</h2>
      <p className="text-body font-regular text-text-secondary mb-5 max-w-md text-center">
        I'll help you plan the trip — itineraries, flights, places to stay, and where the locals
        actually eat.
      </p>

      {/* Destination pills */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        <span className="text-meta text-text-tertiary">Try:</span>
        {DESTINATION_PILLS.map((city) => {
          const handlePill = () => onSuggestionClick(`Plan my trip to ${city}`);
          return <DestinationPill key={city} city={city} onClick={handlePill} />;
        })}
      </div>

      {/* Cards — 1 primary full-width + 3 secondary */}
      <div className="flex w-full max-w-lg flex-col gap-3">
        <PrimaryCard
          icon={PRIMARY_SUGGESTION.icon}
          title={PRIMARY_SUGGESTION.title}
          description={PRIMARY_SUGGESTION.description}
          onClick={handlePrimary}
        />
        <div className="grid grid-cols-3 gap-3">
          {SECONDARY_SUGGESTIONS.map(({ title, description, icon, message }) => {
            const handleClick = () => onSuggestionClick(message);

            return (
              <SecondaryCard
                key={title}
                icon={icon}
                title={title}
                description={description}
                onClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { ChatEmptyState };
export type { ChatEmptyStateProps };
