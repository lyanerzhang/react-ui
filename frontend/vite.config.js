import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'play/src'),
      '@packages': path.resolve(__dirname, 'packages')
    },
  },
  plugins: [react()],
})
