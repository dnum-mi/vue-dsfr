module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 1,
      features: {
        'custom-properties': false,
      },
    }),
  ],
}
