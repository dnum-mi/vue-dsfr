<script setup>
import DsfrTableHeader from './DsfrTableHeader.vue'

defineProps({
  headers: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <tr
    v-if="headers"
  >
    <DsfrTableHeader
      v-for="(header, i) of headers"
      :key="i"
      :header="header.text || header"
      :header-attrs="header.headerAttrs"
    />
  </tr>
</template>
