import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
module.exports = {
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        home: 'home.html',
        account: 'account.html'
        // ... autres pages
      }
    }
  }
};