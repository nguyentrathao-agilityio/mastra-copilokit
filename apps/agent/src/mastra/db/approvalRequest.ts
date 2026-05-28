import { storage } from '../stores';

export type ApprovalRequest = {
  thread_id: string;
  action_name: string;
  args: Record<string, unknown>;
  created_at: string;
};

let initialized = false;

const ensureTable = async (): Promise<void> => {
  if (initialized) return;
  await storage.db.none(`
    CREATE TABLE IF NOT EXISTS approval_requests (
      thread_id   TEXT PRIMARY KEY,
      action_name TEXT NOT NULL,
      args        JSONB NOT NULL,
      created_at  TIMESTAMPTZ DEFAULT NOW()
    )
  `);
  initialized = true;
};

export const getApprovalRequest = async (threadId: string): Promise<ApprovalRequest | null> => {
  await ensureTable();
  return storage.db.oneOrNone<ApprovalRequest>(
    'SELECT thread_id, action_name, args, created_at FROM approval_requests WHERE thread_id = $1',
    [threadId]
  );
};

export const createApprovalRequest = async (
  threadId: string,
  actionName: string,
  args: Record<string, unknown>
): Promise<void> => {
  await ensureTable();
  await storage.db.none(
    `INSERT INTO approval_requests (thread_id, action_name, args)
     VALUES ($1, $2, $3)
     ON CONFLICT (thread_id) DO UPDATE SET
       action_name = EXCLUDED.action_name,
       args        = EXCLUDED.args,
       created_at  = NOW()`,
    [threadId, actionName, JSON.stringify(args)]
  );
};

export const resolveApprovalRequest = async (threadId: string): Promise<void> => {
  await ensureTable();
  await storage.db.none('DELETE FROM approval_requests WHERE thread_id = $1', [threadId]);
};
