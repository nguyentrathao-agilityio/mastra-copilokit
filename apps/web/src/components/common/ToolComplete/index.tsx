import { CheckCircle2 } from 'lucide-react';

interface ToolCompleteProps {
  action?: string;
  target: string;
}

export const ToolComplete = ({ action = 'running', target }: ToolCompleteProps) => {
  return (
    <div className="bg-background-primary text-text-primary mb-2 flex h-10 max-w-2xl items-center rounded-[28px] px-4 py-2 shadow">
      <div className="flex items-center justify-center gap-2 text-sm">
        <CheckCircle2 className="text-badge-success-text h-4 w-4" />
        <span>
          Finished {action} {target}.
        </span>
      </div>
    </div>
  );
};
