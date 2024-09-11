<script setup lang="ts">
import DsfrTableHeader from './DsfrTableHeader.vue'

import type { DsfrTableHeaderProps, DsfrTableHeadersProps } from './DsfrTable.types'

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
