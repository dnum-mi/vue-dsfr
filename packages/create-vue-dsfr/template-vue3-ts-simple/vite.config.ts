import process from 'node:process'
import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import {
  vueDsfrAutoimportPreset,
  vueDsfrComponentResolver,
} from '@gouvminint/vue-dsfr/meta'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools({
      launchEditor: 'code', // Ouvre VS Code par défaut
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'vue-router',
        'vitest',
        vueDsfrAutoimportPreset,
      ],
      vueTemplate: true,
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      viteOptimizeDeps: true, // Améliore les performances en dev
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'],
      dirs: ['src/components'], // Autoimport de vos composants qui sont dans le dossier `src/components`
      include: [/\.vue$/, /\.vue\?vue/],
      dts: './src/components.d.ts',
      resolvers: [
        vueDsfrComponentResolver,
      ],
      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView'],
      }],
    }),
  ],
  base: process.env.BASE_URL || '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
