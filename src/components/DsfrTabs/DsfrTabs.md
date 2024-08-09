# Onglets - `DsfrTabs`

## 🌟 Introduction

Bonjour les artistes du code ! Voici `DsfrTabs`, le composant d'onglets Vue qui va révolutionner votre façon de présenter des contenus séparés mais cohérents. Avec sa gestion dynamique des onglets et son contenu personnalisable, vous êtes sur le point de donner à vos utilisateurs une expérience de navigation intuitive et élégante. Préparez-vous à plonger dans un monde où chaque onglet raconte sa propre histoire !

🏅 La documentation sur les onglets sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/onglet/)

<VIcon name="vi-file-type-storybook" /> La story sur les onglets sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrtabs--docs)

## 🛠️ Props

| Nom                  | Type                      | Défaut       | Obligatoire | Description                                                |
|----------------------|---------------------------|--------------|-------------|------------------------------------------------------------|
| `tabContents`          | `string[]`                   | `[]`   |             | Contenus (simples) des onglets.                                      |
| `modelValue` | `number`                  | `0`          |             | Index de l'onglet sélectionné au chargement (*existe depuis VueDsfr v6.0.0*).               |
| `tabTitles`            | `string[]`                   | `[]`   |             | Titres des onglets avec les id des panneaux et onglets associés. |
>>>>>>> 8171671 (feat: :sparkles: remanie DsfrTabs pour pouvoir utiliser v-model)

## 📡 Événements

|  nom                   |   donnée (*payload*) | détail de la donnée
| ---------------------- |  ---------            | --- |
| `'update:modelValue'` |       *`number`*       | Émis lorsqu'un onglet est sélectionné. Envoyant l'index de l'onglet sélectionné. |

::: warning Important
Depuis la v6, le composant `DsfrTabs` déclarant la prop `modelValue` et émettant l’événement `update:modelValue`, il est recommandé d’utiliser la directive `v-model`. Elle contient l’index (commençant à 0) de l’onglet à afficher.

Aussi, plus besoin, depuis la v6, d’utiliser le composable `useTabs()`. Cf. les exemples ci-dessous.
:::

## 🧩 Slots

| Nom          | Description                                                        |
|--------------|--------------------------------------------------------------------|
| `tab-items`    | Slot nommé pour insérer des titres d’onglets personnalisés. Si rempli, la prop `tabTitles` n’a aucun effet. |
| `default`      | Slot par défaut pour le contenu des onglets.                       |

## Les méthodes exposées

- `DsfrTabs#renderTabs()`: permet de forcer le recalcul de la hauteur de l’onglet

::: warning Important depuis la v6

Méthodes supprimées :

- `DsfrTabs#selectFirst` : permet de sélectionner le premier onglet (raccourci de `selectIndex(0)`)
- `DsfrTabs#selectLast` : permet de sélectionner le dernier onglet (raccourci de `selectIndex(tabs.length - 1)`)
- `DsfrTabs#selectIndex()`: n’existe plus : utiliser directement la *ref* utilisée dans le `v-model` de `DsfrTabs`

Au lieu de :

```vue
<script lang="ts">
import { ref } from 'vue'

const tabs = ref<HTMLElement>()

// Quelque part dans le code :
tabs.value.selectFirst()
tabs.value.selectLast()
tabs.value.selectIndex(n)

// (...)
</script>

<template>
  <!-- eslint-disable-next-line vue/no-unused-refs -->
  <DsfrTabs ref="tabs">
    <!-- (...) -->
  </DsfrTabs>
</template>
```

Utiliser :

```vue
<script lang="ts">
import { ref } from 'vue'

const activeTab = ref(0)
// Quelque part dans le code :
activeTab.value = 0 // active le premier onglet
activeTab.value = n // active l’onglet n
activeTab.value = tabTitles.length - 1 // active le dernier onglet

// (...)
</script>

<template>
  <DsfrTabs v-model="activeTab">
    <!-- (...) -->
  </DsfrTabs>
</template>
```

:::

## 📝 Exemples

1. **Onglets Simples :**

  ::: code-group

  <Story data-title="Démo" min-h="160px">
    <DsfrTabsDemoSimple />
  </Story>

  <<< docs-demo/DsfrTabsDemoSimple.vue [Code de la démo]

  :::
2. **Onglets Complexes :**

  ::: code-group

  <Story data-title="Démo" min-h="260px">
    <DsfrTabsDemoComplex />
  </Story>

  <<< docs-demo/DsfrTabsDemoComplex.vue [Code de la démo]

  :::

## ⚙️ Code source des composants

::: code-group
<<< DsfrTabs.vue
<<< DsfrTabContent.vue
<<< DsfrTabItem.vue
<<< DsfrTabs.types.ts
:::

<script setup lang="ts">
import DsfrTabsDemoSimple from './docs-demo/DsfrTabsDemoSimple.vue'
import DsfrTabsDemoComplex from './docs-demo/DsfrTabsDemoComplex.vue'
</script>
