// @ts-check
/* eslint-disable no-console */
import childProcess from 'node:child_process'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import util from 'node:util'

const execPromise = util.promisify(childProcess.exec)

/**
 * Filtre les icônes d'une collection en fonction d'une liste de noms.
 * @function
 *
 * @param {string} sourcePath - Fichier source
 * @param {string} targetPath - Fichier destination
 *
 */
export async function createCustomCollectionFile (sourcePath, targetPath) {
  /**
   * @type {[import('@iconify/vue').IconifyJSON, string[]][]}
   */
  const collectionsToFilter = await import(sourcePath).then(({ collectionsToFilter }) => collectionsToFilter)

  const collections = collectionsToFilter.map(tuple => filterIcons(...tuple))

  const code = `import type { IconifyJSON } from '@iconify/vue'
const collections: IconifyJSON[] = ${JSON.stringify(collections)}
export default collections`

  await fs.writeFile(targetPath, code)

  await runShellCommand(`npx eslint ${path.resolve(process.cwd(), targetPath)} --fix`)
}

/**
 * Fonctions utilitaires
 */

/**
 * Filtre les icônes d'une collection en fonction d'une liste de noms.
 * @function
 *
 * @param {import('@iconify/vue').IconifyJSON} collection - La collection d'icônes.
 * @param {string[]} iconNames - La liste des noms d'icônes à conserver.
 *
 * @returns {import('@iconify/vue').IconifyJSON} - Une nouvelle collection filtrée.
 */
export function filterIcons (collection, iconNames) {
  const icons = Object.fromEntries(Object.entries(collection.icons).filter(([key]) => {
    return iconNames.includes(key)
  }))
  const { lastModified, aliases, provider, ...useful } = collection
  return {
    ...useful, // prefix, width, height
    icons,
  }
}

/**
 * Lance une commande shell.
 * @function
 *
 * @param {string} command - La commande shell à lancer
 *
 * @returns {Promise<undefined>} - Une nouvelle collection filtrée.
 */
export async function runShellCommand (command) {
  try {
    const { stdout, stderr } = await execPromise(command)
    if (stderr) {
      console.error('Erreur :', stderr)
    }
    console.log(stdout)
  } catch (error) {
    console.error('Erreur d’exécution :', error)
  }
}
