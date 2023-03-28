<script>
import { defineComponent } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

export default defineComponent({
  name: 'DsfrHeaderMenuLink',

  components: {
    VIcon,
  },

  props: {
    /** @deprecated Utiliser `to` ou `href` à la place */
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
      type: Object,
      default: () => {},
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
    target: {
      type: String,
      default: '_self',
    },
  },

  computed: {
    is () {
      if (this.button) {
        return 'button'
      }
      return this.isExternalLink || this.isMailto ? 'a' : 'RouterLink'
    },
    isPathString () {
      return typeof this.path === 'string'
    },
    isExternalLink () {
      return this.href?.startsWith('http') || (this.isPathString && this.path.startsWith('http'))
    },
    isMailto () {
      return this.href?.startsWith('mailto') || (this.isPathString && this.path.startsWith('mailto'))
    },
    actualHref () {
      if (!this.isExternalLink && !this.isMailto) {
        return undefined
      }
      return this.href !== undefined ? this.href : this.path
    },
    actualTo () {
      if (this.isExternalLink || this.isMailto) {
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
    :target="target"
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
