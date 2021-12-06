<script setup>
import DsfrTableCell from './DsfrTableCell.vue'

defineProps({
  rowData: {
    type: Array,
    default: () => [],
  },
  rowAttrs: {
    type: Object,
    default: () => ({}),
  },
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
