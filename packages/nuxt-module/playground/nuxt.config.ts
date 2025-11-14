// import '@gouvfr/dsfr/dist/utility/utility.main.min.css'

export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  css: [
    '@gouvfr/dsfr/dist/core/core.main.min.css',
    '@gouvfr/dsfr/dist/component/component.main.min.css',
    '@gouvfr/dsfr/dist/utility/utility.main.min.css',
    '@gouvfr/dsfr/dist/scheme/scheme.min.css',
  ],
  vueDsfr: {
    enabled: true
  },
})
