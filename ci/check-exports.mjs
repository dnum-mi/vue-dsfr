#!/usr/bin/env node
import { readFile, writeFile } from 'fs/promises'
import inquirer from 'inquirer'
import chalk from 'chalk'
import { globby } from 'globby'
import path from 'path'

const isCI = process.argv.includes('--ci')

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const sfcs = await globby([path.resolve(__dirname, '../src/components/**/*.vue')])
const componentsDir = path.resolve(__dirname, '../src/components')

const projectFn = component => 'export { default as ' + path.basename(component, '.vue') + ' } from \'' + component.replace(componentsDir, '.') + '\''

const correctComponentList = sfcs.map(projectFn).sort()
const correctString = correctComponentList.join('\n') + '\n'

const index = await readFile(path.resolve(__dirname, '../src/components/index.js'))
const currentFileContent = index.toString()

if (currentFileContent !== correctString) {
  if (process.argv.includes('--fix')) {
    await writeFile(path.resolve(__dirname, '../src/components/index.js'), correctString)
    console.log('Fixed')
    process.exit(0)
  }

  const questions = [
    {
      type: 'input',
      name: 'fix',
      message: 'Le fichier d’export des composants src/components/index.js n’est pas correct\n  Est ce que vous voulez corriger (y/N) ?',
    },
  ]

  const currentFileContentAsList = currentFileContent.split('\n').slice(0, -1).sort()
  const onlyInCorrectList = correctComponentList.filter(line => !currentFileContentAsList.includes(line))
  if (onlyInCorrectList.length) {
    console.log(chalk.yellow.bold('\nLes lignes suivantes sont manquantes :'))
    onlyInCorrectList.forEach(line => console.log(chalk.red.bold(line)))
    console.log('')
  }

  const onlyInCurrentFileList = currentFileContentAsList.filter(line => !correctComponentList.includes(line))
  if (onlyInCurrentFileList.length) {
    console.log(chalk.yellow.bold('\nLes lignes suivantes sont en trop :'))
    onlyInCurrentFileList.forEach(line => console.log(chalk.red.bold(line)))
    console.log('')
  }

  if (onlyInCorrectList.length || onlyInCurrentFileList.length) {
    console.log('dans ' + chalk.yellow.bold(path.resolve(__dirname, '../src/components/index.js')))
  }

  if (!isCI) {
    await inquirer.prompt(questions).then(async answers => {
      if (answers.fix.toLocaleLowerCase() === 'y') {
        await writeFile(path.resolve(__dirname, '../src/components/index.js'), correctString)
        await writeFile(path.resolve(__dirname, '../types/components/index.d.ts'), correctString)
        console.log(chalk.green.bold('Fichier corrigé !'))
        process.exit(0)
      }
    })
  }
  process.exit(1)
}
