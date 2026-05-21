import { type ReactNode } from 'react';

// Utils
import { cn } from '@/utils';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize = 'display' | 'heading' | 'card-title' | 'option-title';

const SIZE_CLASS_MAP: Record<HeadingSize, string> = {
  display: 'text-display font-medium',
  heading: 'text-heading font-medium',
  'card-title': 'text-card-title font-medium',
  'option-title': 'text-option-title font-medium',
};

interface HeadingProps {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: HeadingTag;
  size?: HeadingSize;
}

/**
 * Semantic heading with design-token typography sizes.
 * Defaults to `<h2>` — always set `as` to the correct heading level for the page outline.
 */
const Heading = ({ id, as = 'h2', size, className, children }: HeadingProps) => {
  const SemanticTag = as;

  return (
    <SemanticTag id={id} className={cn(size && SIZE_CLASS_MAP[size], className)}>
      {children}
    </SemanticTag>
  );
};

export { Heading, type HeadingProps };
