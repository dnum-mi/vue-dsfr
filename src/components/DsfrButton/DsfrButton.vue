<template>
  <button
    :class="{
      'fr-btn': true,
      'fr-btn--secondary': secondary,
      'flex': true,
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
}
</script>

<style scoped>
.fr-btn {
  border: 0;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  background-color: var(--bf500);
  color: var(--w-bf500);

  &[disabled] {
    color: var(--g600-g400);
    background-color: var(--g200);
  }
}
.fr-btn--secondary {
  --color-hover: var(--block-color-hover);
  --color-active: var(--block-color-active);

  background-color: var(--t-plain);
  color: var(--bf500);
  box-shadow: inset 0 0 0 1px var(--bf500);

  &[disabled] {
    color: var(--g600-g400);
    box-shadow: inset 0 0 0 1px var(--g400);
  }
}
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
