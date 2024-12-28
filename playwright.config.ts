import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Glob patterns or regular expressions to ignore test files.
  testIgnore: [
    '**/__test__/**',      // distディレクトリ以下を無視
  ],
});