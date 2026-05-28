import { type ReactNode } from 'react';
import { CopilotKit } from '@copilotkit/react-core';
import { Toaster } from 'sonner';

import { AGENT_NAME, COPILOTKIT_PUBLIC_LICENSE_KEY, RUNTIME_URL } from '@/constants';
import { useThreadStore } from '@/stores/threadStore';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  const sessionId = useThreadStore((state) => state.activeThreadId);

  return (
    <CopilotKit
      publicLicenseKey={COPILOTKIT_PUBLIC_LICENSE_KEY}
      key={sessionId}
      runtimeUrl={RUNTIME_URL}
      agent={AGENT_NAME}
      threadId={sessionId}
    >
      {children}
      <Toaster richColors position="bottom-center" offset="80px" />
    </CopilotKit>
  );
};
