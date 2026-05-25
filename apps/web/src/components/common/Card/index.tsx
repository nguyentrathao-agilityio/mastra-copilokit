// components/common/Card/index.tsx
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';

interface CardProps {
  isSelected?: boolean;
  paddingClass?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Base card surface. Compose with CardHeader / CardFooter.
 * @example
 * <Card isSelected onClick={handleSelect}>
 *   <CardHeader title="Hội An" badgeSlot={<Badge variant="culture" label="Culture"/>} />
 *   <CardFooter left={<Badge variant="cheapest" label="Cheapest"/>} right={<Button size="sm">View</Button>} />
 * </Card>
 */
const Card = ({
  isSelected = false,
  paddingClass = 'px-5 py-4',
  children,
  className,
  onClick,
}: CardProps) => (
  <div
    role={onClick ? 'button' : undefined}
    tabIndex={onClick ? 0 : undefined}
    onClick={onClick}
    onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    className={cn(
      'rounded-lg transition-colors',
      paddingClass,
      isSelected
        ? 'border-border-info bg-background-info border-2'
        : 'border-border-tertiary bg-background-primary border-2',
      onClick && 'cursor-pointer',
      className
    )}
  >
    {children}
  </div>
);

export { Card, CardHeader, CardFooter };
