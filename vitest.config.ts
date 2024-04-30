/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*test.{ts,tsx}'],
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    reporters: ['verbose'],
    outputFile: {
      junit: './vitest-report.xml',
    },
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

// confirmar se o arquivo vite.d.ts tem as seguintes importações de tipos

/// <reference types="vite/client" />
/// <reference types="@testing-library/jest-dom" />
