import process from 'node:process'
import { URL, fileURLToPath } from 'node:url'

import { type UserConfig, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const isVitepress = process.env.VITEPRESS === 'true'

const config: UserConfig = {
  plugins: [
    vue(),
    vueJsx(),
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
