<script lang="ts" setup>
import { ref } from 'vue'
import DsfrRadioButtonSet from '../../DsfrRadioButton/DsfrRadioButtonSet.vue'
import DsfrFieldset from '../DsfrFieldset.vue'

const options = [
  { label: 'Godzilla', value: 'G' },
  { label: 'La créature de Frankenstein', value: 'F' },
  { label: 'King Kong', value: 'K' },
  { label: 'Le xénomorphe', value: 'X' },
  { label: 'Le prédator', value: 'P' },
  { label: 'Dracula', value: 'D' },
]

const choice = ref('')
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrFieldset>
      <template #legend>
        Quel est votre monstre préféré du cinéma ?
      </template>
      <template #hint>
        Si le vôtre n'est pas cité ici, toutes mes excuses !
      </template>
      <DsfrRadioButtonSet
        :options="options"
        :model-value="choice"
      />
    </DsfrFieldset>
  </div>
</template>
