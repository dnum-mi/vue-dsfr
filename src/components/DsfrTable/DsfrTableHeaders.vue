<script setup lang="ts">
import DsfrTableHeader, { DsfrTableHeaderProps } from './DsfrTableHeader.vue'

defineProps<{
  headers:(DsfrTableHeaderProps | string)[]
}>()
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
