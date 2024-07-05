<script lang="ts" setup>
import type { DsfrDataTableProps } from './DsfrDataTable.types'

const props = withDefaults(defineProps<DsfrDataTableProps>(), {
  headersRow: () => [],
  contentRows: () => [],
  headersColumn: () => [],
  selectableRows: () => [],
  topActionsRow: () => [],
  bottomActionsRow: () => [],
  currentPage: 1,
  resultsPerPage: 10,
})
</script>

<template>
</template>

<style scoped>

</style>
