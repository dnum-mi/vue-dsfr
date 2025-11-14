#!/usr/bin/env node
/* eslint-disable no-console */
import path from 'node:path'
import process from 'node:process'

import chalk from 'chalk'
import { Command } from 'commander'

import { createCustomCollectionFile } from './custom-icon-collections-creator.js'

const program = new Command()

program
  .option('-s, --source <filepath>', 'Chemin vers le fichier de tuples [IconifyJSON, string[]]')
  .option('-t, --target <filepath>', 'Chemin vers le fichier destination (src/icons.ts par défaut)')
  .parse(process.argv)

const options = program.opts()

const resultMessages = {
  COULD_NOT_GET_COLLECTIONS_ERROR: 'Impossible de récupérer les collections d’icônes (cf. erreur ci-dessus)',
  COULD_NOT_WRITE_FILE_ERROR: 'Impossible d’écrire le fichier cible (cf. erreur ci-dessus)',
  COULD_NOT_LINT_FILE_ERROR: 'Impossible de linter le fichier cible (cf. erreur ci-dessus)',
}

;(async (options) => {
  if (!options.source || !options.target) {
    console.log(chalk.yellow('Veuillez indiquer la source et la cible'))
  }

  const result = await createCustomCollectionFile(path.resolve(process.cwd(), options.source), path.resolve(process.cwd(), options.target))

  if (!result) {
    console.log(chalk.green('Les icônes ont été générées'))
    return
  }

  if (result.status === 'COULD_NOT_LINT_FILE_ERROR') {
    console.log(chalk.green('Les icônes ont été générées'))
    console.log(chalk.yellow(resultMessages[result.status]))
    return
  }

  console.error(result.error)

  console.log(chalk.red(resultMessages[result.status]))
})(options)
