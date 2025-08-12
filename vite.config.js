import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base depending on type of site:

export default defineConfig({
  base: '/KalymnosClimbingGuide/', // for project site
  // base: '/', // for username.github.io
  plugins: [react()],
})
