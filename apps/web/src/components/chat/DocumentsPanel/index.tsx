import { useState, useCallback, useEffect } from 'react';
import { Files, FileText, X, ChevronUp, ChevronDown } from 'lucide-react';

interface UploadedDoc {
  name: string;
  chunks: number;
}

interface DocItemProps {
  doc: UploadedDoc;
  onDelete: (name: string) => void;
}

interface DocumentsPanelProps {
  docs: UploadedDoc[];
  onDelete: (name: string) => void;
  isLoading?: boolean;
}

/** Single document row with a delete action. */
const DocItem = ({ doc, onDelete }: DocItemProps) => {
  const handleDelete = useCallback(() => onDelete(doc.name), [doc.name, onDelete]);

  return (
    <li className="text-meta font-regular text-text-secondary hover:bg-background-secondary flex items-center justify-between rounded-md px-2 py-1.5">
      <span className="flex items-center gap-2 truncate">
        <FileText size={12} className="shrink-0" />
        <span className="truncate">{doc.name}</span>
        <span className="text-text-tertiary shrink-0">({doc.chunks} chunks)</span>
      </span>
      <button
        onClick={handleDelete}
        className="text-text-tertiary ml-2 shrink-0 cursor-pointer transition-colors hover:text-red-500"
        aria-label="Remove document"
      >
        <X size={14} />
      </button>
    </li>
  );
};

/** Animated placeholder row shown while a file is being processed. */
const DocSkeleton = () => (
  <li className="flex items-center gap-2 px-2 py-1.5">
    <div className="bg-border-secondary h-3 w-3 animate-pulse rounded-sm" />
    <div className="bg-border-secondary h-3 w-36 animate-pulse rounded-sm" />
    <div className="bg-border-secondary ml-auto h-3 w-10 shrink-0 animate-pulse rounded-sm" />
  </li>
);

/** Collapsible panel listing uploaded documents with delete actions. */
export const DocumentsPanel = ({ docs, onDelete, isLoading = false }: DocumentsPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  // Auto-open when upload starts so the skeleton is visible
  useEffect(() => {
    if (isLoading) setIsOpen(true);
  }, [isLoading]);

  if (docs.length === 0 && !isLoading) return null;

  const count = docs.length + (isLoading ? 1 : 0);

  return (
    <div className="bg-background-primary mb-2 rounded-lg border-b px-5 py-2">
      <button
        onClick={handleToggle}
        className="text-meta font-regular text-text-secondary flex w-full items-center justify-between"
      >
        <span className="flex items-center gap-1.5">
          <Files size={14} />
          {count} {count === 1 ? 'document' : 'documents'} uploaded
        </span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {isOpen && (
        <ul className="mt-2 flex flex-col gap-1">
          {docs.map((doc) => (
            <DocItem key={doc.name} doc={doc} onDelete={onDelete} />
          ))}
          {isLoading && <DocSkeleton />}
        </ul>
      )}
    </div>
  );
};
