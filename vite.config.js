import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base depending on type of site:

export default defineConfig({
  plugins: [react()],
  base: '/KalymnosClimbingGuide/',
});
