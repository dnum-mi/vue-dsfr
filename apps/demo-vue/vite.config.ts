import type { UserConfig } from 'vite'

import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig(config)
