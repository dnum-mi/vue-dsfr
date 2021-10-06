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
    iconOnly: Boolean,
    iconRight: Boolean,
    small: Boolean,
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
    :disabled="disabled"
    :href="href"
    :class="{
      'row-reverse': iconRight && !iconOnly,
      'fr-tag--sm': small,
    }"
  >
    <VIcon
      v-if="icon"
      :name="icon"
      :label="iconOnly ? label : undefined"
      :scale="0.9"
      :class="{
        'icon-right': iconRight && !iconOnly,
        'icon-left': !iconRight && !iconOnly,
      }"
    />
    <span v-if="!iconOnly">{{ label }}</span>
    <slot />
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

.row-reverse {
  flex-direction: row-reverse;
}

.success {
  color: var(--success);
  background-color: var(--bg-success);
}
.error {
  color: var(--error);
  background-color: var(--bg-error);
}
.warning {
  color: var(--warning);
  background-color: var(--bg-warning);
}
.info {
  color: var(--info);
  background-color: var(--bg-info);
}
</style>

<style src="./tag.css" />
