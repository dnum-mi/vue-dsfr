<script>
export default {
  name: 'DsfrButton',
  props: {
    disabled: Boolean,
    label: {
      type: String,
      default: undefined,
    },
    secondary: Boolean,
    icon: {
      type: String,
      default: undefined,
    },
    iconRight: Boolean,
    iconOnly: Boolean,
  },

  methods: {
    focus () {
      this.$refs.btn.focus()
    },
  },
}
</script>

<template>
  <button
    ref="btn"
    :class="{
      'fr-btn': true,
      'fr-btn--secondary': secondary,
      'inline-flex': true,
      'reverse': iconRight,
      'justify-center': iconOnly,
    }"
    :disabled="disabled"
    :aria-disabled="disabled"
  >
    <VIcon
      v-if="icon"
      :name="icon"
      :class="{
        'icon-right': iconRight,
        'icon-left': !iconRight && !iconOnly,
      }"
    />

    <span>
      {{ label }}
      <!-- @slot Slot par défaut pour le contenu du bouton. Sera dans `<button class="fr-btn"><span">` -->
      <slot />
    </span>
  </button>
</template>

<style src="./button.main.css" />

<style scoped>
.icon-left {
  margin-right: 0.5rem
}
.icon-right {
  margin-left: 0.5rem
}

.inline-flex {
  display: inline-flex;
  align-items: center;
}

.reverse {
  flex-direction: row-reverse;
}
</style>
