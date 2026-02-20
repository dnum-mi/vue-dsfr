<script lang="ts" setup>
import DsfrToggleSwitchGroup from '../DsfrToggleSwitchGroup.vue'

const toggleSwitches = [
  {
    modelValue: true,
    label: 'Premier élément du groupe',
  },
  {
    modelValue: false,
    label: 'Deuxième élément du groupe',
  },
  {
    modelValue: true,
    label: 'Troisième élément du groupe',
  },
]
</script>

<template>
  <div
    class="flex flex-col"
  >
    <div>
      <DsfrToggleSwitchGroup
        disabled
        :toggle-switches="toggleSwitches"
        legend="Légende pour l'ensemble des éléments du groupe"
        borders
        active-text="Oui"
        inactive-text="Non"
      />
    </div>
  </div>
</template>
