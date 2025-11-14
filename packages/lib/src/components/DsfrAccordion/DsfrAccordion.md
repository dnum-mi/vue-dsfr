# Accordéon - `DsfrAccordion`

## 🌟 Introduction

Les accordéons permettent aux utilisateurs d'afficher et de masquer des sections de contenu présentés dans une page.

🏅 La documentation sur l’accordéon sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon)

<VIcon name="vi-file-type-storybook" /> La story sur l’accordéon sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfraccordion--docs)

## 📐 Structure

Un accordéon est constitué des éléments suivants :


Autres props :


## 🛠️ Props

|  Nom                    |   Type                                    |  Défaut          | Obligatoire  |
| ----------------------- | ----------------------------------------- | ---------------- | -------------|
| `title`                 | *`string`*                                | `useRandomId('accordion')`                 | ✅           |
| `titleTag`              | [*`TitleTag`*](/docs/types.md#title-tag)  |    `'h3'`        |              |
| `id`                    | *`string`*                                | *random string*  |              |

## 📡Évenements

Pas d'événements spécifiques émis directement par ce composant.

## 🧩 Slots


## 📝 Exemples

Ce composant peut être utilisé uniquement avec [`DsfrAccordionsGroup`](/composants/DsfrAccordionsGroup).

## ⚙️Code source du composant

::: code-group
<<< DsfrAccordion.vue
<<< DsfrAccordion.types.ts
<<< injection-key.ts
:::
