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
  [1, 'John Doe', 'john.doe@gmail.com'],
  [2, 'Jane Doe', 'jane.doe@gmail.com'],
  [3, 'James Bond', 'james.bond@mi6.gov.uk'],
]

const click = (event: MouseEvent, key: string) => {
  console.warn(event, key)
}

const selection = ref<string[]>([])
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrDataTable
      v-model:selection="selection"
      title="Titre du tableau (caption)"
      :headers-row="headers"
      :rows="rows"
      selectable-rows
      :row-key="0"
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
