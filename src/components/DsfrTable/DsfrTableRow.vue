<script lang="ts" setup>
import DsfrTableCell from './DsfrTableCell.vue'

import type { DsfrTableRowProps } from './DsfrTable.types'

export type { DsfrTableRowProps }

withDefaults(defineProps<DsfrTableRowProps>(), {
  rowData: () => [],
  rowAttrs: () => ({}),
})
</script>

<template>
  <tr v-bind="rowAttrs">
    <!-- @slot Slot par défaut pour le contenu d’une ligne de tableau -->
    <slot />
    <DsfrTableCell
      v-for="(cell, i) of rowData"
      :key="i"
      :field="cell"
      :cell-attrs="typeof cell === 'object' && !cell.component ? cell.cellAttrs : {}"
    />
  </tr>
</template>
