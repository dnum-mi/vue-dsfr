<script lang="ts" setup>
import DsfrDataTable from '../DsfrDataTable.vue'

const headers = [
  'ID',
  'Name',
  'Email',
]

const rows = [
  [1, 'John Doe', 'john.doe@gmail.com'],
  [2, 'Jane Doe', 'jane.doe@gmail.com'],
]
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrDataTable
      title="Titre du tableau (caption)"
      :headers-row="headers"
      no-caption
      :rows="rows"
    />
  </div>
</template>

<style scoped>

</style>
