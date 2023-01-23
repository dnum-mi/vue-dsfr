import { mergeConfig } from 'vite'

module.exports = {
  "stories": ["../src/**/*.stories.@(mdx|js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  }],
  staticDirs: ['../public'],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  },
  docs: {
    autodocs: true
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      define: { 'process.env': {} },
    });
  },
};
