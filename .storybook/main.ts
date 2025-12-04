import type { StorybookConfig } from '@storybook/vue3-vite'

import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  docs: {},
  staticDirs: ['../public'],
  async viteFinal (config) {
    // Remplacer le plugin Vue pour désactiver decodeEntities en mode non-navigateur
    const vuePluginIndex = config.plugins?.findIndex(
      (p: any) => p?.name === 'vite:vue',
    )
    if (vuePluginIndex !== undefined && vuePluginIndex >= 0) {
      config.plugins![vuePluginIndex] = vue({})
    }
    return config
  },
}
export default config
