module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-nested'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 1,
      features: {
        'custom-properties': false,
        'focus-visible-pseudo-class': false,
      },
    }),
    require('postcss-csso'),
  ],
}
