module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      stage: 1,
    }),
    require('autoprefixer')({
      flexbox: 'no-2009',
    }),
  ],
}
