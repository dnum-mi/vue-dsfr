<script lang="ts" setup>
import { ref } from 'vue'

import DsfrRadioButtonSet from '../DsfrRadioButtonSet.vue'
import DsfrRadioButton from '../DsfrRadioButton.vue'

const modelValue1 = ref()
const options = [
  {
    label: 'Première valeur',
    id: 'name1-1',
    value: 'name1-1',
    hint: 'Description de la première valeur',
  },
  {
    label: 'Deuxième valeur',
    id: 'name1-2',
    value: 'name1-2',
    hint: 'Description de la deuxième valeur',
  },
  {
    label: 'Troisième valeur',
    id: 'name1-3',
    value: 'name1-3',
    hint: 'Description de la troisième valeur',
  },
]
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrRadioButtonSet>
      <DsfrRadioButton
        v-for="option of options"
        :key="option.id"
        v-model="modelValue1"
        name="name-1"
        v-bind="option"
      />
    </DsfrRadioButtonSet>
    <p>
      modelValue1: {{ modelValue1 }}
    </p>
  </div>
</template>
