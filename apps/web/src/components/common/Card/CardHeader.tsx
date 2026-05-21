// components/common/Card/CardHeader.tsx
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  badgeSlot?: ReactNode;
  className?: string;
}

const CardHeader = ({ title, subtitle, badgeSlot, className }: CardHeaderProps) => (
  <div className={cn('flex items-start justify-between gap-2', className)}>
    <div className="min-w-0 flex-1">
      <p className="text-card-title text-text-primary truncate font-medium">{title}</p>
      {subtitle && <p className="text-meta font-regular text-text-tertiary mt-0.5">{subtitle}</p>}
    </div>
    {badgeSlot && <div className="flex-shrink-0">{badgeSlot}</div>}
  </div>
);

export { CardHeader };
