import type { UserConfig } from 'vite'

import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import LightningCSS from 'unplugin-lightningcss/vite'
import { defineConfig } from 'vite'

const projectDir = dirname(new URL(import.meta.url).pathname)

const isVitepress = process.env.VITEPRESS === 'true'

const config: UserConfig = {
  plugins: [
    vue(),
    vueJsx(),
    LightningCSS({
      options: {
        targets: browserslistToTargets(browserslist('>= 0.25%')),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  // css: {
  //   transformer: 'lightningcss',
  //   lightningcss: {
  //     targets: browserslistToTargets(browserslist('>= 0.25%')),
  //   },
  // },
  build: {
    lib: {
      name: 'vue-dsfr',
      entry: resolve(projectDir, 'src', 'index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'vue-router', '@iconify/vue'],
      output: {
        exports: 'named',
        dir: 'dist',
        globals: {
          vue: 'Vue',
          '@iconify/vue': 'iconify',
        },
        // assetFileNames: v => `vue-dsfr${v.name?.replace(/[^.]+\./, '.')}`,
      },
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig(isVitepress ? {} : config)
