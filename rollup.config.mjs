import { defineConfig } from 'rollup'
import vue from 'rollup-plugin-vue'

import { nodeResolve } from '@rollup/plugin-node-resolve'
import PostCSS from 'rollup-plugin-postcss'

import atImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes'
import postcssPresetEnv from 'postcss-preset-env'
import csso from 'postcss-csso'

const postcssPlugins = [
  atImport(),
  postcssNested,
  postcssFlexbugsFixes,
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
  csso(),
]

const baseOutput = {
  globals: {
    vue: 'vue',
  },
}

const baseConfig = {
  input: 'src/index.js',
  external: [
    'vue',
    'vue-router',
    'oh-vue-icons',
    'focus-trap',
    'focus-trap-vue',
  ],
  output: {
    globals: baseOutput.globals,
  },
  plugins: [
    vue(),
    PostCSS({
      plugins: postcssPlugins,
      extract: false,
    }),
    nodeResolve({
      extensions: ['.css'],
    }),
  ],
}

export default defineConfig([
  // ESM build to be used with webpack/rollup.
  {
    ...baseConfig,
    output: {
      format: 'esm',
      file: 'dist/vue-dsfr.mjs',
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
      nodeResolve({
        extensions: ['.css'],
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
])
