# `useTabs`

::: danger Obsolète depuis la v6 !!!

Ce composable ne sert plus depuis la version 6 de VueDsfr. Utiliser `v-model` sur `DsfrTabs` à la place, cf. [documentation de `DsfrTabs`](/composants/DsfrTabs).

La démo ne fonctionnant plus avec la v6, elle n’est plus visible sur ce site. Le code de la démo est néanmoins toujours accessible pour ceux qui utilisent encore la v5.

:::

Ce composable permet de gérer simplement les props de [DsfrTabs](/composants/DsfrTabs) et de ses enfants pour gérer l’affichage du contenu de l’onglet (grâce à la prop `selected` de `DsfrTabContent`) et le sens de l’animation (grâce à la prop `asc` sur `DsfrTabContent`).

## Utilisation (Script setup TypeScript)

::: code-group

<<< docs-demo/UseTabsDemo.vue [Code de la démo]

<<< useTabs.ts
:::

<script setup lang="ts">
import UseTabsDemo from './docs-demo/UseTabsDemo.vue'
</script>
