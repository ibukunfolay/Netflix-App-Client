import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        origin: 'https://netflix-ibk-api.herokuapp.com',
        // changeOrigin: true,
      },
    },
  },
});
