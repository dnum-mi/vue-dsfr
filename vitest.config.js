import path from 'path'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

const projectDir = path.dirname(new URL(import.meta.url).pathname)

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    global: true,
    // environment: 'happy-dom',
    environment: 'jsdom',
    testTimeout: 2000,
    setupFiles: [
      './tests/unit/vitest-setup.js',
    ],
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(projectDir, 'src'),
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js',
      },
    ],
  },
})
