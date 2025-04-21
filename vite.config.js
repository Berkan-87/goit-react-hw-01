import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base:
    process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1'
      ? '/goit-react-hw-01/'
      : '/',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
});