import fs from 'fs'

import mkdirp from 'mkdirp'
import postcss from 'postcss'
import atImport from 'postcss-import'
import postcssUrl from 'postcss-url'
import csso from 'postcss-csso'

const postcssPlugins = [
  atImport(),
  postcssUrl({ url: 'inline' }),
  csso(),
]

mkdirp.sync('dist')

fs.readFile('./src/assets/variables-fdr.css', 'utf8', (err, css) => {
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
