<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrTag',
  props: {
    label: {
      type: String,
      default: undefined,
    },
    link: {
      type: String,
      default: undefined,
    },
    tagName: {
      type: String,
      default: 'p',
    },
    icon: {
      type: String,
      default: undefined,
    },
    disabled: Boolean,
    iconRight: Boolean,
    sm: Boolean,
  },
  computed: {
    is () {
      return this.link
        ? (this.isExternalLink ? 'a' : 'router-view')
        : ((this.disabled && this.tagName === 'p') ? 'button' : this.tagName)
    },
    isExternalLink () {
      return typeof this.link === 'string' && this.link.startsWith('http')
    },
    to () {
      return this.isExternalLink ? undefined : this.link
    },
    href () {
      return this.isExternalLink ? this.link : undefined
    },
  },
})
</script>

<template>
  <component
    :is="is"
    class="fr-tag"
    :to="to"
    :href="href"
    :class="{
      'reverse': iconRight,
      'fr-tag--sm': sm
    }"
  >
    <VIcon
      v-if="icon"
      :name="icon"
      :scale="0.9"
      :class="{
        'icon-right': iconRight,
        'icon-left': !iconRight,
      }"
    />
    <span>{{ label }}</span>
  </component>
</template>

<style scoped>
.ov-icon {
  margin-top: 0.1rem;
}

.icon-left {
  margin-right: 0.5rem;
}
.icon-right {
  margin-left: 0.5rem;
}

.fr-tag {
  align-items: center;
}

.reverse {
  flex-direction: row-reverse;
}
</style>

<style src="./tag.css" />
