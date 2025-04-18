import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(
    {
      base: '/Sri-Lanka-Event-Calendar/', // VERY IMPORTANT
      plugins: [react()],
})
