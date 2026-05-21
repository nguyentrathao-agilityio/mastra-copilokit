import { useEffect, RefObject } from 'react';

/**
 * Focuses and selects all text in the referenced input when `enabled` becomes true.
 */
export const useAutoFocus = (ref: RefObject<HTMLInputElement | null>, enabled: boolean): void => {
  useEffect(() => {
    if (enabled) {
      ref.current?.focus();
      ref.current?.select();
    }
  }, [ref, enabled]);
};
