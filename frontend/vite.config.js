import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@data': '/src/data',
      '@mocks': '/src/mocks',
      '@pages': '/src/pages',
      '@services': '/src/services',
      '@utils': '/src/utils',
    }
  }
})
