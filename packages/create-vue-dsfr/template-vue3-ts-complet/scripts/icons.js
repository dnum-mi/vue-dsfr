// @ts-check
import { icons as mdiCollection } from '@iconify-json/mdi'
import { icons as riCollection } from '@iconify-json/ri'

/**
 * Liste de nom d'icônes **sans** le préfixe de la collection Remix Icons qui sont utilisées dans l'application
 * @type {string[]}
 */
const riIconNames = [
  'flag-line',
  'home-4-line',
  'question-mark',
]

/**
 * Liste de nom d'icônes **sans** le préfixe de la collection Material Design Icons qui sont utilisées dans l'application
 * @type {string[]}
 */
const mdiIconNames = [
  'account-heart',
  'home',
  'star',
  // Ajoutez ici les autres icônes MDI que vous utilisez
]

/**
 * @type {[import('@iconify/vue').IconifyJSON, string[]][]}
 */
export const collectionsToFilter = [
  [riCollection, riIconNames],
  [mdiCollection, mdiIconNames],
]
