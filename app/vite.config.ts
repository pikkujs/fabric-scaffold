import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '5173'),
  },
  resolve: {
    alias: {
      react: path.resolve(import.meta.dirname, '../node_modules/react'),
      'react-dom': path.resolve(import.meta.dirname, '../node_modules/react-dom'),
    },
  },
})
