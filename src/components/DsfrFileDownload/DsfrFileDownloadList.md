# Liste de téléchargements de fichiers - `DsfrFileDownloadList`

## 🌟 Introduction

La liste de téléchargements de fichiers permet de grouper plusieurs liens de téléchargement dans une liste organisée avec un style cohérent.

🏅 La documentation du composant téléchargement de fichier sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/telechargement-de-fichier)

<VIcon name="vi-file-type-storybook" /> La story de la liste de téléchargements sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrfiledownloadlist--docs)

## 📐 Structure

La liste de téléchargements crée :

- Un conteneur `<div>` avec les classes `fr-downloads-group fr-downloads-group--bordered`
- Un titre `<h4>` optionnel avec la classe `fr-downloads-group__title`
- Une liste `<ul>` contenant des éléments `DsfrFileDownload`

## 🛠️ Props

| nom      | type                       | défaut     | obligatoire | description                                              |
|----------|----------------------------|------------|-------------|----------------------------------------------------------|
| `files`  | `DsfrFileDownloadProps[]`  | `[]`       | ✅          | Tableau d'objets définissant les fichiers à télécharger |
| `title`  | `string`                   | `''`       |             | Titre optionnel de la liste de téléchargements          |

## 📡 Événements

`DsfrFileDownloadList` ne déclenche pas d'événements.

## 🧩 Slots

`DsfrFileDownloadList` n'a pas de slots personnalisés.

## 📝 Exemples

Exemple d'utilisation basique de la liste de téléchargements :

::: code-group

```vue
<script setup lang="ts">
import { ref } from 'vue'

const files = ref([
  {
    title: 'Formulaire de demande',
    format: 'PDF',
    size: '1.2 Mo',
    href: '/downloads/formulaire.pdf',
    download: 'formulaire-demande.pdf',
  },
  {
    title: 'Notice explicative',
    format: 'DOCX',
    size: '850 Ko',
    href: '/downloads/notice.docx',
    download: 'notice-explicative.docx',
  },
  {
    title: 'Modèle de courrier',
    format: 'ODT',
    size: '156 Ko',
    href: '/downloads/modele.odt',
    download: 'modele-courrier.odt',
  },
])
</script>

<template>
  <DsfrFileDownloadList
    title="Documents administratifs"
    :files="files"
  />
</template>
```

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrFileDownloadList.vue
<<< DsfrFileDownload.types.ts

:::
