# Accordéon - `DsfrAccordion`

Les accordéons permettent aux utilisateurs d'afficher et de masquer des sections de contenu présentés dans une page.

## Structure

Un accordéon est constitué des éléments suivants :

- un en-tête (prop **`title`**, de type `string`), correspondant au titre de la section - obligatoire.
- une icône, <VIcon name="ri-arrow-drop-down-line" scale="1.25" /> indique quand le panneau est fermé, <VIcon name="ri-arrow-drop-up-line" scale="1.25" /> quand le panneau est ouvert.
- un séparateur
- une zone de contenu, masqué par défaut pouvant contenir tout type d'élément, le `slot` par défaut est fait pour ça

Autres props :

- **`id`** : identifiant du contenu de l’accordéon, qui est utilisé aussi pour l’attribut `aria-controls` du bouton qui permet de plier et déplier l’accordéon
- **`expandedId`** : identifiant de l’accordéon actuellement déplié (pour savoir si l’accordéon doit être déplié)

## Les props

|  nom                   |   type      |  défaut         | obligatoire |
| ----------------------- | ---------   | ---------------- | -------- |
| `title`                    | *`string`*    | | oui |
| `titleTag`              | [*`TitleTag`*](/docs/types.md#title-tag "'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'")  |    `'h3'`     | |
| `id`                    | *`string`*    | *random string*  | |
| `expandedId`                    | *`string`*    | *`undefined`*  | |

## Les événements

`DsfrAccordion` déclenche l’événement `'expand'` au clic sur le titre de l’accordéon.

|  nom                   |   donnée (*payload*) | détail de la donnée
| ---------------------- |  ---------            | --- |
| `'expand'` |       *`string`*       | Il s’agit de l’`id` de l’accordéon (sa prop **`id`**) |

Ceci permet de récupérer l’id et de passer la prop **`expandedId`** à tous les accordéons du groupe (voir le code de la démo ci-dessous).

## Les groupes d’accordéons - `DsfrAccordionGroup`

Un accordéon prend plus de sens lorsqu’il fait partie d’un groupe (comme nous tous, non ?).

Les accordéons sont tous fermés et comprennent l’en tête et l’icône  <VIcon name="ri-arrow-drop-down-line" scale="1.25" /> si la prop **`expandedId`** est `undefined`.

La totalité de la barre de titre est cliquable. L’événement clic sur le titre de l’accordéon peut être intercepté en ajoutant un écouteur sur l’événement `expand` qui envoie l’id de l’accordéon :

```vue{6,15,16,25,26}
<script lang="ts" setup>
// (...)
const title1 = ref('Un titre d’accordéon 1')
const title2 = ref('Un titre d’accordéon 2')
// (...)
const expandedId = ref('')
</script>

<template>
  <DsfrAccordionsGroup>
    <li>
      <DsfrAccordion
        id="accordion-1"
        :title="title1"
        :expanded-id="expandedId"
        @expand="expandedId = $event"
      >
        Contenu de l’accordéon 1
      </DsfrAccordion>
    </li>
    <li>
      <DsfrAccordion
        id="accordion-2"
        :title="title2"
        :expanded-id="expandedId"
        @expand="id => expandedId = id"
      >
        Contenu de l’accordéon 2
      </DsfrAccordion>
    </li>
    <!-- (...) -->
</template>
```

::: tip
Comme l’événement `expand` a comme donnée (payload) l’`id` de l’accordéon, les deux lignes suivantes sont équivalentes :

```vue
@expand="id => expandedId = id"
```

et

```vue
@expand="expandedId = $event"
```

Cf. la [documentation Vue](https://vuejs.org/guide/essentials/event-handling.html#accessing-event-argument-in-inline-handlers) pour plus de détails.
:::

## Un exemple complet

::: code-group

<Story data-title="Démo" min-h="400px">
  <DsfrAccordionDemo />
</Story>

<<< docs-demo/DsfrAccordionDemo.vue [Code de la démo]

<<< DsfrAccordion.vue

<<< DsfrAccordionsGroup.vue
:::

<script setup lang="ts">
import DsfrAccordionDemo from './docs-demo/DsfrAccordionDemo.vue'
</script>
