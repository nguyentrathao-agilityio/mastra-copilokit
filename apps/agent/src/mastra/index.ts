import 'dotenv/config';
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { Observability, SensitiveDataFilter, MastraStorageExporter } from '@mastra/observability';
import { registerCopilotKit } from '@ag-ui/mastra/copilotkit';

import { travelAgent } from './agents/travel-agent';
import { tripSummaryWorkflow, destinationExplorerWorkflow } from './workflows';
import { storage, vector, VECTOR_STORE_NAME } from './stores';
import { ingestDocument } from './ingest';

// Constants
import {
  STATE_KEYS,
  HEADER_CLIENT_DATE,
  HEADER_CLIENT_TIMEZONE,
  CONTEXT_CLIENT_DATE,
  CONTEXT_CLIENT_TIMEZONE,
} from '@/constants';
import { INGEST_ENDPOINT, INGEST_DELETE_ENDPOINT, INGEST_LIST_ENDPOINT } from '@repo/constants';

// Utils
import { todayIso } from '@/utils';

export const mastra = new Mastra({
  agents: { travelAgent },
  workflows: { tripSummaryWorkflow, destinationExplorerWorkflow },
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
          requestContext.set(CONTEXT_CLIENT_DATE, c.req.header(HEADER_CLIENT_DATE) ?? todayIso());
          requestContext.set(CONTEXT_CLIENT_TIMEZONE, c.req.header(HEADER_CLIENT_TIMEZONE) ?? null);
          try {
            const payload = await c.req.raw.clone().json();
            const state = payload?.body?.state ?? {};
            STATE_KEYS.forEach((key) => requestContext.set(key, state?.[key] ?? null));
          } catch (e) {
            console.error('[setContext] error:', e);
          }
        },
      }),
      {
        path: INGEST_ENDPOINT,
        method: 'POST',
        handler: async (c) => {
          const formData = await c.req.formData();
          const file = formData.get('file') as File;
          const content = await file.text();
          const result = await ingestDocument(content, file.name);
          return c.json(result);
        },
      },
      {
        path: INGEST_DELETE_ENDPOINT,
        method: 'DELETE',
        handler: async (c) => {
          try {
            const filename = c.req.query('filename');
            await vector.deleteVectors({
              indexName: 'travel_docs',
              filter: { filename: { $eq: filename } },
            });
            return c.json({ success: true });
          } catch (e) {
            return c.json({ error: String(e) }, 500);
          }
        },
      },
      {
        path: INGEST_LIST_ENDPOINT,
        method: 'GET',
        handler: async (c) => {
          try {
            const results = await vector.query({
              indexName: 'travel_docs',
              queryVector: new Array(1536).fill(0),
              topK: 1000,
              includeVector: false,
            });
            const files = [...new Set(results.map((r) => r.metadata?.filename).filter(Boolean))];
            return c.json({ files });
          } catch (e) {
            return c.json({ error: String(e) }, 500);
          }
        },
      },
    ],
  },
});
