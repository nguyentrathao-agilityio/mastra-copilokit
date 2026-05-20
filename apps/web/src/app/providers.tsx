import { AGENT_NAME, RUNTIME_URL } from '@/constants';
import { CopilotKit } from '@copilotkit/react-core';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <CopilotKit runtimeUrl={RUNTIME_URL} agent={AGENT_NAME}>
    {children}
  </CopilotKit>
);
