import type { UserConfig } from 'vite'

import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const isVitepress = process.env.VITEPRESS === 'true'

const config: UserConfig = {
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig(isVitepress ? {} : config)
