<script lang="ts" setup>
import DsfrTable from '../DsfrTable.vue'
import DsfrTableRow from '../DsfrTableRow.vue'
import DsfrTag from '../../DsfrTag/DsfrTag.vue'

import { getCurrentInstance } from 'vue'
getCurrentInstance()?.appContext.app.component('DsfrTag', DsfrTag)

const title = 'Utilisateurs'
const headers = ['Nom', 'Prénom', 'Email', 'Statut']
const complexRowData = {
  rowAttrs: {
    class: 'pointer',
    style: 'text-decoration: line-through',
  },
  rowData: [
    'EGAUD',
    'Pierre-Louis',
    'pierre.egaud@ninja.com',
    {
      component: 'DsfrTag',
      label: 'Supprimé',
      class: 'error',
    },
  ],
}
</script>

<template>
  <DsfrTable
    :title="title"
    :headers="headers"
  >
    <DsfrTableRow
      :row-data="complexRowData.rowData"
      :row-attrs="complexRowData.rowAttrs"
    />
  </DsfrTable>
</template>

<style scoped>
.pointer {
  cursor: pointer;
}
:deep(.error) {
  color: var(--error-425-625);
  background-color: var(--error-950-100);
}
</style>
