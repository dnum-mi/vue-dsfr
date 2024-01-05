# `useScheme`

Ce composable permet de gérer simplement le thème du site. Vous trouverez ci-dessous des exemples d’utilisation.

Un exemple complet est disponible sur [Stackblitz](https://stackblitz.com/edit/vue-dsfr-use-scheme?file=app.vue).

## Utilisation basique

::: code-group

```html [Options API]
<script>
import { useScheme } from '@gouvminint/vue-dsfr'

export default {
  mounted () {
    useScheme() // useScheme utilise `window` et modifie `document`, il faut donc être sûr d'être côté client
  }
}
</script>
```

```html [Composition API]
<script setup>
import { onMounted } from 'vue'
import { useScheme } from '@gouvminint/vue-dsfr'

onMounted(useScheme) // useScheme utilise `window` et modifie `document`, il faut donc être sûr d'être côté client
</script>
```

:::

Ceci va récupérer la préférence au niveau de l’OS de l’utilisateur et appliquer le bon thème en fonction de celui-ci.

## Utilisation avancée (Script setup TypeScript)

::: code-group

<Story data-title="Démo" min-h="400px">
  <UseSchemeDemo />
</Story>

<<< docs-demo/UseSchemeDemo.vue [Code de la démo]

<<< useScheme.ts
:::

<script setup lang="ts">
import UseSchemeDemo from './docs-demo/UseSchemeDemo.vue'
</script>
