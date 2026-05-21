// components/common/Card/CardFooter.tsx
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface CardFooterProps {
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
}

const CardFooter = ({ left, right, className }: CardFooterProps) => (
  <div
    className={cn(
      'border-border-tertiary mt-3 flex items-center justify-between gap-2 border-t pt-2.5',
      className
    )}
  >
    <div className="flex flex-wrap items-center gap-1.5">{left}</div>
    <div className="flex-shrink-0">{right}</div>
  </div>
);

export { CardFooter };
