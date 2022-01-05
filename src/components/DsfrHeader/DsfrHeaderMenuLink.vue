<template>
  <component
    :is="is"
    class="fr-link"
    v-bind="linkData"
    :class="{
      'flex': true,
      'reverse': iconRight,
    }"
    @click.stop="onClick"
  >
    <VIcon
      v-if="icon"
      :name="icon"
      :label="iconOnly ? label : undefined"
      :class="{
        'icon-right': iconRight,
        'icon-left': !iconOnly && !iconRight,
      }"
    />
    <span v-if="!iconOnly">{{ label }}</span>
  </component>
</template>

<script>
export default {
  name: 'DsfrHeaderMenuLink',

  props: {
    /* @deprecated Utilser `to` ou `href` à la place */
    path: {
      type: [String, Object],
      default: undefined,
    },
    button: Boolean,
    iconOnly: Boolean,
    iconRight: Boolean,
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
}
</script>

<style scoped>

.icon-left {
  margin-right: 0.5rem
}
.icon-right {
  margin-left: 0.5rem
}

.flex {
  display: flex;
  align-items: center;
}

.reverse {
  flex-direction: row-reverse;
}
</style>
