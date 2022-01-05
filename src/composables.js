import { ref, watchEffect, computed } from 'vue'

const PREFERS_DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)'
const COLOR_SCHEME_LS_KEY = 'vue-dsfr-scheme'
const LIGHT_SCHEME = 'light'
const DARK_SCHEME = 'dark'
const SYSTEM_SCHEME = 'system'
const DEFAULT_DATA_THEME_ATTRIBUTE = 'data-fr-theme'

const getProperSchemeValue = (desiredScheme) => {
  const scheme = desiredScheme ?? (localStorage.getItem(COLOR_SCHEME_LS_KEY) || SYSTEM_SCHEME)
  return [LIGHT_SCHEME, DARK_SCHEME, SYSTEM_SCHEME].includes(scheme)
    ? scheme
    : SYSTEM_SCHEME
}

const getThemeMatchingScheme = (scheme, mediaQuery) => {
  scheme = getProperSchemeValue(scheme)
  if (scheme === SYSTEM_SCHEME) {
    return mediaQuery?.matches ? DARK_SCHEME : LIGHT_SCHEME
  }
  return scheme
}

/**
 *
 * @param {import('../types/composables.js').UseThemeOptions=} options
 *
 * @returns {import('../types/composables.js').UseSchemeResult}
 */
export const useScheme = (options) => {
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
    document.body.setAttribute(
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

  const setScheme = (newScheme) => {
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
