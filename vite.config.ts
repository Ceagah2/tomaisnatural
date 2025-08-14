import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), ssr(), tailwindcss()],
})
