import { defineConfig, globalIgnores } from 'eslint/config';

import baseConfig from '../../eslint.config.mjs';

export default defineConfig([
  globalIgnores(['src/schemas']),
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs,ts,cts,mts}'],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
]);
