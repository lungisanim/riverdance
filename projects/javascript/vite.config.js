// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // Make sure you either remove this or point it to "public"
  // publicDir: false,         // ⛔️ DISABLES copying!
  // publicDir: 'some-other',  // ⛔️ wrong path
  // You want either no publicDir key, or:
  publicDir: 'public'
})
