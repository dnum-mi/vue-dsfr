import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import visualizer from 'rollup-plugin-visualizer'

const projectDir = path.dirname(new URL(import.meta.url).pathname)

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
        replacement: path.resolve(projectDir, 'src'),
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
      entry: path.resolve(projectDir, 'src', 'index.js'),
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: 'dist/plugin',
        globals: {
          vue: 'vue',
        },
      },
    },
  },
})
