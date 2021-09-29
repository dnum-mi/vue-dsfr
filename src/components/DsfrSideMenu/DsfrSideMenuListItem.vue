<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrSideMenuListItem',

  props: {
    active: Boolean,
  },
})
</script>
<template>
  <li
    class="fr-sidemenu__item"
    :class="{ 'fr-sidemenu__item--active': active }"
  >
    <!-- @slot Slot par défaut pour le contenu de cet item de menu latéral -->
    <slot />
  </li>
</template>
