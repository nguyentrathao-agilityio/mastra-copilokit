import { useCallback } from 'react';

// Constants
import { MASTRA_URL } from '@/constants';

// Stores
import { useThreadStore } from '@/stores/threadStore';
import { useApprovalRequestStore } from '@/stores/approvalRequestStore';

export type { ApprovalRequest } from '@/stores/approvalRequestStore';

export const useApprovalRequest = () => {
  const sessionId = useThreadStore((state) => state.activeThreadId);
  const setPendingApproval = useApprovalRequestStore((state) => state.setPendingApproval);

  const savePending = useCallback(
    async (actionName: string, args: Record<string, unknown>): Promise<void> => {
      try {
        await fetch(`${MASTRA_URL}/approval-requests`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ threadId: sessionId, actionName, args }),
        });
      } catch {}
    },
    [sessionId]
  );

  const clearPending = useCallback(async (): Promise<void> => {
    try {
      await fetch(`${MASTRA_URL}/approval-requests/${sessionId}`, { method: 'DELETE' });
      setPendingApproval(null);
    } catch {}
  }, [sessionId, setPendingApproval]);

  return { savePending, clearPending };
};
