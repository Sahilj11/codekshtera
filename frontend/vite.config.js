import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

<<<<<<< HEAD
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
=======
>>>>>>> ef1a4f0 (Frontend Code Organzie)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
