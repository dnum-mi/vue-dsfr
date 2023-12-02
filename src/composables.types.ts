import type { ComputedRef } from 'vue'

/**
 * @property {(scheme: string) => void} setScheme - Fonction pour mettre à jour le scheme
 * @property {string} scheme - Scheme courant
 * @property {string} theme - Thème courant en fonction du scheme
 */
export declare type UseSchemeResult = {
  setScheme: (scheme: string) => void
  scheme: ComputedRef<string>
  theme: ComputedRef<string>
}

/**
* @property {string=} scheme? - Scheme souhaité (`'system'` par défaut)
* @property {string=} dataThemeAttribute? - Nom complet de l’attribut qui contiendra la valeur du thème (`'data-fr-theme'` par défaut)
*/
export declare type UseThemeOptions = {
  scheme?: string
  dataThemeAttribute?: string
}
