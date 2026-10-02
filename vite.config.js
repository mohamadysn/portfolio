import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If you deploy to https://USERNAME.github.io/portfolio/
  base: '/portfolio/'
})
