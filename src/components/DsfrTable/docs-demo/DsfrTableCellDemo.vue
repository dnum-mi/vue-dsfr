<script lang="ts" setup>
import DsfrTable from '../DsfrTable.vue'
import DsfrTableCell from '../DsfrTableCell.vue'
import DsfrTableHeaders from '../DsfrTableHeaders.vue'
import DsfrTag from '../../DsfrTag/DsfrTag.vue'

import { getCurrentInstance } from 'vue'
getCurrentInstance()?.appContext.app.component('DsfrTag', DsfrTag)

const headers = ['Nom', 'Prénom', 'Email', 'Statut']

const fieldWithComponent = {
  component: 'DsfrTag',
  label: 'Succès',
  class: 'success',
}
</script>

<template>
  <DsfrTable
    title="Tableau avec une cellule personnalisée"
  >
    <template #header>
      <DsfrTableHeaders :headers="headers" />
    </template>
    <tr>
      <DsfrTableCell field="Le nom" />
      <DsfrTableCell field="Le prénom" />
      <DsfrTableCell field="l’adresse email" />
      <DsfrTableCell :field="fieldWithComponent" />
    </tr>
  </DsfrTable>
</template>

<style scoped>
:deep(.success) {
  color: var(--success-425-625);
  background-color: var(--success-950-100);
}
</style>
