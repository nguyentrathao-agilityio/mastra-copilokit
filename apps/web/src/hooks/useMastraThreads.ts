import { useEffect, useState } from 'react';
import { toast } from 'sonner';

// Constants
import { AGENT_NAME, ERROR_MESSAGES } from '@/constants';

// Utils
import { mastraClient } from '@/utils';

// Types
import type { Thread } from '@/types';

export type MastraThread = Thread;

/**
 * Custom hook to manage Mastra threads, including fetching and error handling.
 */
export function useMastraThreads() {
  const [threads, setThreads] = useState<MastraThread[]>([]);

  const fetchThreads = async () => {
    try {
      // get threads from mastra
      const result = await mastraClient.listMemoryThreads({
        resourceId: AGENT_NAME,
        agentId: AGENT_NAME,
      });
      setThreads(
        (result.threads ?? []).map((thread) => ({ ...thread, title: thread.title ?? '' }))
      );
    } catch {
      toast.error(ERROR_MESSAGES.LOAD_THREADS);
      setThreads([]);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return { threads, refetch: fetchThreads };
}
