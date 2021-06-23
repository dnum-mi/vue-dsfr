<template>
  <button :class="{ primary: true }">
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
    primary: Boolean,
  },
}
</script>

<style scoped>
.primary {
  background: #66b;
  color: white;
}
</style>
