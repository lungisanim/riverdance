import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'public', // Tell Vite the project root is the 'public' directory
  build: {
    // Adjust output directory if needed, as it's relative to the new root
    outDir: '../dist', // Example: output to 'dist' outside 'public'
    rollupOptions: {
       // Input might need adjustment relative to the new root
       input: '/index.html',
    }
  }
}) 