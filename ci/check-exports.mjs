#!/usr/bin/env node
import { fileURLToPath, URL } from 'url'
import { readFile, writeFile } from 'fs/promises'
import inquirer from 'inquirer'
import chalk from 'chalk'
import { globby } from 'globby'
import path from 'path'

const isCI = process.argv.includes('--ci')

const getNormalizedDir = (relativeDir) => fileURLToPath(new URL(relativeDir, import.meta.url))

// const sfcs = await globby(fileURLToPath(new URL('../src/components/**/*.vue', import.meta.url)))
const sfcs = await globby('src/components/**/*.vue')

const projectFn = component => 'export { default as ' + path.basename(component, '.vue') + ' } from \'' + component.replace('src/components', '.') + '\''

const correctComponentList = sfcs.map(projectFn).sort()
const correctString = correctComponentList.join('\n') + '\n'

const srcIndexFullpath = getNormalizedDir('../src/components') + path.sep + 'index.ts'
const typesIndexFullpath = getNormalizedDir('../types/components') + path.sep + 'index.d.ts'

const index = await readFile(getNormalizedDir('../src/components') + '/index.ts')
const currentFileContent = index.toString()

if (currentFileContent !== correctString) {
  if (process.argv.includes('--fix')) {
    await writeFile(srcIndexFullpath, correctString)
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
    console.log('dans ' + chalk.yellow.bold(srcIndexFullpath))
  }

  if (!isCI) {
    await inquirer.prompt(questions).then(async answers => {
      if (answers.fix.toLocaleLowerCase() === 'y') {
        await writeFile(srcIndexFullpath, correctString)
        await writeFile(typesIndexFullpath, correctString)
        console.log(chalk.green.bold('Fichier corrigé !'))
        process.exit(0)
      }
    })
  }
  process.exit(1)
}
