<script lang="ts" setup>
import DsfrTable from '../DsfrTable.vue'
</script>

<template>
  <DsfrTable
    title="Exemple de tableau simple"
    :headers="['Nom', 'Age', 'Ville']"
    :rows="[
      { rowData: ['Alice', '30', 'Paris'] },
      { rowData: ['Bob', '24', 'Lyon'] },
    ]"
  />
</template>
