## 🌟 Introduction

Le `DsfrFooter` est un composant Vue.js pour créer un pied de page personnalisé sur un site web. Il permet d'intégrer des logos, des liens vers des partenaires, des liens légaux, et d'autres éléments essentiels dans un pied de page.

Le pied de page est présent sur l’ensemble des pages du site. Il est situé en fin de page. Le trait bleu marque la séparation entre le corps de la page et le pied de page.

🏅 La documentation sur le pied de page sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/pied-de-page)

<VIcon name="vi-file-type-storybook" /> La story sur le pied de page sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrfooter--docs)

## 📐 Structure

Ce composant se structure en plusieurs parties, incluant :

1. **Le Haut du Pied de Page**: Peut être personnalisé avec des slots pour les listes de liens.
2. **Le Corps du Pied de Page**: Contient la marque, des descriptions et des liens vers l'écosystème.
3. **Les Partenaires**: Gérés par le composant `DsfrFooterPartners`.
4. **Le Bas du Pied de Page**: Inclut les liens obligatoires et la licence.

## 🛠️ Props

| nom                     | type                                   | défaut                                     | obligatoire |
| ----------------------- | -------------------------------------- | ------------------------------------------ | ----------- |
| `a11yCompliance`        | *`string`*                             | `'non conforme'`                           |             |
| `a11yComplianceLink`    | *`import('vue-router').RouteLocationRaw`*                   | `/a11y`                                    |             |
| `legalLink`             | *`string`*                             | `/mentions-legales`                        |             |
| `homeLink`              | *`import('vue-router').RouteLocationRaw`*                   | `/`                                        |             |
| `partners`              | *`DsfrFooterPartnersProps`*            | `undefined`                                |             |
| `personalDataLink`      | *`string`*                             | `/donnees-personnelles`                    |             |
| `cookiesLink`           | *`string`*                             | `/cookies`                                 |             |
| `logoText`              | *`string` \| `string[]`*               | `() => ['République', 'Française']`        |             |
| `descText`              | *`string`*                             | `undefined`                                |             |
| `beforeMandatoryLinks`  | *`DsfrFooterLinkProps[]`*              | `() => []`                                 |             |
| `afterMandatoryLinks`   | *`DsfrFooterLinkProps[]`*              | `() => []`                                 |             |
| `mandatoryLinks`        | *`{label: string, to: import('vue-router').RouteLocationRaw \| undefined}[]`* | Dynamique (voir script) |         |
| `ecosystemLinks`        | *`{label: string, href: string}[]`*    | Dynamique (voir script)                    |             |
| `operatorLinkText`      | *`string`*                             | `'Revenir à l’accueil'`                    |             |
| `operatorTo`            | *`import('vue-router').RouteLocationRaw` \| `undefined`*    | `/`                                        |             |
| `operatorImgStyle`      | *`import('vue').StyleValue`*                         | `undefined`                                |             |
| `operatorImgSrc`        | *`string`*                             | `undefined`                                |             |
| `operatorImgAlt`        | *`string`*                             | `''`                                       |             |
| `licenceTo`             | *`string`*                             | `'https://github.com/etalab/licence-ouverte/blob/master/LO.md'` | |
| `licenceLinkProps`      | *`{ href: string }` \| `{ to: import('vue-router').RouteLocationRaw \| undefined }`* | `undefined`      |             |
| `licenceText`           | *`string`*                             | `'Sauf mention contraire, tous les textes de ce site sont sous'` | |
| `licenceName`           | *`string`*                             | `'licence etalab-2.0'`                     |             |

## 📡 Événements

Aucun événement spécifique pour ce composant.

## 🧩 Slots

1. `footer-link-lists` : Permet de personnaliser les listes de liens dans la partie supérieure du pied de page.
2. `description` : Pour personnaliser la description dans le corps du pied de page.

## 📝 Exemples

::: code-group

<Story data-title="Démo">
  <DsfrFooterDemo />
</Story>

<<< docs-demo/DsfrFooterDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrFooter.vue
<<< DsfrFooter.types.ts

:::

<script setup lang="ts">
import DsfrFooterDemo from './docs-demo/DsfrFooterDemo.vue'
</script>
