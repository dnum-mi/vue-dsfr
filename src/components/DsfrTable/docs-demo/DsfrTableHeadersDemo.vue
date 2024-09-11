<script setup lang="ts">
import DsfrTable from '../DsfrTable.vue'
import DsfrTableHeaders from '../DsfrTableHeaders.vue'
import type { DsfrTableRowProps } from '../DsfrTable.types'

const title = 'Exemple de tableau avec entêtes personnalisées'
const rows: DsfrTableRowProps[] = [
  { rowData: ['Alice', '30', 'Paris'] },
  { rowData: ['Bob', '24', 'Lyon'] },
]
</script>

<template>
  <DsfrTable
    :title="title"
    :rows="rows"
    class="w-full"
  >
    <template #header>
      <DsfrTableHeaders
        :headers="[
          { text: 'Nom', headerAttrs: { class: 'header-nom' } },
          { text: 'Age', headerAttrs: { class: 'header-age' } },
          'Ville',
        ]"
      />
    </template>
  </DsfrTable>
</template>

<style scoped>
:deep(.fr-table table) {
  table-layout: fixed;
}
</style>
