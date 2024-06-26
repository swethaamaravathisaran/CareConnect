import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:5174,
    strictPort:true,
    open:true,
    proxy: {
      '/api': {
        target:'https://careconnectapp.swetha-a2022cse.workers.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  plugins: [react()],
})
