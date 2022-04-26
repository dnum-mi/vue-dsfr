<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    active: Boolean,
    to: {
      type: String,
      default: '',
    },
  },

  emits: ['toggle-expand'],

  computed: {
    isExternalLink () {
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
    is () {
      return this.isExternalLink ? 'a' : 'router-link'
    },
    linkProps () {
      return { [this.isExternalLink ? 'href' : 'to']: this.to }
    },
  },
})
</script>

<template>
  <component
    :is="is"
    :aria-current="active ? 'page' : undefined"
    class="fr-sidemenu__link"
    v-bind="linkProps"
  >
    <!-- @slot Slot par défaut pour le contenu d’une liste du menu latéral -->
    <slot />
  </component>
</template>
