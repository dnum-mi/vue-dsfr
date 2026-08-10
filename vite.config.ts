import type { UserConfig } from 'vite'

import { resolve } from 'node:path'
import process from 'node:process'

import vue from '@vitejs/plugin-vue'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import LightningCSS from 'unplugin-lightningcss/vite'
import { defineConfig } from 'vite'

const projectDir = import.meta.dirname

const isVitepress = process.env.VITEPRESS === 'true'

const config: UserConfig = {
  plugins: [
    vue(),
    LightningCSS({
      options: {
        targets: browserslistToTargets(browserslist('>= 0.25%')),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
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

export default defineConfig(isVitepress ? {} : config)
