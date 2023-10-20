import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
  ],
  build: {
    lib: {
      name: 'JwtAuth',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        vue: resolve(__dirname, 'demo/vue/index.html'),
      },

      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
