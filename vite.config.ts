import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring Boot 地址
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api') // 保持路径不变
      }
    }
  }
})
