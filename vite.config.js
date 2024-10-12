import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Diretório de saída
    rollupOptions: {
      input: 'index.html',
    },
  },
});

