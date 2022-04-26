module.exports = {
  "stories": [
    "../src/**/*.stories.@(mdx|js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        }
      }
    },
  ],
  staticDirs: ['../public'],
  // core: {
  //   builder: 'webpack5'
  // }
  core: {
    builder: "@storybook/builder-vite"
  }
};