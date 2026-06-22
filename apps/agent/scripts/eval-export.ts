import path from 'path';
import { SqliteStorage } from 'evalite/sqlite-storage';
import { exportStaticUI } from 'evalite/export-static';

const DB_PATH = path.resolve('./node_modules/.evalite/cache.sqlite');
const OUTPUT_PATH = path.resolve('./eval-report');

const storage = SqliteStorage.create(DB_PATH);

await exportStaticUI({ storage, outputPath: OUTPUT_PATH });
