if (typeof window !== 'undefined') {
  // @ts-expect-error La propriété `dsfr` est comprise par @gouvfr/dsfr
  window.dsfr = {
    verbose: false,
    mode: 'vue',
  }
}
export {}
