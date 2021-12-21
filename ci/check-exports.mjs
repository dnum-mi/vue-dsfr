import { writeFile } from 'fs/promises'
import { globby } from 'globby'
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const sfcs = await globby([path.resolve(__dirname, '../src/components/**/*.vue')])
const componentsDir = path.resolve(__dirname, '../src/components')

const projectFn = component => 'export { default as ' + path.basename(component, '.vue') + ' } from \'' + component.replace(componentsDir, '.') + '\''

const finalString = sfcs.map(projectFn).sort().join('\n')

// /home/stan/projects/minint/vue-dsfr/src/components/DsfrAccordion/DsfrAccordion.vue
// à transformer en :
// export { default as DsfrAccordion } from './DsfrAccordion/DsfrAccordion.vue'

// console.log(sfcs)

// const index = await readFile(path.resolve(__dirname, '../src/components/index.js'))

// console.log(index.toString())

await writeFile(path.resolve(__dirname, '../src/components/index.js'), finalString)
