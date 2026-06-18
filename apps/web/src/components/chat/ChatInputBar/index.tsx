import { useState, useCallback, useRef, useEffect } from 'react';
import type { KeyboardEvent, ChangeEvent } from 'react';
import { z } from 'zod';
import { ArrowRight, Paperclip } from 'lucide-react';
import type { InputProps } from '@copilotkit/react-ui';
import { useCopilotChatInternal } from '@copilotkit/react-core';

// Stores
import { useSuggestionStore } from '@/stores';

// Utils
import { cn } from '@/utils';

// Components
import { Button } from '@/components';
import { DocumentsPanel } from '../DocumentsPanel';

// Constants
import {
  CHAT_ROLE,
  MASTRA_URL,
  INGEST_ENDPOINT,
  INGEST_DELETE_ENDPOINT,
  INGEST_LIST_ENDPOINT,
} from '@/constants';

const MAX_TEXTAREA_HEIGHT = 160;
const IngestResponseSchema = z.object({ chunks: z.number() });
const ListResponseSchema = z.object({ files: z.array(z.string()) });

type UploadedDoc = { name: string; chunks: number };

/**
 * Chat input bar with file upload support and document management panel.
 */
const ChatInputBar = ({ onSend, inProgress }: InputProps) => {
  const [value, setValue] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { messages } = useCopilotChatInternal();
  const [uploadedDocs, setUploadedDocs] = useState<UploadedDoc[]>([]);

  const setOnSend = useSuggestionStore((s) => s.setOnSend);
  const setLastTool = useSuggestionStore((s) => s.setLastTool);

  // Keep the store's send function in sync with CopilotKit's onSend prop
  useEffect(() => {
    setOnSend(onSend);
  }, [onSend, setOnSend]);

  // Index of the most recent assistant message
  const lastAssistantIdx = messages.reduce(
    (lastIdx, msg, idx) => (msg.role === CHAT_ROLE.ASSISTANT ? idx : lastIdx),
    -1
  );
  // Cast to access toolCalls — only present on assistant messages
  const lastAssistantMsg =
    lastAssistantIdx !== -1 ? (messages[lastAssistantIdx] as { toolCalls?: unknown[] }) : undefined;
  // True when a tool-result message exists after the last assistant message
  const hasToolResultAfter = messages
    .slice(lastAssistantIdx + 1)
    .some((msg) => msg.role === CHAT_ROLE.TOOL);
  // Pending = last assistant called a tool but no result yet (waiting for human confirm)
  const isToolCallPending = Boolean(lastAssistantMsg?.toolCalls?.length) && !hasToolResultAfter;

  // Submit blocked while agent is running or waiting for HITL response
  const submitDisabled = inProgress || isToolCallPending;

  const handleSubmit = useCallback(async () => {
    const trimmed = value.trim();
    if (!trimmed || submitDisabled) return;

    setLastTool(null);
    setValue('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
    await onSend(trimmed);
  }, [value, submitDisabled, onSend, setLastTool]);

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, MAX_TEXTAREA_HEIGHT)}px`;
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  const handleClickUpload = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileUpload = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch(`${MASTRA_URL}${INGEST_ENDPOINT}`, {
        method: 'POST',
        body: formData,
      });
      const raw = await res.json();
      const parsed = IngestResponseSchema.safeParse(raw);
      if (!parsed.success) throw new Error('Invalid upload response');
      setUploadedDocs((prev) => [...prev, { name: file.name, chunks: parsed.data.chunks }]);
    } catch {
      setUploadError('Upload failed');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  }, []);

  const handleDeleteDoc = useCallback(async (filename: string) => {
    try {
      await fetch(
        `${MASTRA_URL}${INGEST_DELETE_ENDPOINT}?filename=${encodeURIComponent(filename)}`,
        { method: 'DELETE' }
      );
      setUploadedDocs((prev) => prev.filter((d) => d.name !== filename));
    } catch {
      // deletion failed — doc remains in list until next reload
    }
  }, []);

  useEffect(() => {
    fetch(`${MASTRA_URL}${INGEST_LIST_ENDPOINT}`)
      .then((r) => r.json())
      .then((raw) => {
        const parsed = ListResponseSchema.safeParse(raw);
        if (!parsed.success) return;
        setUploadedDocs(parsed.data.files.map((name) => ({ name, chunks: 0 })));
      })
      .catch(() => {});
  }, []);

  return (
    <div className="bg-background-page px-5 pb-5 pt-4">
      <DocumentsPanel docs={uploadedDocs} onDelete={handleDeleteDoc} isLoading={isUploading} />
      <input
        ref={fileInputRef}
        type="file"
        accept=".txt,.md,.pdf"
        className="hidden"
        onChange={handleFileUpload}
      />
      <div className="hover:shadow-input-hover focus-within:shadow-input-focus bg-background-primary flex items-center justify-center gap-3 rounded-xl px-4 py-3 shadow transition-shadow">
        <Button
          variant="ghost"
          onClick={handleClickUpload}
          disabled={isUploading}
          aria-label="Upload file"
          className="hover:bg-border-tertiary mb-0.5 h-8 w-8 shrink-0 rounded-full p-0"
          rightIcon={<Paperclip size={16} />}
        />
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything about your trip..."
          rows={1}
          aria-label="Chat message"
          className="text-body font-regular text-text-primary placeholder:text-text-tertiary flex-1 resize-none bg-transparent outline-none"
        />
        <Button
          onClick={handleSubmit}
          disabled={submitDisabled}
          aria-label="Send message"
          className={cn(
            'bg-brand-500 mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-opacity',
            submitDisabled && 'opacity-40'
          )}
          rightIcon={<ArrowRight size={16} className="text-white" />}
        />
      </div>

      {uploadError && (
        <div className="text-meta font-regular text-badge-danger-text mt-1 text-center">
          {uploadError}
        </div>
      )}

      <div className="flex justify-center">
        <p className="text-meta font-regular text-text-tertiary mt-3">
          Travel AI can make mistakes. Always verify important information before booking.
        </p>
      </div>
    </div>
  );
};

export { ChatInputBar };
