import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/02-react-cafe/', 
  plugins: [react()],
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1600
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})