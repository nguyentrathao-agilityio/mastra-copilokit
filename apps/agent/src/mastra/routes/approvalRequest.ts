import { registerApiRoute } from '@mastra/core/server';

import {
  getApprovalRequest,
  createApprovalRequest,
  resolveApprovalRequest,
} from '../db/approvalRequest';

export const approvalRequestRoutes = [
  registerApiRoute('/approval-requests/:threadId', {
    method: 'GET',
    requiresAuth: false,
    handler: async (context) => {
      const { threadId } = context.req.param();
      const row = await getApprovalRequest(threadId);

      return context.json(row ?? null);
    },
  }),

  registerApiRoute('/approval-requests', {
    method: 'POST',
    requiresAuth: false,
    handler: async (context) => {
      const { threadId, actionName, args } = await context.req.json();
      await createApprovalRequest(threadId, actionName, args);

      return context.json({ ok: true });
    },
  }),

  registerApiRoute('/approval-requests/:threadId', {
    method: 'DELETE',
    requiresAuth: false,
    handler: async (context) => {
      const { threadId } = context.req.param();
      await resolveApprovalRequest(threadId);

      return context.json({ ok: true });
    },
  }),
];
