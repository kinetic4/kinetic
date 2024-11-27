/// <reference types="vite/client" />
/// <reference types="node" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    open: false,
    port: (process.env.PORT ? parseInt(process.env.PORT) : 3000),
    host: '0.0.0.0'
  },
  preview: {
    port: (process.env.PORT ? parseInt(process.env.PORT) : 3000),
    host: '0.0.0.0'
  },
  plugins: [react()],
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    exclude: ['gsap']
  }
})