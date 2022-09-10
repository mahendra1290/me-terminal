import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// const mdPlugin = require('vite-plugin-markdown')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    host: 'localhost',
    port: 3000
  }

})
