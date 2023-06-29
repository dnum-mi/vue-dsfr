<script lang="ts" setup>
export type DsfrSideMenuListItemProps = { active?: boolean }

defineProps<DsfrSideMenuListItemProps>()
</script>

<template>
  <li
    class="fr-sidemenu__item"
    :class="{ 'fr-sidemenu__item--active': active }"
  >
    <!-- @slot Slot par défaut pour le contenu d’une liste du menu latéral -->
    <slot />
  </li>
</template>
