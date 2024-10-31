import { computed, ref, watchEffect } from 'vue'
import type { ComputedRef } from 'vue'

const PREFERS_DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)'
const DEFAULT_COLOR_SCHEME_LS_KEY = 'vue-dsfr-scheme'
let localStorageKey: string
export const LIGHT_SCHEME = 'light'
export const DARK_SCHEME = 'dark'
export const SYSTEM_SCHEME = 'system'
const DEFAULT_DATA_THEME_ATTRIBUTE = 'data-fr-theme'

export type Preferences = {
  theme: 'light' | 'dark'
  scheme: 'light' | 'dark' | 'system'
}

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
  localStorageKey?: string
}

const getProperSchemeValue = (desiredScheme: string): string => {
  const scheme = desiredScheme ?? (localStorage.getItem(localStorageKey) || SYSTEM_SCHEME)
  return [LIGHT_SCHEME, DARK_SCHEME, SYSTEM_SCHEME].includes(scheme)
    ? scheme
    : SYSTEM_SCHEME
}

const getThemeMatchingScheme = (scheme: string, mediaQuery: MediaQueryList): string => {
  scheme = getProperSchemeValue(scheme)
  if (scheme === SYSTEM_SCHEME) {
    return mediaQuery?.matches ? DARK_SCHEME : LIGHT_SCHEME
  }
  return scheme
}

/**
 * Permet de gérer le thème selon le scheme donné.
 * Si dans les options, `scheme` vaut 'system', le thème sera celui du système,
 * si `scheme` vaut `'light'`, le theme sera clair,
 * et s’il vaut `'dark'`, le thème sera sombre.
 *
 * @param {UseThemeOptions=} options - Peut contenir les clés `scheme` pour le scheme voulu, `dataThemeAttribute` pour l’attribut
 *                   qui contiendra la valeur de scheme, et `localStorageKey` pour personnaliser la clé utilisée dans stockage local.
 *
 * @return {UseSchemeResult} Objet contenant la fonction `setScheme` pour changer le scheme, et les
 *          propriétés calculés (réactives et en lecture seule) `theme` et `scheme`.
 */
export const useScheme = (options?: UseThemeOptions): UseSchemeResult | undefined => {
  if (typeof window === 'undefined') {
    return
  }
  localStorageKey = options?.localStorageKey ?? DEFAULT_COLOR_SCHEME_LS_KEY

  const opts = {
    scheme: localStorage.getItem(localStorageKey) || SYSTEM_SCHEME,
    dataThemeAttribute: DEFAULT_DATA_THEME_ATTRIBUTE,
    ...options,
  }

  const mediaQuery =
    window.matchMedia && window.matchMedia(PREFERS_DARK_MEDIA_QUERY)

  const scheme = ref(getProperSchemeValue(opts.scheme))

  localStorage.setItem(localStorageKey, scheme.value)

  const theme = ref(getThemeMatchingScheme(scheme.value, mediaQuery))
  const force = ref(scheme.value !== SYSTEM_SCHEME)

  watchEffect(() => {
    document.body.parentElement?.setAttribute(
      opts.dataThemeAttribute || DEFAULT_DATA_THEME_ATTRIBUTE,
      theme.value,
    )
  })

  mediaQuery?.addEventListener('change', (event) => {
    if (force.value) {
      return
    }
    if (event.matches) {
      theme.value = DARK_SCHEME
    } else {
      theme.value = LIGHT_SCHEME
    }
  })

  if (!force.value && mediaQuery?.matches) {
    theme.value = DARK_SCHEME
  }

  const setScheme = (newScheme: string): void => {
    scheme.value = getProperSchemeValue(newScheme)
    localStorage.setItem(localStorageKey, scheme.value)
    if ([LIGHT_SCHEME, DARK_SCHEME].includes(scheme.value)) {
      theme.value = scheme.value
      force.value = true
      return
    }
    theme.value = getThemeMatchingScheme(scheme.value, mediaQuery)
    force.value = false
  }

  const target = document.documentElement
  const observerOptions = {
    subtree: false,
    childList: false,
    attributes: true,
  }

  const observer = new MutationObserver((mutationList /* , observer */) => {
    for (const mutation of mutationList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-fr-theme') {
        const newScheme = (mutation.target as HTMLElement).getAttribute(mutation.attributeName) as 'light' | 'dark'
        if (newScheme !== scheme.value) {
          setScheme(newScheme)
        }
      }
    }
  })

  observer.observe(target, observerOptions)

  window.addEventListener('unload', () => observer.disconnect())

  setScheme(scheme.value)

  return {
    setScheme,
    theme: computed(() => theme.value),
    scheme: computed(() => scheme.value),
  }
}
