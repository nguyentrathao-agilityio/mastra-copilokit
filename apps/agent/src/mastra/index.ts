import 'dotenv/config';
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { Observability, SensitiveDataFilter, MastraStorageExporter } from '@mastra/observability';
import { registerCopilotKit } from '@ag-ui/mastra/copilotkit';

import { travelAgent } from './agents/travel-agent';
import { tripSummaryWorkflow } from './workflows/trip-summary-workflow';
import { storage, vector, VECTOR_STORE_NAME } from './stores';

// Constants
import { STATE_KEYS } from '@/constants';

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
    apiRoutes: [
      registerCopilotKit({
        path: '/chat',
        resourceId: 'travelAgent',
        setContext: async (c, requestContext) => {
          try {
            const apiKey = c.req.header('x-openai-api-key');

            if (apiKey) {
              process.env.OPENAI_API_KEY = apiKey;
            }
            const payload = await c.req.raw.clone().json();
            const state = payload?.body?.state ?? {};
            STATE_KEYS.forEach((key) => requestContext.set(key, state?.[key] ?? null));
          } catch (e) {
            console.error('[setContext] error:', e);
          }
        },
      }),
    ],
  },
});
