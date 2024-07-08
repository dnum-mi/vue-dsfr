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
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrDataTable
      :headers-row="headers"
      :rows="rows"
    >
      <template #header="{ content: { key, label } }">
        <div @click="click($event)">
          <em>{{ label.toLowerCase() }}</em>
        </div>
      </template>

      <template #cell="{ content: { colKey, cell } }">
        <template v-if="colKey === 'email'">
          <a :href="`mailto:${cell}`">{{ cell }}</a>
        </template>
        <template v-else>
          {{ cell }} <em>({{ colKey }})</em>
        </template>
      </template>
    </DsfrDataTable>

    <DsfrDataTable
      :headers-row="headers"
      :rows="rows"
    />
  </div>
</template>

<style scoped>

</style>
