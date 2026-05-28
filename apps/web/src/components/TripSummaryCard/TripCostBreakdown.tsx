import { DollarSign } from 'lucide-react';

// Utils
import { cn, formatAmount } from '@/utils';

// Components
import { Divider, Typography } from '@/components';
import { TripCostEstimate } from '@repo/schemas';

interface TripCostBreakdownProps {
  estimate: TripCostEstimate;
  className?: string;
}

const TripCostBreakdown = ({ estimate, className }: TripCostBreakdownProps) => (
  <div className={cn('flex flex-col gap-2', className)}>
    <div className="flex items-center gap-2">
      <DollarSign size={14} className="text-text-secondary shrink-0" aria-hidden="true" />
      <Typography
        as="span"
        variant="label"
        weight="medium"
        color="tertiary"
        className="uppercase tracking-widest"
      >
        Estimated total
      </Typography>
    </div>

    <div className="border-border-secondary rounded-lg border">
      {/* Breakdown rows */}
      <ul className="divide-border-secondary divide-y">
        {estimate.breakdown.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-3 px-4 py-2.5">
            <div className="flex flex-col">
              <Typography as="span" variant="body" color="primary">
                {item.label}
              </Typography>
              {item.note && (
                <Typography as="span" variant="meta" color="tertiary">
                  {item.note}
                </Typography>
              )}
            </div>
            <Typography as="span" variant="body" weight="medium" className="shrink-0">
              {item.amount === 0 ? '—' : `~${formatAmount(item.amount, item.currency)}`}
            </Typography>
          </li>
        ))}
      </ul>

      <Divider />

      {/* Grand total */}
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex flex-col">
          <Typography as="span" variant="option-title" weight="medium">
            Grand total
          </Typography>
          <Typography as="span" variant="meta" color="tertiary">
            {estimate.days} night{estimate.days !== 1 ? 's' : ''} · {estimate.travelers} traveler
            {estimate.travelers !== 1 ? 's' : ''}
          </Typography>
        </div>
        <Typography as="span" variant="card-title" weight="medium" className="shrink-0">
          ~{formatAmount(estimate.grandTotal, estimate.currency)}
        </Typography>
      </div>
    </div>
  </div>
);

export { TripCostBreakdown };
