import 'dotenv/config';
import { RAG_SEED_DOCS } from '../../test/fixtures/rag-seed';
import { ingestDocument } from '../ingest';

async function main() {
  for (const doc of RAG_SEED_DOCS) {
    const result = await ingestDocument(doc.content, doc.filename);
    console.log(`✓ ${doc.filename}: ${result.chunks} chunks`);
  }
  console.log('RAG seed complete');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
