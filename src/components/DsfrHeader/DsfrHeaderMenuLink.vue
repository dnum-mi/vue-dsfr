<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrHeaderMenuLink',

  props: {
    /* @deprecated Utiliser `to` ou `href` à la place */
    path: {
      type: [String, Object],
      default: undefined,
    },
    button: Boolean,
    icon: {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    is () {
      if (this.button) {
        return 'button'
      }
      return this.isExternalLink ? 'a' : ('$nuxt' in this ? 'nuxt-link' : 'router-link')
    },
    isPathString () {
      return typeof this.path === 'string'
    },
    isExternalLink () {
      return this.href !== undefined || (this.isPathString && this.path.startsWith('http'))
    },
    actualHref () {
      if (!this.isExternalLink) {
        return undefined
      }
      return this.href !== undefined ? this.href : this.path
    },
    actualTo () {
      if (this.isExternalLink) {
        return undefined
      }
      return this.to || this.path
    },
    linkData () {
      return this.actualTo ? { to: this.actualTo } : { href: this.actualHref }
    },
  },
})
</script>

<template>
  <component
    :is="is"
    class="fr-btn"
    :class="`fr-fi-${icon}`"
    v-bind="linkData"
    @click.stop="onClick"
  >
    {{ label }}
  </component>
</template>
