import { defineConfig } from 'vite';

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
      output: {
        manualChunks: undefined, // Single bundle for small site
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});
