import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';




export default defineConfig({
  base: '/goit-react-hw-01/', // Vercel'deki alt dizin
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
});

