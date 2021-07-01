/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
// const webpack = require('@cypress/webpack-preprocessor')

// For component testing 1/2
const { startDevServer } = require('@cypress/vite-dev-server')

module.exports = (on, config) => {
  on('dev-server:start', options =>
    startDevServer({
      options,
    }),
  )

  return config
}
module.exports = (on, config) => {
  // on('file:preprocessor', webpack({
  //  webpackOptions: require('@vue/cli-service/webpack.config'),
  //  watchOptions: {}
  // }))

  // For component testing 2/2
  on('dev-server:start', options => startDevServer({ options }))

  return Object.assign({}, config, {
    fixturesFolder: 'cypress/fixtures',
    integrationFolder: 'cypress/specs',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    supportFile: 'cypress/support/index.js',
  })
}
