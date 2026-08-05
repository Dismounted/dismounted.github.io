import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'src/index.html'),
        404: resolve(import.meta.dirname, 'src/404.html'),
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});
