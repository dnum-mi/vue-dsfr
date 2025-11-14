import { defineVitestConfig } from '@nuxt/test-utils/config'
import AutoImport from 'unplugin-auto-import/vite'
import {
  vueDsfrAutoimportPreset,
} from '@gouvminint/vue-dsfr/meta'

export default defineVitestConfig({
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        'vitest',
        vueDsfrAutoimportPreset,
      ],
      vueTemplate: true,
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],
  test: {
    environment: 'nuxt',
    globals: true,
    exclude: [
      '**/node_modules/**',
      './.nuxt/**',
      'tests/e2e/**',
    ],
    setupFiles: [
      '../vitest-setup.ts',
    ],
  },
})
