import postcssImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'
import postcssCsso from 'postcss-csso'

export default {
  plugins: [
    postcssImport(),
    postcssNested,
    postcssPresetEnv({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 1,
      features: {
        'custom-properties': false,
        'focus-visible-pseudo-class': false,
      },
    }),
    postcssCsso,
  ],
}
