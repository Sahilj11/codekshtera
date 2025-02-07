import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
