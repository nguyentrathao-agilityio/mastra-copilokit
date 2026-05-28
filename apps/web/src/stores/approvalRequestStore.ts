import { create } from 'zustand';

export type ApprovalRequest = {
  thread_id: string;
  action_name: string;
  args: Record<string, unknown>;
  created_at: string;
};

type ApprovalRequestStore = {
  pendingApproval: ApprovalRequest | null;
  setPendingApproval: (data: ApprovalRequest | null) => void;
};

export const useApprovalRequestStore = create<ApprovalRequestStore>((set) => ({
  pendingApproval: null,
  setPendingApproval: (data) => set({ pendingApproval: data }),
}));
