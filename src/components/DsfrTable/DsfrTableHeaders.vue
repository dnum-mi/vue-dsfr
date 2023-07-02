<script setup lang="ts">
import DsfrTableHeader, { DsfrTableHeaderProps } from './DsfrTableHeader.vue'

type Header = DsfrTableHeaderProps & { text?: string }

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
      :header="(header as Header).text || (header as string)"
      :header-attrs="(header as DsfrTableHeaderProps).headerAttrs"
    />
  </tr>
</template>
