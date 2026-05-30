import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          mui: ['@mui/material', '@mui/icons-material'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
