import { Lightbulb } from 'lucide-react';

// Utils
import { cn } from '@/utils';

// Components
import { Card, Divider, LoadingCard, Typography } from '@/components';

// Constants
import { TIP_CATEGORY_CLASS_MAP } from '@/constants';

// Types
import type { TipsResult } from '@repo/types';

interface LocalTipsCardProps {
  data?: TipsResult;
  isLoading?: boolean;
  className?: string;
}

/**
 * Generative UI card — local tips and practical travel advice.
 */
const LocalTipsCard = ({ data, className }: LocalTipsCardProps) => {
  return (
    <Card className={cn('flex w-full max-w-2xl flex-col gap-3', className)}>
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Lightbulb size={16} className="text-text-secondary" aria-hidden="true" />
          <Typography variant="card-title" weight="medium">
            Local tips{data?.city ? `: ${data?.city}` : ''}
          </Typography>
        </div>
        <Typography as="span" variant="meta" color="tertiary">
          {data?.count} tips
        </Typography>
      </div>

      <Typography variant="meta" color="tertiary" className="mt-0.5">
        {data?.summary}
      </Typography>

      {/* Tips */}
      {data?.tips.length && (
        <>
          <Divider className="mt-3" />
          <ul className="mt-3 flex flex-col">
            {data?.tips.map((tip) => (
              <li
                key={tip.id}
                className={cn('border-border-tertiary border-b py-3 last:border-b-0 last:pb-0')}
              >
                <div className="flex items-start justify-between gap-2">
                  <Typography variant="body" weight="medium" color="primary">
                    {tip.title}
                  </Typography>
                  <div className="flex shrink-0 items-center gap-1.5">
                    {tip.isEssential && (
                      <span className="bg-badge-warning-bg text-badge-warning-text text-badge rounded-full px-2 py-0.5 font-medium">
                        essential
                      </span>
                    )}
                    <span
                      className={cn(
                        'text-badge rounded-full px-2 py-0.5 font-medium',
                        TIP_CATEGORY_CLASS_MAP[tip.category]
                      )}
                    >
                      {tip.category.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                <Typography variant="meta" color="secondary" className="mt-0.5 leading-relaxed">
                  {tip.content}
                </Typography>
              </li>
            ))}
          </ul>
        </>
      )}
    </Card>
  );
};

export default LocalTipsCard;
