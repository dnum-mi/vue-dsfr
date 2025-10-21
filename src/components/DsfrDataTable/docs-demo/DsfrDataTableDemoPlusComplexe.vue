<script lang="ts" setup>
import type { DsfrDataTableProps } from '../DsfrDataTable.types'

import { ref } from 'vue'

import DsfrDataTable from '../DsfrDataTable.vue'

const headers: DsfrDataTableProps['headersRow'] = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'email',
    label: 'Email',
  },
]

const rows = [
  { id: 2, name: 'Jane Doe', email: 'jane.doe@gmail.com' },
  { id: 1, name: 'John Doe', email: 'john.doe@gmail.com' },
  { id: 3, name: 'James Bond', email: 'james.bond@mi6.gov.uk' },
]

const selection = ref<string[]>([])
const currentPage = ref<number>(0)
</script>

<template>
  <div class="fr-container fr-my-2v w-[800px]">
    <DsfrDataTable
      v-model:selection="selection"
      v-model:current-page="currentPage"
      :headers-row="headers"
      :rows="rows"
      selectable-rows
      row-key="id"
      title="Titre du tableau (caption)"
      pagination
      :rows-per-page="2"
      :pagination-options="[1, 2, 3]"
      bottom-action-bar-class="bottom-action-bar-class"
      pagination-wrapper-class="pagination-wrapper-class"
      sorted="id"
      :sortable-rows="['id']"
    >
      <template #header="{ label }">
        <em>{{ label }}</em>
      </template>

      <template #cell="{ colKey, cell }">
        <template v-if="colKey === 'email'">
          <a :href="`mailto:${cell as string}`">{{ cell }}</a>
        </template>
        <template v-else>
          {{ cell }} <em>({{ colKey }})</em>
        </template>
      </template>
    </DsfrDataTable>
    IDs sélectionnées : {{ selection }}
  </div>
</template>

<style scoped>
:deep(.bottom-action-bar-class) {
  width: 860px;
}
:deep(.pagination-wrapper-class) {
  width: 860px;
}
</style>
