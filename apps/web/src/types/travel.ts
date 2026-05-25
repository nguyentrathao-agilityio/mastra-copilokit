import type { ReactNode } from 'react';

// Constants
import { CHAT_ROLE } from '@/constants';

// Types
import { ToolResult } from './tools';

export type ChatRole = (typeof CHAT_ROLE)[keyof typeof CHAT_ROLE];

export interface ChatMessage {
  id: string;
  content: string;
  role: ChatRole;
  createdAt: Date;
  toolResult?: ToolResult;
  renderGenerativeUI?: () => ReactNode;
}
