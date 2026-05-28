import { useEffect } from 'react';

// Constants
import { MASTRA_URL } from '@/constants';

// Stores
import { useThreadStore } from '@/stores/threadStore';
import { useApprovalRequestStore, type ApprovalRequest } from '@/stores/approvalRequestStore';

/** Fetches any pending approval for the current session and loads it into the store. */
export const useInitApprovalRequest = () => {
  const sessionId = useThreadStore((state) => state.activeThreadId);
  const setPendingApproval = useApprovalRequestStore((state) => state.setPendingApproval);

  useEffect(() => {
    let cancelled = false;

    fetch(`${MASTRA_URL}/approval-requests/${sessionId}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: ApprovalRequest | null) => {
        if (!cancelled && data?.action_name) setPendingApproval(data);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [sessionId, setPendingApproval]);
};
