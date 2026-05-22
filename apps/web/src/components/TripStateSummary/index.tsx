import { ChevronRight, ExternalLink, type LucideIcon } from 'lucide-react';

// Utils
import { cn } from '@/utils';

// Components
import { Button, Card, Typography } from '@/components/common';

export interface TripStateItem {
  icon: LucideIcon;
  label: string;
  isPending?: boolean;
}

interface TripStateSummaryProps {
  items: TripStateItem[];
  summaryLabel?: string;
  onGenerateItinerary?: () => void;
  className?: string;
}

const TripStateSummary = ({
  items,
  summaryLabel,
  onGenerateItinerary,
  className,
}: TripStateSummaryProps) => (
  <Card paddingClass="px-4 py-3" className={className}>
    <div className="flex items-start justify-between gap-3">
      <div className="flex min-w-0 flex-col gap-2">
        {/* Breadcrumb row */}
        <div className="flex flex-wrap items-center gap-1">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <Icon
                    size={12}
                    className={cn(item.isPending ? 'text-text-tertiary' : 'text-text-secondary')}
                    aria-hidden="true"
                  />
                  <Typography
                    as="span"
                    variant="meta"
                    color={item.isPending ? 'tertiary' : 'secondary'}
                  >
                    {item.label}
                  </Typography>
                </div>
                {index < items.length - 1 && (
                  <ChevronRight size={12} className="text-text-tertiary" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>

        {/* Summary label */}
        {summaryLabel && (
          <Typography variant="meta" color="tertiary">
            {summaryLabel}
          </Typography>
        )}
      </div>

      {onGenerateItinerary && (
        <Button
          size="sm"
          variant="secondary"
          onClick={onGenerateItinerary}
          rightIcon={<ExternalLink size={12} aria-hidden="true" />}
        >
          Generate itinerary
        </Button>
      )}
    </div>
  </Card>
);

export default TripStateSummary;
