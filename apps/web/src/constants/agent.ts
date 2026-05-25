export const RUNTIME_URL = import.meta.env.VITE_RUNTIME_URL;
export const AGENT_NAME = 'travelAgent';
export const FETCH_THREADS_DELAY_MS = 1000;
export const FETCH_TITLE_DELAY_MS = 4000;

export const CHAT_ROLE = {
  USER: 'user',
  ASSISTANT: 'assistant',
} as const;

export const ALLOWED_CHAT_ROLES = Object.values(CHAT_ROLE);
