<script lang="ts" setup>
import DsfrDataTable from '../DsfrDataTable.vue'

const headers = [
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
]

const click = (event: MouseEvent, key: string) => {
  console.warn(event, key)
}
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrDataTable
      :headers-row="headers"
      :rows="rows"
    >
      <template #header="{ key, label }">
        <div @click="click($event, key)">
          <em>{{ label }}</em>
        </div>
      </template>

      <template #cell="{ colKey, cell }">
        <template v-if="colKey === 'email'">
          <a :href="`mailto:${cell}`">{{ cell }}</a>
        </template>
        <template v-else>
          {{ cell }} <em>({{ colKey }})</em>
        </template>
      </template>
    </DsfrDataTable>
  </div>
</template>
