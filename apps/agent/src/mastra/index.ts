import 'dotenv/config';
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { Observability, SensitiveDataFilter, MastraStorageExporter } from '@mastra/observability';
import { registerCopilotKit } from '@ag-ui/mastra/copilotkit';

import { travelAgent } from './agents/travel-agent';
import { tripSummaryWorkflow } from './workflows/trip-summary-workflow';
import { storage, vector, VECTOR_STORE_NAME } from './stores';

// Constants
import {
  STATE_KEYS,
  HEADER_CLIENT_DATE,
  HEADER_CLIENT_TIMEZONE,
  CONTEXT_CLIENT_DATE,
  CONTEXT_CLIENT_TIMEZONE,
} from '@/constants';

// Utils
import { todayIso } from '@/utils';

export const mastra = new Mastra({
  agents: { travelAgent },
  workflows: { tripSummaryWorkflow },
  storage,
  vectors: {
    [VECTOR_STORE_NAME]: vector,
  },
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
  observability: new Observability({
    configs: {
      default: {
        serviceName: 'mastra',
        exporters: [new MastraStorageExporter()],
        spanOutputProcessors: [new SensitiveDataFilter()],
      },
    },
  }),
  server: {
    cors: {
      origin: '*',
      allowMethods: ['*'],
      allowHeaders: ['*'],
    },
    middleware: [
      {
        path: '/api/*',
        handler: async (c, next) => {
          const apiKey = c.req.header('x-openai-api-key');
          if (apiKey) process.env.OPENAI_API_KEY = apiKey;
          await next();
        },
      },
    ],
    build: {
      apiReqLogs: {
        enabled: true,
        excludePaths: ['/health', '/ready'],
        includeQueryParams: false,
      },
    },
    apiRoutes: [
      registerCopilotKit({
        path: '/chat',
        resourceId: 'travelAgent',
        setContext: async (c, requestContext) => {
          try {
            const payload = await c.req.raw.clone().json();
            const state = payload?.body?.state ?? {};
            STATE_KEYS.forEach((key) => requestContext.set(key, state?.[key] ?? null));
            requestContext.set(CONTEXT_CLIENT_DATE, c.req.header(HEADER_CLIENT_DATE) ?? todayIso());
            requestContext.set(
              CONTEXT_CLIENT_TIMEZONE,
              c.req.header(HEADER_CLIENT_TIMEZONE) ?? null
            );
          } catch (e) {
            console.error('[setContext] error:', e);
          }
        },
      }),
    ],
  },
});
