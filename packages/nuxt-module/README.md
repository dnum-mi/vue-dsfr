# Module VueDsfr pour Nuxt 4

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Ce module facilite l'utilisation de la bibliothèque VueDsfr dans un projet Nuxt 4.

**⚠️ Version 3.x+ cible uniquement Nuxt 4. Pour Nuxt 3, utilisez la version 2.x**

- [✨ Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/laruiss/vue-dsfr-nuxt-module?file=playground%2Fapp.vue)
- [📖 Documentation](https://docs.vue-ds.fr/nuxt)

## Features

<!-- Highlight some of the features your module provide here -->
- 🪄 Imports automagiques des composables VueDsfr
- 🪄 Imports automagiques des composants VueDsfr (inclus le composant VIcon)
- ✨ Facilitation de l’utilisation des icônes de [@iconify/vue](https://iconify.design/docs/icon-components/vue/)

## Configuration rapide

1. Ajouter la dépendance `vue-dsfr-nuxt-module` au projet

```bash
# Avec pnpm
pnpm add -D vue-dsfr-nuxt-module

# Avec yarn
yarn add --dev vue-dsfr-nuxt-module

# Avec npm
npm i -D vue-dsfr-nuxt-module
```

N.B. : Vous devriez déjà avoir les dépendances `@gouvminint/vue-dsfr` et `@gouvfr/dsfr`

2. Ajouter `vue-dsfr-nuxt-module` dans la section `modules` de `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    'vue-dsfr-nuxt-module'
  ]
})
```

3. Ajouter le CSS de DSFR dans la section `css` de `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    'vue-dsfr-nuxt-module'
  ],
  css: [
    '@gouvfr/dsfr/dist/core/core.main.min.css', // Le CSS minimal du DSFR
    '@gouvfr/dsfr/dist/component/component.main.min.css', // Styles de tous les composants du DSFR
    '@gouvfr/dsfr/dist/utility/utility.main.min.css', // Classes utilitaires : les composants de VueDsfr en ont besoin, contient aussi les icônes
    '@gouvfr/dsfr/dist/scheme/scheme.min.css', // Facultatif : Si les thèmes sont utilisés (thème sombre, thème en bernes)
  ],
})
```

## Configuration

Le module peut être configuré avec les options suivantes :

```ts
export default defineNuxtConfig({
  modules: [
    'vue-dsfr-nuxt-module'
  ],
  vueDsfr: {
    // Activer ou désactiver le module (défaut: true)
    enabled: true
  }
})
```

### Options disponibles

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| `enabled` | `boolean` | `true` | Active ou désactive le module |

## Migration depuis Nuxt 3

Si vous migrez depuis Nuxt 3 et la version 2.x du module :

1. Mettez à jour vers Nuxt 4
2. Installez la version 3.x du module : `npm i -D vue-dsfr-nuxt-module@3`
3. Mettez à jour vos dépendances VueDsfr vers les dernières versions
4. Aucun autre changement de configuration n'est nécessaire !

Et voilà ! Vous êtes prêts à utiliser VueDsfr dans votre app Nuxt 4 ✨

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm dev:prepare

# Develop with the playground
pnpm dev

# Build the playground
pnpm dev:build

# Run ESLint
pnpm lint

# Run Vitest
pnpm test
pnpm test:watch

# Release new version
pnpm release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/vue-dsfr-nuxt-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/vue-dsfr-nuxt-module

[npm-downloads-src]: https://img.shields.io/npm/dm/vue-dsfr-nuxt-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/vue-dsfr-nuxt-module

[license-src]: https://img.shields.io/npm/l/vue-dsfr-nuxt-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/vue-dsfr-nuxt-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
