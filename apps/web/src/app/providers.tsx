import { ReactNode } from 'react';
import { CopilotKit } from '@copilotkit/react-core';
import { Toaster } from 'sonner';

// Constants
import { AGENT_NAME, RUNTIME_URL } from '@/constants';

// Stores
import { useThreadStore } from '@/stores';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  const activeThreadId = useThreadStore((s) => s.activeThreadId);

  return (
    <CopilotKit runtimeUrl={RUNTIME_URL} agent={AGENT_NAME} threadId={activeThreadId ?? undefined}>
      {children}
      <Toaster richColors position="bottom-center" offset="80px" />
    </CopilotKit>
  );
};
