import { PostgresStore, PgVector } from '@mastra/pg';

export const VECTOR_STORE_NAME = 'travelVectorStore';

export const storage = new PostgresStore({
  id: 'mastra-storage',
  connectionString: process.env.POSTGRES_URL!,
});

export const vector = new PgVector({
  id: 'mastra-vector',
  connectionString: process.env.POSTGRES_URL!,
});
