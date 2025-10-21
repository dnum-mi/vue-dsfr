<script setup lang="ts">
import type { DsfrTableHeaderProps, DsfrTableHeadersProps } from './DsfrTable.types'

import DsfrTableHeader from './DsfrTableHeader.vue'

export type { DsfrTableHeadersProps }

defineProps<{
  headers: DsfrTableHeadersProps
}>()
</script>

<template>
  <tr
    v-if="headers"
  >
    <DsfrTableHeader
      v-for="(header, i) of headers"
      :key="i"
      :header="(typeof header === 'object' ? header : {}).text || (header as string)"
      :header-attrs="(header as DsfrTableHeaderProps).headerAttrs"
    />
  </tr>
</template>
