import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo at /myportfolio/. Vercel (VERCEL=1 during its
// builds) and local dev serve from the domain root.
const pagesBase = process.env.VERCEL ? '/' : '/myportfolio/'

export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  base: command === 'build' || isPreview ? pagesBase : '/',
  build: {
    outDir: 'build',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: false,
  },
}))
