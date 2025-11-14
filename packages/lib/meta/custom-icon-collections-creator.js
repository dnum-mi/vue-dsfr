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
 * @param {string} sourcePath - Chemin vers le fichier source
 * @param {string} targetPath - Chemin vers le fichier destination
 *
 * @returns {Promise<{ status: 'COULD_NOT_GET_COLLECTIONS_ERROR' | 'COULD_NOT_WRITE_FILE_ERROR' | 'COULD_NOT_LINT_FILE_ERROR', error: Error } | undefined>} Le résultat si une erreur est survenue, undefined sinon
 *
 */
export async function createCustomCollectionFile (sourcePath, targetPath) {
  const [error, collectionsToFilter] = await getCollectionsToFilter(sourcePath)

  if (error) {
    return {
      status: 'COULD_NOT_GET_COLLECTIONS_ERROR',
      error,
    }
  }

  const collections = collectionsToFilter.map(tuple => filterIcons(...tuple))

  const code = `import type { IconifyJSON } from '@iconify/vue'
const collections: IconifyJSON[] = ${JSON.stringify(collections)}
${collections.map(collection => `export const ${collection.prefix} = ${makeCollection(collection)} as const`).join('\n')}
export default collections`

  try {
    await fs.writeFile(targetPath, code)
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      return {
        status: 'COULD_NOT_WRITE_FILE_ERROR',
        error,
      }
    }
    return {
      status: 'COULD_NOT_WRITE_FILE_ERROR',
      error: new Error(`Erreur inconnue : ${error}`),
    }
  }

  try {
    await runShellCommand(`npx eslint ${path.resolve(process.cwd(), targetPath)} --fix`)
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 'COULD_NOT_LINT_FILE_ERROR',
        error,
      }
    }
    return {
      status: 'COULD_NOT_LINT_FILE_ERROR',
      error: new Error(`Erreur inconnue : ${error}`),
    }
  }
}

/**
 * Fonctions utilitaires
 */

/**
 * @function
 *
 * @param {string} sourcePath - Chemin vers le fichier source
 *
 * @returns {Promise<[Error] | [null, [import('@iconify/vue').IconifyJSON, string[]][]]>}
 */
async function getCollectionsToFilter (sourcePath) {
  try {
    /**
     * @type {[import('@iconify/vue').IconifyJSON, string[]][]}
     */
    const collectionsToFilter = await import(sourcePath).then(({ collectionsToFilter }) => collectionsToFilter)
    return [null, collectionsToFilter]
  } catch (error) {
    if (error instanceof Error) {
      return [error]
    }
    return [new Error(`Erreur inconnue : ${error}`)]
  }
}

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

/**
 * @function
 * @param {string} icon
 *
 * @returns {string} a camelCase icon
 */
function camelize (icon) {
  return icon.replace(/-./g, x => x[1].toUpperCase())
}

/**
 * @function
 * @param {import('@iconify/vue/dist/iconify.js').IconifyJSON} collection
 *
 * @returns {string} stringified collection
 */
function makeCollection (collection) {
  return JSON.stringify(Object.fromEntries(Object.keys(collection.icons)
    .map(icon => ([camelize(icon), `${collection.prefix}:${icon}`]))))
}
