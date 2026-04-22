import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { execSync } from 'node:child_process'

let commitName = 'latest'
let buildTime = new Date().toLocaleString()

try {
  commitName = execSync('git log -1 --format=%s', { stdio: 'pipe' }).toString().trim()
} catch (e) {
  // Fallback if git is not available (e.g., on Netlify)
  commitName = process.env.COMMIT_SHA ? process.env.COMMIT_SHA.substring(0, 7) : 'prod'
}

export default defineConfig({
  plugins: [vue()],
  define: {
    __BUILD_TIME__: JSON.stringify(buildTime),
    __COMMIT_NAME__: JSON.stringify(commitName),
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/ws': {
        target: 'ws://localhost:8000',
        ws: true,
      },
    },
  },
})

