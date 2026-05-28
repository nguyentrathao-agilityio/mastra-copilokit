import { useCallback } from 'react';
import { RotateCcw, X } from 'lucide-react';
import { useCopilotChatHeadless_c } from '@copilotkit/react-core';
import { toast } from 'sonner';

// Hooks
import { useApprovalRequest } from '@/hooks/useApprovalRequest';
import { useApprovalRequestStore } from '@/stores/approvalRequestStore';
import { useThreadStore } from '@/stores/threadStore';

// Components
import { Button, Typography } from '@/components';

const ACTION_LABELS: Record<string, string> = {
  'collect-flight-info': 'flight search',
  'collect-hotel-info': 'hotel search',
  confirmItinerary: 'itinerary confirmation',
  confirmPlacesSearch: 'places search',
  confirmLocalTips: 'local tips',
  confirmRouteSearch: 'route planning',
};

const buildResumeMessage = (actionName: string, args: Record<string, unknown>): string => {
  const argsStr = Object.entries(args)
    .filter(([, v]) => v != null && v !== '')
    .map(([k, v]) => `${k}: ${v}`)
    .join(', ');

  return `Please continue with the ${ACTION_LABELS[actionName] ?? actionName} I started.${argsStr ? ` Details: ${argsStr}.` : ''}`;
};

export const ApprovalResumeBanner = () => {
  const sessionId = useThreadStore((state) => state.activeThreadId);
  const pendingApproval = useApprovalRequestStore((state) => state.approvals[sessionId] ?? null);
  const { clearPending } = useApprovalRequest();
  const { sendMessage } = useCopilotChatHeadless_c();

  if (!pendingApproval) return null;

  const label = ACTION_LABELS[pendingApproval.action_name] ?? pendingApproval.action_name;

  const handleContinue = useCallback(async () => {
    try {
      const content = buildResumeMessage(pendingApproval.action_name, pendingApproval.args);
      clearPending();
      await sendMessage({ id: crypto.randomUUID(), role: 'user', content });
    } catch {
      toast.error('Failed to resume action. Please try again.');
    }
  }, [pendingApproval, clearPending, sendMessage]);

  const handleDismiss = useCallback(() => {
    try {
      clearPending();
    } catch {
      toast.error('Failed to dismiss. Please try again.');
    }
  }, [clearPending]);

  return (
    <div className="border-badge-info-text bg-badge-info-bg mx-4 mb-3 flex items-center justify-between gap-3 rounded-lg border px-4 py-3">
      <div className="min-w-0">
        <Typography variant="body" weight="medium" color="primary">
          Pending action
        </Typography>
        <Typography variant="meta" color="secondary" className="truncate">
          You had an unfinished {label}. Continue where you left off?
        </Typography>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Button size="sm" variant="primary" onClick={handleContinue}>
          <RotateCcw size={13} className="mr-1" />
          Continue
        </Button>
        <Button size="sm" variant="secondary" onClick={handleDismiss}>
          <X size={13} />
        </Button>
      </div>
    </div>
  );
};
