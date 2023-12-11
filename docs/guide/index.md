# Introduction

VueDsfr est un **portage** du **[Système de design français][dsfr]**
en **[Vue 3][vue3]** sous forme de **bibliothèque de composants**.

Le code est [ouvert et disponible sur GitHub][github-vue-dsfr].

## Pourquoi VueDsfr ?

Le Bureau des ressources et réalisations (BRR) a choisi sa stack technique pour le front, et elle inclut
Vue 3. Le Système de design français (DSFR) est développé en JavaScript natif et en SCSS (SASS).

Le BRR a donc besoin d'un portage en Vue 3 de ce DSFR pour ses futurs projets qui devront le respecter.

## VueDsfr en quelques mots

Ce projet de bibliothèque de composants :

- reproduit le plus fidèlement possible les composants du [DSFR][dsfr] ;
- est fait avec [Vue 3][vue3] ;
- est utilisable facilement en tant que plugin Vue 3 ou Nuxt 3 ;
- exporte les types (TypeScript) du plugin, des composants et des composables ;
- est utilisable facilement dans un projet [npm][vue-dsfr-npm] ;
- met à disposition deux parties dans la documentation :
  - une pour [aider au développement](/?path=/story/docs-3-guide-du-développeur--page) ;
  - une autre pour l'[utilisation](/?path=/story/docs-2-guide-d-utilisation--page) ;
- publie un [site complet][vue-dsfr] disponible pour tous avec les composants et leurs variants testables dans celui-ci dans un storybook ;
- a une couverture de test optimale ;
- met à disposition les composants individuellement sans avoir à importer toute la bibliothèque (pour les petits projets).

## Les choix techniques retenus

### Cadriciels de travail

La bibliothèque est faite avec [Vue 3][vue3] et [Vue-router 4][vue-router].

La bibliothèque est mise en paquet grâce à [Vite][vite] en [mode bibliothèque][vite-library-mode].

Le CSS est écrit avec [PostCSS]{postcss} et notamment le plugin [postcss-preset-env][postcss-preset-env] (mais très peu de CSS est propre à la bibliothèque).

Le JavaScript est "linté" avec [ESLint][eslint] et configuré selon [StandardJS][standard-js].

::: info Configuration spécifique
Ci-dessous les modifications de la configuration de StandardJS :

- les virgules doivent être ajoutées pour tout ce qui est en multiligne (cf. [`comma-dangle`][eslint-comma-dangle]).\
`"comma-dangle": ["error", "always-multiline"]`
:::

### Environnements

Le serveur de développement est celui de [Storybook][storybook] et le site pour tester les composants est le storybook lui-même.

Storybook est configuré pour utiliser PostCSS.

### Tests

Les tests sont faits avec [Vitest][vitest] et [Vue Testing Library][vue-testing-library], et des tests d’accessibilité sont faits avec [Cypress][cypress] grâce aux [tests de composants][cypress-component-testing], ainsi qu’avec Storybook pour certains composants (notamment pour tous les tests de la touche tabulation, comme la modale et les onglets).

### Ressources

Les icônes sont toujours celles de [RemixIcon][remixicon], grâce au DSFR et parfois grâce à [Oh, Vue Icons!][oh-vue-icons] (qui permet d’ajouter d’[autres icônes](/?path=/story/fondamentaux-4-1-icônes-personnalisées--page)).

## Les acteurs du projet

- **Clément Debroize** ;
- **Pierre-Louis Egaud** ;
- **Stanislas Ormières** *(Lead dev, architecte, devops, mainteneur principal)*.

Le projet a pu bénéficier des retours et de contributions de :

- [Gildéric Deruette][github-user-gideruette] ;
- [Sophie Aitis][github-user-sophieaitis] ;
- [Ambroise Maupate][github-user-ambroisemaupate] ;
- [Alexandre Cailliaud][github-user-cailliaud] ;
- et [Adrien Martinez][github-user-adrylen].

Merci à vous !


<!-- Variables -->

[github-user-adrylen]: https://github.com/adrylen
[github-user-ambroisemaupate]: https://github.com/ambroisemaupate
[github-user-cailliaud]: https://github.com/cailliaud
[github-user-gideruette]: https://github.com/gideruette
[github-user-sophieaitis]: https://github.com/sophieaitis
[github-vue-dsfr]: https://github.com/dnum-mi/vue-dsfr/

[dsfr]: https://www.systeme-de-design.gouv.fr/
[vue-dsfr]: https://vue-dsfr.netlify.app/
[vue-dsfr-npm]: https://www.npmjs.com/package/@gouvminint/vue-dsfr/

[cypress]: https://www.cypress.io/
[cypress-component-testing]: https://docs.cypress.io/guides/component-testing/introduction
[eslint]: https://eslint.org/
[eslint-comma-dangle]: https://eslint.org/docs/rules/comma-dangle#options
[oh-vue-icons]: https://github.com/Renovamen/oh-vue-icons/
[postcss]: https://postcss.org/
[postcss-preset-env]: https://preset-env.cssdb.org/
[remixicon]: https://remixicon.com/
[standard-js]: https://standardjs.org/
[storybook]: https://storybook.js.org/
[vite]: https://vitejs.dev/
[vite-library-mode]: https://vitejs.dev/guide/build.html#library-mode
[vitest]: https://vitest.dev/
[vue3]: https://v3.vuejs.org/
[vue-router]: https://router.vuejs.org/
[vue-testing-library]: https://testing-library.com/docs/vue-testing-library/intro/
