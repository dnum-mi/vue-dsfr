import { ComputedRef } from 'vue'

/**
 * @property setScheme - Fonction pour mettre à jour le scheme
 * @property scheme - Scheme
 * @property theme - Thème en fonction du scheme
 */
export declare type UseSchemeResult = {
    setScheme: (scheme: String) => void
    scheme: ComputedRef<String>
    theme: ComputedRef<String>
}

/**
 * @property scheme? - Scheme souhaité (`'system'` par défaut)
 * @property dataThemeAttribute? - Nom complet de l’attribut qui contiendra la valeur du thème (`'data-fr-theme'` par défaut)
 */
export declare type UseThemeOptions = {
    scheme?: String
    dataThemeAttribute?: String
}

/**
 * Permet de gérer le thème selon le scheme donné.
 * Si dans les options, `scheme` vaut 'system', le thème sera celui du système, si `scheme`
 * vaut `'light'`, le theme sera clair, et s’il vaut `'dark'`, le thème sera sombre.
 * @param options? - Peut contenir les clés `scheme` pour le scheme voulu et
 * `dataThemeAttribute` pour l’attribut qui contiendra la valeur de scheme.
 * @returns Objet contenant la fonction `setScheme` pour changer le scheme, et les
 *          propriétés calculés (réactives et en lecture seule) `theme` et `scheme`.
 *
 */
export declare function useScheme(options?: UseThemeOptions): UseSchemeResult
