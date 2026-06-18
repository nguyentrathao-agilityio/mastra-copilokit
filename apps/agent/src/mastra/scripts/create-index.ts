import 'dotenv/config';
import { vector } from '../stores';

async function createIndex() {
  await vector.createIndex({
    indexName: 'travel_docs',
    dimension: 1536,
  });
  console.log('✅ Index created!');
}

createIndex().catch(console.error);
