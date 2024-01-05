# `useTabs`

Ce composable permet de gérer simplement les props de [DsfrTabs](/composants/DsfrTabs) et de ses enfants pour gérer l’affichage du contenu de l’onglet (grâce à la prop `selected` de `DsfrTabContent`) et le sens de l’animation (grâce à la prop `asc` sur `DsfrTabContent`).

## Utilisation (Script setup TypeScript)

::: code-group

<Story data-title="Démo" min-h="280px">
  <UseTabsDemo />
</Story>

<<< docs-demo/UseTabsDemo.vue [Code de la démo]

<<< useTabs.ts
:::

<script setup lang="ts">
import UseTabsDemo from './docs-demo/UseTabsDemo.vue'
</script>
