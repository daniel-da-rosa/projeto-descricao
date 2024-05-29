import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './src/App.jsx' // Especifique o caminho correto para o arquivo de entrada App.js
      }
    }
  }
});
