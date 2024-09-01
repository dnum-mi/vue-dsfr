import process from 'node:process'
import { URL, fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'

import { type UserConfig, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const projectDir = dirname(new URL(import.meta.url).pathname)

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
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
  },
  build: {
    cssMinify: 'lightningcss',
    lib: {
      name: 'vue-dsfr',
      entry: resolve(projectDir, 'src', 'index.ts'),
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        exports: 'named',
        dir: 'dist',
        globals: {
          vue: 'Vue',
        },
        assetFileNames: v => `vue-dsfr${v.name?.replace(/[^.]+\./, '.')}`,
      },
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig(isVitepress ? {} : config)
