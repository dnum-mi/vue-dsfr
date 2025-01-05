#!/usr/bin/env node

import path from 'node:path'
import process from 'node:process'

import { Command } from 'commander'
import chalk from 'chalk'

import { createCustomCollectionFile } from './custom-icon-collections-creator.js'

const program = new Command()

program
  .option('-s, --source <filepath>', 'Chemin vers le fichier de tuples [IconifyJSON, string[]]')
  .option('-t, --target <filepath>', 'Chemin vers le fichier destination (src/icons.ts par défaut)')
  .parse(process.argv)

const options = program.opts()

if (options.source && options.target) {
  createCustomCollectionFile(path.resolve(process.cwd(), options.source), path.resolve(process.cwd(), options.target))
  console.log(chalk.green('Les icônes ont été générées')) // eslint-disable-line no-console
}
