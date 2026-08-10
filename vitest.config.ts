import path from 'node:path'

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'

import viteConfig from './vite.config'

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default mergeConfig(viteConfig, defineConfig({
  resolve: {
    alias: {
      '@tests': path.resolve(import.meta.dirname, 'tests'),
    },
  },
  define: {
    __VUE_PROD_DEVTOOLS__: false,
  },
  test: {
    projects: [{
      extends: true,
      test: {
        globals: true,
        environment: 'jsdom',
        testTimeout: 2000,
        exclude: [...configDefaults.exclude, 'e2e/*'],
        root: import.meta.dirname,
        setupFiles: ['./tests/unit/vitest-setup.ts'],
      },
    }, {
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
        storybookTest({
          configDir: path.join(import.meta.dirname, '.storybook'),
        }),
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium',
          }],
        },
        retry: 2, // Retry twice on CI
      },
    }],
  },
}))
