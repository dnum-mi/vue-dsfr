---
title: Utiliser des icônes
---

# Utiliser des icônes dans un projet avec VueDsfr

## Utiliser les icônes officielles

Pour utiliser les icônes officielles avec les classes CSS du DSFR, il n’y a pas d’actions en plus à faire,
puisque c’est le CSS officiel du DSFR qui est utilisé.

Ci-dessous un exemple :

::: code-group

<Story data-title="Démo">
  <IconesOfficielles />
</Story>

<<< ../docs-demo/IconesOfficielles.vue [Code de la démo]
:::

##  Utiliser les icônes dans les composants de VueDsfr

Plusieurs composants (`DsfrButton`, `DsfrBadge`, `DsfrCallout`...) ont la prop `icon` qui permet d’ajouter une icône.

Attention, cette icône n’est pas forcément une icône officielle du DSFR. En effet, VueDsfr utilise désormais (depuis la v6) la bibliothèque [`@iconify/vue`](https://iconify.design/docs/icon-components/vue/). Cette prop `icon` est donc :

- soit une `string` qui doit être un nom de classe valide pour une icône du DSFR (qui commence par `'fr-icon-'`) ;
- soit une `string` qui doit être un nom d’icône valide pour [iconify](https://icon-sets.iconify.design);
- soit la prop complète attendue par le composant `VIcon` de la bibliothèque dont voici le type :
  :::code-group
  <<< ../../src/components/VIcon/VIcon.types.ts
  :::

## Démo

::: code-group

<Story data-title="Démo" min-h="200px">
  <DemoIconesDansComposants />
</Story>

<<< ../docs-demo/DemoIconesDansComposants.vue [Code de la démo]
:::

::: warning
Il faut normalement utiliser le nom en **kebab-case** et avec le nom de la collection en prefix séparé par un caractère `:` comme par exemple `ri:close-line`

exemple :

```vue
<template>
  Nom d’icône correct : <VIcon name="ri:close-line" />
</template>
```

Cependant, si le préfix est lui-même sans tiret `-`, alors l’écriture tout en kebab-case est acceptée :

```vue
<template>
  Nom d’icône accepté : <VIcon name="ri-close-line" />
</template>
```

Ainsi, si vous utilisiez jusqu’ici que des collections remix icon (`ri`) et bootstrap icons (`bi`) vous ne devriez rien avoir à changer.

:::

::: info Les collections disponibles
Vous pouvez utiliser toutes les icônes disponibles ici : [icon-sets.iconify.design](https://icon-sets.iconify.design/)
:::

```typescript{10-16}
// src/components/MonComposant.vue
<script lang="ts" setup>
import { ref } from 'vue'

import { VIcon } from '@gouvminint/vue-dsfr'
</script>

<template>
  <div>
    <VIcon
      name="ri-checkbox-circle-line"
      scale="2"
      animation="float"
      label="icon label"
      title="icon title"
    />
    C’est validé !
  </div>
</template>

```

## Pour Nuxt 3

Veillez simplement à utiliser la prop `ssr` à `true`.

Plus de détails dans la [documentation officielle de @iconify/vue](https://iconify.design/docs/icon-components/vue/#ssr-attribute).

<script lang="ts" setup>
import IconesOfficielles from '../docs-demo/IconesOfficielles.vue'
import DemoIconesDansComposants from '../docs-demo/DemoIconesDansComposants.vue'
</script>
