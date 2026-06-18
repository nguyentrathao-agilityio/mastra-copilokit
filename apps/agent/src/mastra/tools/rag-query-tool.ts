import { createVectorQueryTool } from '@mastra/rag';
import { openai } from '@ai-sdk/openai';
import { VECTOR_STORE_NAME } from '../stores';

type RagQueryTool = ReturnType<typeof createVectorQueryTool>;

export const ragQueryTool: RagQueryTool = createVectorQueryTool({
  vectorStoreName: VECTOR_STORE_NAME,
  description:
    'Search uploaded documents. Only use filter with key "threadId" to filter by thread. Never use other filter keys.',
  indexName: 'travel_docs',
  model: openai.embedding('text-embedding-3-small'),
  enableFilter: true,
  includeSources: true,
});
