import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo at /myportfolio/; dev stays at the root
export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  base: command === 'build' || isPreview ? '/myportfolio/' : '/',
  build: {
    outDir: 'build',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: false,
  },
}))
