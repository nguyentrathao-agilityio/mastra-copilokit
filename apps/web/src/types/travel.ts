import type { ReactNode } from 'react';

// Constants
import { CHAT_ROLE } from '@/constants';

export type ChatRole = (typeof CHAT_ROLE)[keyof typeof CHAT_ROLE];

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: Date;
  renderGenerativeUI?: () => ReactNode;
}
