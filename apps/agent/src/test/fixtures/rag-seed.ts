import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const DOCS_DIR = join(dirname(fileURLToPath(import.meta.url)), 'docs');

export const RAG_SEED_DOCS = [
  {
    filename: 'vietnam-guide.txt',
    content: readFileSync(join(DOCS_DIR, 'vietnam-guide.txt'), 'utf8'),
  },
];
