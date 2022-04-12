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
    iconAttrs: {
      type: String,
      default: undefined,
    },
    iconRight: Boolean,
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
    v-bind="linkData"
    @click.stop="onClick"
  >
    <VIcon
      v-if="(icon || iconAttrs) && !iconRight"
      :name="icon"
      class="fr-mr-1w"
      v-bind="iconAttrs"
    />

    {{ label }}

    <VIcon
      v-if="(icon || iconAttrs) && iconRight"
      :name="icon"
      class="fr-ml-1w"
      v-bind="iconAttrs"
    />
  </component>
</template>
