import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tailwind needs no special Vite plugin if setup via postcss.config.js
export default defineConfig({
      base: '/Sri-Lanka-Event-Calendar/',
      plugins: [react()],
})
