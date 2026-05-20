/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: [
    '**/.next/**',
    '**/dist/**',
    '**/.mastra/**',
    '**/node_modules/**',
    '**/.turbo/**',
    '**/*.config.js',
    '**/*.config.ts',
    'commitlint.config.js',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  ],
};
