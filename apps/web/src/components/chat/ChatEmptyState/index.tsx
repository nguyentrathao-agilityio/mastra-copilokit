import { useCallback } from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

import { DESTINATION_PILLS, PRIMARY_SUGGESTION, SECONDARY_SUGGESTIONS } from '@/constants';

import { PrimaryCard } from './PrimaryCard';
import { SmallCard, FeatureCard } from './GridCards';

interface DestinationPillProps {
  city: string;
  onClick: () => void;
}

const DestinationPill = ({ city, onClick }: DestinationPillProps) => (
  <button
    onClick={onClick}
    className="rounded-pill border-border-tertiary text-meta text-text-secondary hover:border-border-secondary hover:text-text-primary flex items-center gap-1 border px-3 py-1 transition-colors"
  >
    {city}
    <ArrowRight size={11} className="shrink-0" />
  </button>
);

interface ChatEmptyStateProps {
  onSuggestionClick: (message: string) => void;
}

/**
 * Empty state shown before the first message in a thread.
 * Renders a grid of suggestion cards and destination pills.
 */
const ChatEmptyState = ({ onSuggestionClick }: ChatEmptyStateProps) => {
  const handlePrimary = useCallback(
    () => onSuggestionClick(PRIMARY_SUGGESTION.message),
    [onSuggestionClick]
  );
  const handleExplore = useCallback(
    () => onSuggestionClick(SECONDARY_SUGGESTIONS[0].message),
    [onSuggestionClick]
  );
  const handleHotels = useCallback(
    () => onSuggestionClick(SECONDARY_SUGGESTIONS[1].message),
    [onSuggestionClick]
  );
  const handleFlights = useCallback(
    () => onSuggestionClick(SECONDARY_SUGGESTIONS[2].message),
    [onSuggestionClick]
  );

  return (
    <div className="flex min-h-full flex-col items-center justify-center px-4 py-8">
      <div className="border-border-tertiary bg-badge-primary-bg mb-6 flex h-14 w-14 items-center justify-center rounded-lg border">
        <Rocket size={24} className="text-badge-primary-text" />
      </div>

      <h2 className="text-display text-text-primary mb-3 font-medium">Where to next?</h2>
      <p className="text-body font-regular text-text-secondary mb-5 max-w-md text-center">
        I'll help you plan the trip — itineraries, flights, places to stay, and where the locals
        actually eat.
      </p>

      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        <span className="text-label text-text-tertiary font-medium uppercase tracking-widest">
          Quick destinations:
        </span>
        {DESTINATION_PILLS.map((city) => {
          const handlePill = () => onSuggestionClick(`Plan my trip to ${city}`);
          return <DestinationPill key={city} city={city} onClick={handlePill} />;
        })}
      </div>

      <div className="flex w-full max-w-2xl flex-col gap-3">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
          <div className="md:col-span-4">
            <PrimaryCard
              icon={PRIMARY_SUGGESTION.icon}
              title={PRIMARY_SUGGESTION.title}
              description={PRIMARY_SUGGESTION.description}
              iconClassName="bg-badge-accent-bg text-badge-accent-text"
              onClick={handlePrimary}
            />
          </div>
          <div className="md:col-span-2">
            <SmallCard
              icon={SECONDARY_SUGGESTIONS[0].icon}
              title={SECONDARY_SUGGESTIONS[0].title}
              description={SECONDARY_SUGGESTIONS[0].description}
              iconClassName="bg-badge-secondary-bg text-badge-secondary-text"
              onClick={handleExplore}
            />
          </div>
          <div className="md:col-span-3">
            <FeatureCard
              icon={SECONDARY_SUGGESTIONS[1].icon}
              title={SECONDARY_SUGGESTIONS[1].title}
              description={SECONDARY_SUGGESTIONS[1].description}
              iconClassName="bg-badge-danger-bg text-badge-danger-text"
              onClick={handleHotels}
            />
          </div>
          <div className="md:col-span-3">
            <FeatureCard
              icon={SECONDARY_SUGGESTIONS[2].icon}
              title={SECONDARY_SUGGESTIONS[2].title}
              description={SECONDARY_SUGGESTIONS[2].description}
              iconClassName="bg-badge-primary-bg text-badge-primary-text"
              onClick={handleFlights}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ChatEmptyState };
export type { ChatEmptyStateProps };
