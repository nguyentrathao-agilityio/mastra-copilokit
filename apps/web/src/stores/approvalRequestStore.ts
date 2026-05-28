import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { APPROVAL_REQUESTS_STORAGE_KEY } from '@/constants';

export type ApprovalRequest = {
  thread_id: string;
  action_name: string;
  args: Record<string, unknown>;
  created_at: string;
};

type ApprovalRequestStore = {
  approvals: Record<string, ApprovalRequest>;
  setPendingApproval: (threadId: string, data: ApprovalRequest | null) => void;
};

export const useApprovalRequestStore = create<ApprovalRequestStore>()(
  persist(
    (set) => ({
      approvals: {},
      setPendingApproval: (threadId, data) =>
        set((prev) => {
          if (!data) {
            const { [threadId]: _, ...rest } = prev.approvals;
            return { approvals: rest };
          }
          return { approvals: { ...prev.approvals, [threadId]: data } };
        }),
    }),
    {
      name: APPROVAL_REQUESTS_STORAGE_KEY,
      partialize: (state) => ({ approvals: state.approvals }),
    }
  )
);
