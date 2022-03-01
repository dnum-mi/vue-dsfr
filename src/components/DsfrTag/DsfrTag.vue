<script>
import { defineComponent } from 'vue'

// TODO: Pourquoi icône 'check' quand on utilise ce js et qu’on clique sur le premier ?
// D’autre part, pour les étiquettes sélectionnables posent problème : le JS n’est pas
// import '@gouvfr/dsfr/dist/component/tag/tag.module.js'

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
    selected: Boolean,
    disabled: Boolean,
    iconOnly: Boolean,
    small: Boolean,
  },

  computed: {
    is () {
      return this.link
        ? (this.isExternalLink ? 'a' : 'router-link')
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
      'fr-tag--sm': small,
    }"
    :aria-pressed="selected"
  >
    <VIcon
      v-if="icon"
      :name="icon"
      :label="iconOnly ? label : undefined"
      :scale="0.9"
    />
    <span v-if="!iconOnly">{{ label }}</span>
    <slot />
  </component>
</template>

<style src="@gouvfr/dsfr/dist/component/tag/tag.main.css" />

<style scoped>

.ov-icon {
  margin-top: 0.1rem;
}

.fr-tag {
  align-items: center;
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
