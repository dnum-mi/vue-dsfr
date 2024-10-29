<script setup lang="ts">
import { computed, ref } from 'vue'
import DsfrMultiselect from '../DsfrMultiselect.vue'

const options = [
  {
    nom: 'Dupont',
    prenom: 'Marie',
    age: 28,
  },
  {
    nom: 'Martin',
    prenom: 'Paul',
    age: 34,
  },
  {
    nom: 'Durand',
    prenom: 'Lucie',
    age: 22,
  },
  {
    nom: 'Petit',
    prenom: 'Julien',
    age: 45,
  },
  {
    nom: 'Lefevre',
    prenom: 'Elise',
    age: 30,
  },
]

const values = ref<string[]>([])

const buttonLabel = computed(() => {
  const nbElements = values.value.length
  if (nbElements === 0) {
    return '0 option'
  }
  return `${nbElements} option${nbElements > 1 ? 's' : ''}`
})

const errorMessage = computed(() => values.value.length ? '' : 'Érreur')
</script>

<template>
  <div class="flex flex-col">
    <div style="padding-left: 5rem; padding-right: 5rem">
      {{ values }}
      <DsfrMultiselect
        v-model="values"
        :options="options"
        :button-label="buttonLabel"
        legend="DsfrMultiselect"
        search
        select-all
        :error-message="errorMessage"
        id-key="nom"
        :filtering-keys="['nom', 'prenom']"
      >
        <template #label>
          DsfrMultiselect exemple
        </template>
        <template #checkbox-label="{ option }">
          {{ option.nom }} - {{ option.prenom }} {{ option.age }}
        </template>
      </DsfrMultiselect>
    </div>
  </div>
</template>
