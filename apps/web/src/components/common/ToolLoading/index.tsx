import { Loader2 } from 'lucide-react';

interface ToolLoadingProps {
  action?: string;
  toolName: string;
}

export const ToolLoading = ({ action = 'Searching for', toolName }: ToolLoadingProps) => {
  return (
    <div className="bg-background-secondary text-text-primary rounded-[28px] px-4 py-2 shadow">
      <div className="text-text-primary flex items-center gap-2 text-sm">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>
          {action} {toolName}...
        </span>
      </div>
    </div>
  );
};
