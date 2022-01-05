#!/usr/bin/env node
import { readFile, writeFile } from 'fs/promises'
import { globby } from 'globby'
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const sfcs = await globby([path.resolve(__dirname, '../src/components/**/*.vue')])
const componentsDir = path.resolve(__dirname, '../src/components')

const projectFn = component => 'export { default as ' + path.basename(component, '.vue') + ' } from \'' + component.replace(componentsDir, '.') + '\''

const finalString = sfcs.map(projectFn).sort().join('\n') + '\n'

const index = await readFile(path.resolve(__dirname, '../src/components/index.js'))

if (index.toString() != finalString) {
  if (process.argv.includes('--fix')) {
    await writeFile(path.resolve(__dirname, '../src/components/index.js'), finalString)
    console.log('Fixed')
    process.exit(0)
  }
  console.error('Le fichier d’export des composants src/components/index.js n’est pas correct')
  process.exit(1)
}
