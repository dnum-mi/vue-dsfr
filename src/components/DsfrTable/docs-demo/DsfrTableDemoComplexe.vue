<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import DsfrTag from '../../DsfrTag/DsfrTag.vue'

import DsfrTable from '../DsfrTable.vue'
import type { DsfrTableCellProps, DsfrTableRowProps } from '../DsfrTable.types'

getCurrentInstance()?.appContext.app.component('DsfrTag', DsfrTag)

const title = 'Utilisateurs'
const headers = ['Nom', 'Prénom', 'Email', 'Statut']
const rows: (string | DsfrTableRowProps | DsfrTableCellProps | { component: string, [k: string]: unknown })[][] = [
  [
    'SÖZE',
    'Keyser',
    'keyser.soze@mastermind.com',
    {
      component: 'DsfrTag',
      label: 'Info',
      class: 'info',
    },
  ],
  [
    'HUNT',
    'Ethan',
    'ethan.hunt@impossible.com',
    {
      component: 'DsfrTag',
      label: 'Erreur',
      class: 'error',
    },
  ],
  [
    'HOLMES',
    'Sherlock',
    'sherlock.holmes@whodunit.com',
    {
      component: 'DsfrTag',
      label: 'Succès',
      class: 'success',
    },
  ],
  [
    'JONES',
    'Indiana',
    'indiana.jones@marshall-college.com',
    {
      component: 'DsfrTag',
      label: 'Info',
      class: 'info',
    },
  ],
  [
    'WAYNE',
    'Bruce',
    'bruce.wayne@batmail.com',
    {
      component: 'DsfrTag',
      label: 'Erreur',
      class: 'error',
    },
  ],
]
</script>

<template>
  <DsfrTable
    :title="title"
    :headers="headers"
    :rows="rows"
    :no-caption="noCaption"
    :pagination="pagination"
    :current-page="currentPage"
    :results-displayed="resultsDisplayed"
  />
</template>

<style scoped>
:deep(.info) {
  color: var(--info-425-625);
  background-color: var(--info-950-100);
}
:deep(.error) {
  color: var(--error-425-625);
  background-color: var(--error-950-100);
}
:deep(.success) {
  color: var(--success-425-625);
  background-color: var(--success-950-100);
}
</style>
