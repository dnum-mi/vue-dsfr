import vue from 'rollup-plugin-vue'

import PostCSS from 'rollup-plugin-postcss'

import atImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes'
import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'
import csso from 'postcss-csso'

const postcssPlugins = [
  atImport(),
  postcssNested,
  postcssFlexbugsFixes,
  postcssPresetEnv({
    stage: 1,
  }),
  autoprefixer({
    flexbox: 'no-2009',
  }),
  csso,
]

const baseOutput = {
  globals: {
    vue: 'vue',
    'oh-vue-icons/dist/v3/icon.es': 'VIcon',
    'oh-vue-icons/icons': 'icons',
  },
}

const baseConfig = {
  input: 'src/index.js',
  external: ['vue', 'oh-vue-icons/dist/v3/icon.es', 'oh-vue-icons/icons'],
  output: {
    globals: baseOutput.globals,
  },
  plugins: [
    vue(),
    PostCSS({
      plugins: postcssPlugins,
      extract: false,
    }),
  ],
}

export default [
  // ESM build to be used with webpack/rollup.
  {
    ...baseConfig,
    output: {
      format: 'esm',
      file: 'dist/vue-dsfr.esm.js',
      globals: baseOutput.globals,
      name: 'VueDsfr',
    },
  },
  // SSR build.
  {
    ...baseConfig,
    output: {
      format: 'cjs',
      file: 'dist/vue-dsfr.ssr.js',
      globals: baseOutput.globals,
      name: 'VueDsfr',
    },
    plugins: [
      vue({ template: { optimizeSSR: true } }),
      PostCSS({
        plugins: postcssPlugins,
        extract: false,
      }),
    ],
  },
  // Browser build.
  {
    ...baseConfig,
    output: {
      format: 'iife',
      file: 'dist/vue-dsfr.js',
      globals: baseOutput.globals,
      name: 'VueDsfr',
    },
  },
  // Umd build.
  {
    ...baseConfig,
    output: {
      format: 'umd',
      file: 'dist/vue-dsfr.umd.js',
      globals: baseOutput.globals,
      name: 'VueDsfr',
    },
  },
]
