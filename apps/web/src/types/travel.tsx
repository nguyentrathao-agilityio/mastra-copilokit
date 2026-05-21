// types/travel.ts
// Shared domain types — used by generative UI cards, hooks, and services.
import type { ReactNode } from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
  renderGenerativeUI?: () => ReactNode;
}
