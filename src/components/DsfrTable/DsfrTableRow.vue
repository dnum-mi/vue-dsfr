<script lang="ts" setup>
import { type HTMLAttributes } from 'vue'
import DsfrTableCell from './DsfrTableCell.vue'

export type DsfrTableRowProps = {
  rowData?: string[]
  rowAttrs?: HTMLAttributes
}

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
