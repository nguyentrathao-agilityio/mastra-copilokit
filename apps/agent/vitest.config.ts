import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    environment: 'node',
    globalSetup: './src/test/globalSetup.ts',
    env: {
      API_URL: 'http://localhost:4020',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/mastra'),
    },
  },
});
