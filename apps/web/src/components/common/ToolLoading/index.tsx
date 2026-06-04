import { Loader2 } from 'lucide-react';

interface ToolLoadingProps {
  toolName: string;
}

export const ToolLoading = ({ toolName }: ToolLoadingProps) => {
  return (
    <div className="text-muted-foreground mb-2 flex items-center space-x-2 text-sm">
      <Loader2 className="h-4 w-4 animate-spin" />
      <span>Searching for {toolName}...</span>
    </div>
  );
};
