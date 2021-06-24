<template>
  <button :class="{ 'fr-btn': true, 'fr-btn--secondary': secondary }">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'DsfrButton',
  props: {
    label: {
      type: String,
      default: 'OK',
    },
    icon: Boolean,
    secondary: Boolean,
  },
}
</script>

<style scoped>
.fr-btn {
  border: 0;
  background-color: var(--bf500);
  padding: 0.5rem 1.5rem;
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
</style>
