import { defineConfig } from 'vite'

export default defineConfig({
  // Vite automatically serves the 'public' folder at the root
  // Everything else in the root (index.html, styles.css, script.js) will be processed by Vite
  build: {
    outDir: 'dist',
  }
})
