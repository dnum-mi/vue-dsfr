<script>
import { defineComponent } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

// TODO: Pourquoi icône 'check' quand on utilise ce js et qu’on clique sur le premier ?
// D’autre part, pour les étiquettes sélectionnables posent problème : le JS n’est pas
// import '@gouvfr/dsfr/dist/component/tag/tag.module.js'

export default defineComponent({
  name: 'DsfrTag',

  components: {
    VIcon,
  },

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
        ? (this.isExternalLink ? 'a' : 'RouterLink')
        : ((this.disabled && this.tagName === 'p') ? 'button' : this.tagName)
    },
    isExternalLink () {
      return typeof this.link === 'string' && this.link.startsWith('http')
    },
    linkProps () {
      return { [this.isExternalLink ? 'href' : 'to']: this.link }
    },
  },
})
</script>

<template>
  <component
    :is="is"
    class="fr-tag"
    :disabled="disabled"
    :class="{
      'fr-tag--sm': small,
    }"
    :aria-pressed="selected"
    v-bind="linkProps"
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

<style src="@gouvfr/dsfr/dist/component/tag/tag.main.min.css" />

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
