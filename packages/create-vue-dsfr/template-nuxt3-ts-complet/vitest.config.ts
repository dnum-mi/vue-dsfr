import { defineVitestConfig } from '@nuxt/test-utils/config'
import AutoImport from 'unplugin-auto-import/vite'
import {
  vueDsfrAutoimportPreset,
} from '@gouvminint/vue-dsfr'

export default defineVitestConfig({
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      imports: [
        // @ts-expect-error ts2322
        'vue',
        // @ts-expect-error ts2322
        'vue-router',
        // @ts-expect-error ts2322
        'pinia',
        // @ts-expect-error ts2322
        'vitest',
        // @ts-expect-error ts2740
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
