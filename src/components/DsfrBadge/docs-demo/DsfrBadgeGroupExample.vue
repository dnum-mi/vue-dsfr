<script lang="ts" setup>
import DsfrBadgeGroup from '../DsfrBadgeGroup.vue'

// `ellipsis` (fr-ellipsis) ne tronque que si une largeur borne le badge : le badge
// long porte `max-width: 15rem` (mécanisme DSFR `max-width: 100%`). Sans contrainte,
// le badge s'élargit (`width: fit-content`) et le texte n'est pas coupé.
const badges = [
  { label: 'Badge simple' },
  { label: 'Badge succès', type: 'success' },
  { label: 'Badge erreur', type: 'error' },
  { label: 'Badge info', type: 'info' },
  { label: 'Petit badge', small: true },
  { label: 'Badge avec un texte très long qui devrait être tronqué', ellipsis: true, style: 'max-width: 15rem' },
]
</script>

<template>
  <div class="flex justify-center w-full">
    <DsfrBadgeGroup :badges="badges" />
  </div>
</template>
