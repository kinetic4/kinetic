import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173, // Ensure the port is correctly set
  },
  plugins: [react()],
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    exclude: ['@gsap/react', 'gsap', 'gsap_all'], // Exclude GSAP dependencies
  },
})
