import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const { FAST_API = 'http://localhost' } = process.env;
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: `${FAST_API}`,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})
