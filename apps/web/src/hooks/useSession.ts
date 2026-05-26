import { useMemo } from 'react';
import { SESSION_STORAGE_KEY } from '@/constants';

/**
 * Returns a stable session ID persisted in localStorage.
 * Generates a new UUID on first visit; reuses it on subsequent loads.
 */
export const useSession = (): string =>
  useMemo(() => {
    const stored = localStorage.getItem(SESSION_STORAGE_KEY);
    if (stored) return stored;
    const id = crypto.randomUUID();
    localStorage.setItem(SESSION_STORAGE_KEY, id);
    return id;
  }, []);
