import fs from 'fs'

import mkdirp from 'mkdirp'
import postcss from 'postcss'
import atImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'
import postcssUrl from 'postcss-url'
import csso from 'postcss-csso'

const postcssPlugins = [
  atImport(),
  postcssNested,
  postcssUrl({ url: 'inline' }),
  postcssPresetEnv({
    autoprefixer: {
      flexbox: 'no-2009',
    },
    stage: 1,
    features: {
      'custom-properties': false,
    },
  }),
  csso,
]

mkdirp.sync('dist')

fs.readFile('./src/variables-fdr.css', 'utf8', (err, css) => {
  if (err) {
    console.error(err)
    throw err
  }
  postcss(postcssPlugins)
    .process(css, { from: 'src/assets/variables-fdr.css', to: 'dist/variables-fdr.css' })
    .then(result => {
      fs.writeFile('dist/variables-fdr.css', result.css, () => true)
      if (result.map) {
        fs.writeFile('dist/variables-fdr.css.map', result.map.toString(), () => true)
      }
    })
})

fs.readFile('./src/main.css', 'utf8', (err, css) => {
  if (err) {
    console.error(err)
    throw err
  }
  postcss(postcssPlugins)
    .process(css, { from: 'src/main.css', to: 'dist/vue-dsfr.css' })
    .then(result => {
      fs.writeFile('dist/vue-dsfr.css', result.css, () => true)
      if (result.map) {
        fs.writeFile('dist/vue-dsfr.css.map', result.map.toString(), () => true)
      }
    })
})

fs.readFile('src/assets/fonts-dsfr.css', 'utf8', (err, css) => {
  if (err) {
    console.error(err)
    throw err
  }
  postcss(postcssPlugins)
    .process(css, {
      from: 'src/assets/fonts-dsfr.css',
      to: 'dist/fonts-dsfr.css',
    })
    .then(result => {
      fs.writeFile('dist/vue-dsfr-fonts.css', result.css, () => true)
      if (result.map) {
        fs.writeFile('dist/vue-dsfr-fonts.css.map', result.map.toString(), () => true)
      }
    })
})

fs.readFile('src/assets/fonts-essential-dsfr.css', 'utf8', (err, css) => {
  if (err) {
    console.error(err)
    throw err
  }
  postcss(postcssPlugins)
    .process(css, {
      from: 'src/assets/fonts-dsfr.css',
      to: 'dist/fonts-dsfr.css',
    })
    .then(result => {
      fs.writeFile('dist/vue-dsfr-fonts-essential.css', result.css, () => true)
      if (result.map) {
        fs.writeFile('dist/vue-dsfr-fonts-essential.css.map', result.map.toString(), () => true)
      }
    })
})
