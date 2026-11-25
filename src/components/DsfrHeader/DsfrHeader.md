# En-tête - `DsfrHeader`

## 🌟 Introduction

Salut les développeurs ! Découvrez `DsfrHeader`, le composant d'en-tête ultra-flexible pour vos applications Vue. Conçu pour mettre en valeur votre service et vos partenaires avec style, il intègre une barre de recherche, des liens rapides, et même un emplacement pour un logo personnalisé. Préparez-vous à donner à votre application une tête bien pensée !

🏅 La documentation sur l’en-tête sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete)

<VIcon name="vi-file-type-storybook" /> La story sur l’en-tête sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrheader--docs)

## 📐 Structure

L’en-tête est composé :

- du bloc Marque - obligatoire.
- du nom de site optionnel.
- d’une ‘baseline’ (description) sous le nom de site.
- d’une partie fonctionnelle optionnelle - proposant des **accès rapides** et/ou une [barre de recherche](/composants/DsfrSearchBar) et/ou un [sélecteur de langue](/composants/DsfrLanguageSelector) - adaptée aux besoins particuliers de chaque site.

## 🛠️ Props

| Nom                   | Type                        | Défaut               | Obligatoire | Description                                                                           |
|-----------------------|-----------------------------|----------------------|-------------|---------------------------------------------------------------------------------------|
| `searchbarId`         | `string`                    | `'searchbar-header'` |             | valeur de l’attribut `id` de l’input de la [searchbar](/composants/DsfrSearchBar.md). |
| `serviceTitle`        | `string`                    | `undefined`          |             | Titre du service affiché dans l'en-tête.                                              |
| `serviceDescription`  | `string`                    | `undefined`          |             | Description courte du service.                                                        |
| `homeTo`              | `string`                    | `'/'`                |             | Lien de la page d'accueil.                                                            |
| `logoText`            | `string` \| `string[]`      | `['République', 'Française']` |             | Texte ou texte alternatif du logo.                                                    |
| `modelValue`          | `string`                    | `''`                 |             | Valeur pour la barre de recherche.                                                    |
| `operatorImgAlt`      | `string`                    | `''`                 |             | Texte alternatif pour l'image de l'opérateur.                                         |
| `operatorImgSrc`      | `string`                    | `''`                 |             | Source de l'image de l'opérateur.                                                     |
| `operatorImgStyle`    | `StyleValue`                | `() => ({})`         |             | Style CSS pour l'image de l'opérateur.                                                |
| `placeholder`         | `string`                    | `'Rechercher...'`    |             | Placeholder pour la barre de recherche.                                               |
| `quickLinks`          | `DsfrHeaderMenuLinkProps[]` | `() => []`           |             | Liens rapides à afficher dans l'en-tête.                                              |
| `languageSelector`    | `DsfrLanguageSelectorProps` | `undefined`          |             | Liens rapides à afficher dans l'en-tête.                                              |
| `searchLabel`         | `string`                    | `'Recherche'`        |             | Label pour la barre de recherche.                                                     |
| `quickLinksAriaLabel` | `string`                    | `'Menu secondaire'`  |             | Label ARIA pour les liens rapides.                                                    |
| `showSearch`          | `boolean`                   | `false`              |             | Affiche ou non la barre de recherche.                                                 |
| `showBeta`            | `boolean`                   | `false`              |             | Affiche ou non l'indicateur BETA.                                                     |
| `showSearchLabel`     | *`string`*                  | `'Recherche'`        |             | Label du bouton pour afficher la recherche.                                           |
| `menuLabel`           | *`string`*                  | `'Menu'`             |             | Label du menu.                                                                        |
| `menuModalLabel`      | *`string`*                  | `'Menu modal'`       |             | Label du menu en mode modal.                                                          |
| `closeMenuModalLabel` | *`string`*                  | `'Fermer'`           |             | Label du bouton de fermeture du menu en mode modal.                                   |
| `homeLabel`           | *`string`*                  | `'Accueil'`          |             | Label de l'accueil composant le titre du lien présentant le service.                  |

## 📡Événements

| Nom               | Description                                      | Charge utile |
|-------------------|--------------------------------------------------| ---- |
| update:modelValue | Émis lors de la mise à jour de la barre de recherche. | Contenu (`string`) du champ de saisie pour la recherche |
| search            | Émis lorsqu’une recherche est effectuée.         | Contenu (`string`) du champ de saisie pour la recherche |
| languageSelect            | Émis lorsque l’utilisateur change la langue du site.         | Contenu (`string`) du champ de saisie pour la recherche |

## 🧩 Slots

| Nom                  | Description                                                    |
|----------------------|----------------------------------------------------------------|
| operator             | Slot pour le logo de l'opérateur.                        |
| before-quick-links   | Slot pour ajouter du contenu avant les liens rapides.          |
| after-quick-links    | Slot pour ajouter du contenu après les liens rapides.          |
| mainnav              | Slot pour le menu de navigation principal.               |
| default              | Slot par défaut pour le contenu supplémentaire dans l'en-tête. |

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="400px">
  <DsfrHeaderDemo />
</Story>

<<< docs-demo/DsfrHeaderDemo.vue [Code de la démo]
:::

Exemple plus complet sur l’[application de demo](https://demo.vue-ds.fr/) (dont le code source est disponible [ici](https://github.com/dnum-mi/vue-dsfr/tree/main/demo-app)).

## ⚙️ Code source du composant

::: code-group

<<< DsfrHeader.vue
<<< DsfrHeader.types.ts
<<< injection-key.ts

:::

<script setup lang="ts">
import DsfrHeaderDemo from './docs-demo/DsfrHeaderDemo.vue'
</script>
