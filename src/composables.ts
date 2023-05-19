import { ref, watchEffect, computed, type Ref, type ComputedRef } from 'vue'

const PREFERS_DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)'
const COLOR_SCHEME_LS_KEY = 'vue-dsfr-scheme'
const LIGHT_SCHEME = 'light'
const DARK_SCHEME = 'dark'
const SYSTEM_SCHEME = 'system'
const DEFAULT_DATA_THEME_ATTRIBUTE = 'data-fr-theme'

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

const getProperSchemeValue = (desiredScheme: string): string => {
  const scheme = desiredScheme ?? (localStorage.getItem(COLOR_SCHEME_LS_KEY) || SYSTEM_SCHEME)
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

/*
 * Reproduce the DSFR fr-collapse behavior
 */
export const useCollapsable = () => {
  const collapse: Ref<HTMLElement | undefined> = ref()
  const collapsing: Ref<boolean> = ref(false)
  const cssExpanded: Ref<boolean> = ref(false)

  /**
   * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L61
   * @return void
   */
  const adjust = (): void => {
    if (!collapse.value) {
      return
    }
    collapse.value.style.setProperty('--collapser', 'none')
    const height = collapse.value.offsetHeight
    collapse.value.style.setProperty('--collapse', -height + 'px')
    collapse.value.style.setProperty('--collapser', '')
  }

  /**
   * @param {boolean} newValue
   * @return void
   */
  const doExpand = (newValue: boolean): void => {
    if (!collapse.value) {
      return
    }
    if (newValue === true) {
      // unbound
      // @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L33
      collapse.value.style.setProperty('--collapse-max-height', 'none')
    }
    // We need to wait for the next RAF to be sure the CSS variable will be set
    // DSFR use RAF too https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/api/modules/render/renderer.js#L22
    window.requestAnimationFrame(() => {
      collapsing.value = true
      adjust()
      // We need to wait for the next RAF to be sure the animation will be triggered
      window.requestAnimationFrame(() => {
        cssExpanded.value = newValue
      })
    })
  }

  /**
   * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L25
   * @param {boolean} expanded
   * @return void
   */
  const onTransitionEnd = (expanded: boolean): void => {
    collapsing.value = false
    if (collapse.value && expanded === false) {
      collapse.value.style.removeProperty('--collapse-max-height')
    }
  }

  return {
    collapse,
    collapsing,
    cssExpanded,
    doExpand,
    adjust,
    onTransitionEnd,
  }
}

/**
* Permet de gérer le thème selon le scheme donné.
* Si dans les options, `scheme` vaut 'system', le thème sera celui du système,
* si `scheme` vaut `'light'`, le theme sera clair,
* et s’il vaut `'dark'`, le thème sera sombre.
*
* @param {UseThemeOptions=} options - Peut contenir les clés `scheme` pour le scheme voulu et `dataThemeAttribute` pour l’attribut
*                   qui contiendra la valeur de scheme.
*
* @returns {UseSchemeResult} Objet contenant la fonction `setScheme` pour changer le scheme, et les
*          propriétés calculés (réactives et en lecture seule) `theme` et `scheme`.
*/
export const useScheme = (options?: UseThemeOptions): UseSchemeResult | undefined => {
  if (typeof window === 'undefined') {
    return
  }

  const opts = {
    scheme: localStorage.getItem(COLOR_SCHEME_LS_KEY) || SYSTEM_SCHEME,
    dataThemeAttribute: DEFAULT_DATA_THEME_ATTRIBUTE,
    ...options,
  }

  const mediaQuery =
    window.matchMedia && window.matchMedia(PREFERS_DARK_MEDIA_QUERY)

  const scheme = ref(getProperSchemeValue(opts.scheme))

  localStorage.setItem(COLOR_SCHEME_LS_KEY, scheme.value)

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
    localStorage.setItem(COLOR_SCHEME_LS_KEY, scheme.value)
    if ([LIGHT_SCHEME, DARK_SCHEME].includes(scheme.value)) {
      theme.value = scheme.value
      force.value = true
      return
    }
    theme.value = getThemeMatchingScheme(scheme.value, mediaQuery)
    force.value = false
  }

  setScheme(scheme.value)

  return {
    setScheme,
    theme: computed(() => theme.value),
    scheme: computed(() => scheme.value),
  }
}
