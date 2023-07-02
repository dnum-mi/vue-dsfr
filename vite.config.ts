import { fileURLToPath, URL } from 'url'
import { dirname, resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import visualizer from 'rollup-plugin-visualizer'

const projectDir = dirname(new URL(import.meta.url).pathname)

const getNormalizedDir = (relativeDir: string) => fileURLToPath(new URL(relativeDir, import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    visualizer(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: getNormalizedDir('./src'),
      },
      {
        find: '@tests',
        replacement: getNormalizedDir('./tests'),
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js',
      },
    ],
  },
  build: {
    lib: {
      name: 'vue-dsfr',
      entry: resolve(projectDir, 'src', 'index.ts'),
    },
    rollupOptions: {
      external: ['vue', 'oh-vue-icons', 'vue-router'],
      output: {
        exports: 'named',
        dir: 'dist',
        globals: {
          vue: 'Vue',
          'oh-vue-icons': 'OhVueIcon',
        },
        assetFileNames: (v) => 'vue-dsfr' + v.name?.replace(/[^.]+\./, '.'),
      },
    },
  },
})
