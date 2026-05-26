import { type ReactNode } from 'react';
import { CopilotKit } from '@copilotkit/react-core';
import { Toaster } from 'sonner';

import { AGENT_NAME, RUNTIME_URL } from '@/constants';
import { useSession } from '@/hooks';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  const sessionId = useSession();

  return (
    <CopilotKit runtimeUrl={RUNTIME_URL} agent={AGENT_NAME} threadId={sessionId}>
      {children}
      <Toaster richColors position="bottom-center" offset="80px" />
    </CopilotKit>
  );
};
