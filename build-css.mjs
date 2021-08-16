import fs from 'fs'
import postcss from 'postcss'

import atImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'
import postcssFontBase64 from 'postcss-font-base64'
import csso from 'postcss-csso'

const postcssPlugins = [
  atImport(),
  postcssNested,
  postcssFontBase64(),
  postcssPresetEnv({
    "autoprefixer": {
      "flexbox": "no-2009"
    },
    "stage": 1,
    "features": {
      "custom-properties": false
    }
  }),
  csso,
]

fs.readFile('./src/main.css', (err, css) => {
  postcss(postcssPlugins)
    .process(css, { from: 'src/main.css', to: 'dist/vue-dsfr.css' })
    .then(result => {
      fs.writeFile('dist/vue-dsfr.css', result.css, () => true)
      if (result.map) {
        fs.writeFile('dist/vue-dsfr.css.map', result.map.toString(), () => true)
      }
    })
})

fs.readFile('./src/assets/fonts-dsfr.css', (err, css) => {
  postcss(postcssPlugins)
    .process(css, { from: 'src/vue-dsfr-fonts.css', to: 'dist/vue-dsfr-fonts.css' })
    .then(result => {
      fs.writeFile('dist/vue-dsfr-fonts.css', result.css, () => true)
      if (result.map) {
        fs.writeFile('dist/vue-dsfr-fonts.css.map', result.map.toString(), () => true)
      }
    })
})
