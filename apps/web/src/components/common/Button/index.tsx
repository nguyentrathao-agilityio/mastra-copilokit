// components/common/Button.tsx
import { memo, useCallback } from 'react';
import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';
import { BUTTON_VARIANT_MAP, BUTTON_SIZE_MAP } from '@/constants/button';
import type { ButtonVariant, ButtonSize } from '@/constants/button';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

/**
 * Reusable button. All colors resolved from CSS variable tokens.
 * @example
 * <Button variant="primary" leftIcon={<i className="ti ti-map-2" />}>Plan trip</Button>
 */
const Button = memo(
  ({
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    children,
    onClick,
    disabled = false,
    type = 'button',
    className,
  }: ButtonProps) => {
    const handleClick = useCallback(() => {
      onClick?.();
    }, [onClick]);

    return (
      <button
        type={type}
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-150',
          'disabled:pointer-events-none disabled:opacity-40',
          BUTTON_VARIANT_MAP[variant],
          BUTTON_SIZE_MAP[size],
          className
        )}
      >
        {leftIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
