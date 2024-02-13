# Téléchargement de fichier - `DsfrFileDownload`

## 🌟 Introduction

Le téléchargement de fichier permet à l'utilisateur de choisir un fichier à téléverser depuis son poste.

🏅 La documentation du composant téléchargement de fichier sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/telechargement-de-fichier)

<VIcon name="vi-file-type-storybook" /> La story du téléchargement de fichier sur le storybook de [VueDsfr](https://vue-dsfr.netlify.app/?path=/docs/composants-dsfrfiledownload--docs)

## 📐 Structure

Le téléchargement de fichier est constitué des éléments suivants :

- le format de la ressource (prop **`format`**, de type `string`)
- la taille de la ressource (prop **`size`**, de type `string`)
- le chemin vers la ressource (prop **`href`**, de type `string`)
- le nom de la ressource (prop **`download`**, de type `string`)
- le titre du lien permettant de téléchager la ressource (prop **`title`**, de type `string`)

## 🛠️ Les props

|  nom                    |   type        |  défaut                      | obligatoire |
| ----------------------- | ---------     | ---------------------------- | --------    |
| `format`                | *`string`*    | `'JPEG'`                     |             |
| `size`                  | *`string`*    | `'250 Ko'`                   |             |
| `href`                  | *`string`*    | `'#'`                        |             |
| `download`              | *`string`*    | `''`                         |             |
| `title`                 | *`string`*    | `' Télécharger le document'` |             |

## 📝 Un exemple complet

::: code-group

<Story data-title="Démo" min-h="80px">
  <DsfrFileDownloadDemo />
</Story>

<<< docs-demo/DsfrFileDownloadDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrFileDownload.vue

:::

<script setup lang="ts">
import DsfrFileDownloadDemo from './docs-demo/DsfrFileDownloadDemo.vue'
</script>
