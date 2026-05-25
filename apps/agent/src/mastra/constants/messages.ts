export const ERROR_MESSAGES = {
  NO_API_URL: 'API_URL environment variable is not set',
  SEARCH_FAILED: (status: number, statusText: string) =>
    `Flight search failed: ${status} ${statusText}`,
  INVALID_RESPONSE: 'Invalid flight search response shape',
  UNKNOWN: 'An unexpected error occurred during flight search',
} as const;
