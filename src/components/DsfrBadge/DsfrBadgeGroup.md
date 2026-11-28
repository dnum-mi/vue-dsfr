# Groupe de Badges - `DsfrBadgeGroup`

## 🌟 Introduction

Le `DsfrBadgeGroup` permet d'afficher un **groupe de badges** conforme au markup DSFR : une liste `<ul class="fr-badges-group">` dont chaque badge est contenu dans un `<li>` et rendu en `<span class="fr-badge">`.

C'est le pendant de [`DsfrTags`](/composants/DsfrTags) pour les badges : il évite au développeur d'avoir à connaître la classe `fr-badges-group` et le passage des badges en `<span>`.

🏅 La documentation sur le badge sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)

## 📐 Structure

Le composant affiche :

```html
<ul class="fr-badges-group">
  <li>
    <span class="fr-badge">Badge 1</span>
  </li>
  <li>
    <span class="fr-badge">Badge 2</span>
  </li>
</ul>
```

- Chaque objet de la prop `badges` est passé à [`DsfrBadge`](./DsfrBadge.md) via `v-bind`.
- La prop `tagName` de chaque badge est **forcée à `span`** pour respecter le markup DSFR (impossible de la surcharger).

## 🛠️ Props

| Nom     | Type                  | Défaut | Description |
|---------|-----------------------|--------|-------------|
| `badges` | `Omit<DsfrBadgeProps, 'tagName'>[]` | `[]` | Liste des badges à afficher. Chaque objet accepte toutes les props de `DsfrBadge` sauf `tagName`. |

## 📝 Exemples

```vue
<template>
  <DsfrBadgeGroup
    :badges="[
      { label: 'Badge simple' },
      { label: 'Badge succès', type: 'success' },
      { label: 'Badge erreur', type: 'error' },
      { label: 'Petit badge', small: true },
    ]"
  />
</template>
```

## ✂️ Troncature d'un badge trop long (`ellipsis`)

La prop `ellipsis` (passée via un objet de `badges`) tronque le texte d'un badge au lieu de le faire s'étendre. **Attention** : `fr-ellipsis` ne coupe que si une largeur borne le badge — c'est le comportement CSS du DSFR (`.fr-badge` a `width: fit-content` + `max-width: 100%`), pas une limitation de `DsfrBadgeGroup`.

Sans contrainte, le badge s'élargit pour contenir tout son texte (`width: fit-content`) et rien n'est tronqué. Pour tronquer, bornez la largeur du badge, par exemple via `style` (passé à la balise racine par `v-bind`), ou celle de son conteneur :

```vue
<template>
  <DsfrBadgeGroup
    :badges="[
      { label: 'Badge avec un texte très long qui devrait être tronqué', ellipsis: true, style: 'max-width: 15rem' },
      { label: 'Badge succès', type: 'success' },
    ]"
  />
</template>
```

Au survol, le badge tronqué affiche le texte complet via son attribut `title`.

::: code-group

<Story data-title="Démo" min-h="200px">
  <DsfrBadgeGroupExample />
</Story>

<<< docs-demo/DsfrBadgeGroupExample.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrBadgeGroup.vue
<<< DsfrBadgeGroup.types.ts

:::

<script setup lang="ts">
import DsfrBadgeGroupExample from './docs-demo/DsfrBadgeGroupExample.vue'
</script>
