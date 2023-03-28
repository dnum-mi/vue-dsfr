<script>
import { defineComponent } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

// import '@gouvfr/dsfr/dist/component/button/button.module.js'

export default defineComponent({
  name: 'DsfrButton',

  components: {
    VIcon,
  },

  props: {
    disabled: Boolean,
    label: {
      type: String,
      default: undefined,
    },
    secondary: Boolean,
    tertiary: Boolean,
    noOutline: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: undefined,
    },
    size: {
      type: String,
      validator: (val) => ['sm', 'small', 'lg', 'large', 'md', 'medium', '', undefined].includes(val),
      default: undefined,
    },
    iconRight: Boolean,
    iconOnly: Boolean,
  },

  computed: {
    sm () {
      return ['sm', 'small'].includes(this.size)
    },
    md () {
      return ['md', 'medium'].includes(this.size)
    },
    lg () {
      return ['lg', 'large'].includes(this.size)
    },
    center () {
      return this.align === 'center'
    },
    right () {
      return this.align === 'right'
    },
  },

  methods: {
    focus () {
      this.$refs.btn.focus()
    },
  },
})
</script>

<template>
  <button
    ref="btn"
    :class="{
      'fr-btn': true,
      'fr-btn--secondary': secondary && !tertiary,
      'fr-btn--tertiary': tertiary && !secondary && !noOutline,
      'fr-btn--tertiary-no-outline': tertiary && !secondary && noOutline,
      'fr-btn--sm': sm,
      'fr-btn--md': md,
      'fr-btn--lg': lg,
      'inline-flex': true,
      'reverse': iconRight,
      'justify-center': iconOnly,
    }"
    :title="iconOnly ? label : undefined"
    :disabled="disabled"
    :aria-disabled="disabled"
  >
    <VIcon
      v-if="icon"
      :name="icon"
    />
    <span v-if="!iconOnly">
      {{ label }}
      <!-- @slot Slot par défaut pour le contenu du bouton. Sera dans `<button class="fr-btn"><span">` -->
      <slot />
    </span>
  </button>
</template>

<style scoped>
.inline-flex {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.reverse {
  flex-direction: row-reverse;
}
</style>
