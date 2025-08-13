import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'Explore_Japan-main' with your repository name
export default defineConfig({
  base: '/Explore_Japan-main/',
  plugins: [react()]
})
