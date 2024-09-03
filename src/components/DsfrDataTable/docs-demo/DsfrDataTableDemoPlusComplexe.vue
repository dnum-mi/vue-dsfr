<script lang="ts" setup>
import { ref } from 'vue'

import DsfrDataTable from '../DsfrDataTable.vue'
import type { DsfrDataTableProps } from '../DsfrDataTable.types'

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
  { id: 1, name: 'John Doe', email: 'john.doe@gmail.com' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@gmail.com' },
  { id: 3, name: 'James Bond', email: 'james.bond@mi6.gov.uk' },
]

const click = (event: MouseEvent, key: string) => {
  console.warn(event, key)
}

const selection = ref<string[]>([])
const currentPage = ref<number>(0)
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrDataTable
      v-model:selection="selection"
      v-model:current-page="currentPage"
      :headers-row="headers"
      :rows="rows"
      selectable-rows
      :row-key="0"
      title="Titre du tableau (caption)"
      pagination
      :rows-per-page="2"
      :pagination-options="[1, 2, 3]"
    >
      <template #header="{ key, label }">
        <div @click="click($event, key)">
          <em>{{ label }}</em>
        </div>
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
