import { resolve } from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'

const coreCss = await readFile('node_modules/@gouvfr/dsfr/dist/core/core.css', 'utf8')
const schemeCss = await readFile('node_modules/@gouvfr/dsfr/dist/scheme/scheme.css', 'utf8')

const colorsCss = coreCss.match(/--(\D+)-\d[^:;]+: #[a-f0-9]+;\n/g)
const colors = etlColors(colorsCss)

function etlColors (colorsCss) {
  return colorsCss.reduce((acc, cssLine) => {
    const color = cssLine.match(/--(\D+)/)[1].replace(/(.*)-$/, '$1').replace(/-(main|sun)/, '')
    if (!acc[color]) {
      acc[color] = []
    }
    acc[color].push({
      cssVar: cssLine.match(/(--\D+-[^:;]+)/)[1],
      name: cssLine.match(/--(\D+-[^:;]+)/)[1].replace(/(.*)-$/, '$1'),
      hex: cssLine.match(/#[a-f0-9]+/)[0],
      line: cssLine,
    })
    return acc
  }, {})
}

const darkColorsCss = schemeCss.match(/--(\D+)-\d[^:;]+: #[a-f0-9]+;\n/g)
const darkColors = etlColors(darkColorsCss)

const tintNumbersRegex = /^\D+-(\d{1,4})(?:-[a-z]+)?(?:-(\d{1,4}))?/

function sortColors (colors) {
  for (const [subColors] of Object.entries(colors)) {
    subColors.sort((a, b) => {
      const [, a1, a2] = a.name.match(tintNumbersRegex) ?? []
      a.tintNumber ??= Number(a1)
      a.subtintNumber ??= Number(a2 ?? 0)
      const [, b1, b2] = b.name.match(tintNumbersRegex) ?? []
      b.tintNumber ??= Number(b1)
      b.subtintNumber ??= Number(b2 ?? 0)
      if (Number(a1) === Number(b1)) {
        return Number(a2) > Number(b2) ? 1 : -1
      }
      if (Number(a1) > Number(b1)) {
        return 1
      }
      if (Number(a1) < Number(b1)) {
        return -1
      }
      return 0
    })
  }
}
sortColors(colors)
sortColors(darkColors)

writeFile(resolve(import.meta.dirname, '../docs/colors.json'), JSON.stringify({ colors, darkColors }, null, 2))
