import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      name: 'ts-lib-template',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'umd'],
      fileName: 'index',
    },
  },
});
