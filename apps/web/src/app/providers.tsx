import { type ReactNode } from 'react';
import { CopilotKit } from '@copilotkit/react-core';
import { Toaster } from 'sonner';

import { AGENT_NAME, COPILOTKIT_PUBLIC_LICENSE_KEY, RUNTIME_URL } from '@/constants';
import { useThreadStore } from '@/stores/threadStore';
import { useApiKeyStore } from '@/stores/apiKeyStore';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  const sessionId = useThreadStore((state) => state.activeThreadId);
  const apiKey = useApiKeyStore((state) => state.apiKey);

  return (
    <CopilotKit
      publicLicenseKey={COPILOTKIT_PUBLIC_LICENSE_KEY}
      key={sessionId}
      runtimeUrl={RUNTIME_URL}
      agent={AGENT_NAME}
      threadId={sessionId}
      headers={{ 'x-openai-api-key': apiKey }}
    >
      {children}
      <Toaster richColors position="bottom-center" offset="80px" />
    </CopilotKit>
  );
};
