// types/travel.ts
// Shared domain types — used by generative UI cards, hooks, and services.

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
}
