import { useCallback } from 'react';

import { useThreadStore } from '@/stores/threadStore';
import { useApprovalRequestStore } from '@/stores/approvalRequestStore';

export type { ApprovalRequest } from '@/stores/approvalRequestStore';

export const useApprovalRequest = () => {
  const sessionId = useThreadStore((state) => state.activeThreadId);
  const setPendingApproval = useApprovalRequestStore((state) => state.setPendingApproval);

  const savePending = useCallback(
    (actionName: string, args: Record<string, unknown>): void => {
      setPendingApproval(sessionId, {
        thread_id: sessionId,
        action_name: actionName,
        args,
        created_at: new Date().toISOString(),
      });
    },
    [sessionId, setPendingApproval]
  );

  const clearPending = useCallback((): void => {
    setPendingApproval(sessionId, null);
  }, [sessionId, setPendingApproval]);

  return { savePending, clearPending };
};
