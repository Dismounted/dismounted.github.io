import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/', // GitHub Pages serves from root with custom domain
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        404: resolve(__dirname, 'src/404.html'),
      },
      output: {
        manualChunks: undefined, // Single bundle for small site
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});
