import type { StorybookConfig } from '@storybook/vue3-vite'

import process from 'node:process'

import vue from '@vitejs/plugin-vue'
import { createLogger } from 'vite'

type StorybookConfigWithPreviewAnnotations = StorybookConfig & {
  previewAnnotations?: (entries: string[]) => string[] | Promise<string[]>
}

const isChromaticBuild = process.env.CHROMATIC === 'true' || Boolean(process.env.CHROMATIC_PROJECT_TOKEN)

const config: StorybookConfigWithPreviewAnnotations = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    ...(isChromaticBuild ? ['@chromatic-com/storybook'] : []),
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  docs: {},
  staticDirs: ['../public'],
  async previewAnnotations (entries) {
    return [...new Set(entries)]
  },
  async viteFinal (config) {
    // Remplacer le plugin Vue pour désactiver decodeEntities en mode non-navigateur
    const vuePluginIndex = config.plugins?.findIndex(
      (p: any) => p?.name === 'vite:vue',
    )
    if (vuePluginIndex !== undefined && vuePluginIndex >= 0) {
      config.plugins![vuePluginIndex] = vue({})
    }

    // Le remplacement ci-dessus ne suffit pas à empêcher le warning
    // « decodeEntities option is passed but will be ignored in non-browser
    // builds » : il est émis par @vue/compiler-core lors de la compilation de
    // templates dans le navigateur (Chromium, via les tests Storybook/Vitest)
    // et relayé par le logger Vite. Il est inoffensif (le code s’exécute bien
    // dans un navigateur), donc on le filtre spécifiquement sans masquer les
    // autres avertissements.
    const baseLogger = config.customLogger ?? createLogger(config.logLevel ?? 'info')
    config.customLogger = {
      ...baseLogger,
      warn (msg, options) {
        if (typeof msg === 'string' && msg.includes('decodeEntities option is passed but will be ignored in non-browser builds')) {
          return
        }
        baseLogger.warn(msg, options)
      },
    }

    return config
  },
}
export default config
