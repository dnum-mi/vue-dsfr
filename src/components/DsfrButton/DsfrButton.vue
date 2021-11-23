<template>
  <button
    ref="btn"
    :class="{
      'fr-btn': true,
      'fr-btn--secondary': secondary,
      'inline-flex': true,
      'reverse': iconRight,
    }"
    :disabled="disabled"
    :aria-disabled="disabled"
  >
    <VIcon
      v-if="icon"
      :name="icon"
      :class="{
        'icon-right': iconRight,
        'icon-left': !iconRight,
      }"
    />

    <span>
      {{ label }}
      <slot />
    </span>
  </button>
</template>

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
  },

  methods: {
    focus () {
      this.$refs.btn.focus()
    },
  },
}
</script>

<style src="./button.css" />

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
