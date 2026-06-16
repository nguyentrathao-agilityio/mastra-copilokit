import { CheckCircle2 } from 'lucide-react';

interface ToolCompleteProps {
  action?: string;
  toolName: string;
}

export const ToolComplete = ({ action = 'running', toolName }: ToolCompleteProps) => {
  return (
    <div className="bg-background-secondary text-text-primary mb-2 h-10 max-w-2xl rounded-[28px] px-4 py-2 shadow">
      <div className="flex items-center gap-2 text-sm">
        <CheckCircle2 className="text-badge-success-text h-4 w-4" />
        <span>
          Finished {action} {toolName}.
        </span>
      </div>
    </div>
  );
};
