import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Detectar entorno automáticamente
const repoName = 'portafolio' // Cambia esto por el nombre exacto de tu repositorio en GitHub

// Si estás construyendo para GitHub Pages, usa /repo/
// Si no, usa './' (ideal para Render o desarrollo local)
const baseConfig = process.env.GITHUB_ACTIONS ? `/${repoName}/` : './'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: baseConfig,
  build: {
    outDir: 'dist',
  },
})