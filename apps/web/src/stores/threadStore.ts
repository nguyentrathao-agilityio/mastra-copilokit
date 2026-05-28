import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Constants
import { SESSION_STORAGE_KEY } from '@/constants';

interface ThreadStore {
  activeThreadId: string;
  isResumed: boolean;
  setActiveThreadId: (id: string, resumed?: boolean) => void;
}

export const useThreadStore = create<ThreadStore>()(
  persist(
    (set) => ({
      activeThreadId: crypto.randomUUID(),
      isResumed: false,
      setActiveThreadId: (id, resumed = false) => set({ activeThreadId: id, isResumed: resumed }),
    }),
    {
      name: SESSION_STORAGE_KEY,
      partialize: (state) => ({ activeThreadId: state.activeThreadId }),
    }
  )
);
