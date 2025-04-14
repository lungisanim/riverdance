import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'public', 
  build: {
    outDir: '../dist', 
    rollupOptions: {
       input: '/index.html',
    },
    emptyOutDir: true,
  }
}) 