<script lang="ts" setup>
import DsfrDataTable from '../DsfrDataTable.vue'

const columns = [
  { label: 'Nom', isHeader: true },
  { label: 'Prénom', isHeader: true },
  { label: 'Email' },
  { label: 'Téléphone' },
  { label: 'Adresse' },
  { label: 'Code postal' },
  { label: 'Ville' },
]

const rows = [
  ['Doe', 'John', 'john.doe@exemple.com', '01 23 45 67 89', '123 Rue de la Paix', '75001', 'Paris'],
  ['Doe', 'Jane', 'jane.doe@exemple.com', '01 23 45 67 90', '456 Avenue des Champs-Élysées', '75008', 'Paris'],
  ['Ré', 'Hilde', 'hilde.re@exemple.com', '05 23 45 67 91', '789 Place Carnot', '17590', 'Ars en Ré'],
  ['Fa', 'Mulan', 'mulan.fa@exemple.com', '01 23 45 67 92', '1011 Boulevard Saint-Germain', '75005', 'Paris'],
]
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrDataTable
      title="Titre du tableau (caption)"
      no-caption
      :columns="columns"
      :rows="rows"
    />
  </div>
</template>

<style scoped>

</style>
