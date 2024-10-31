<script lang="ts" setup>
import { ref } from 'vue'

import DsfrCheckboxSet from '@/components/DsfrCheckbox/DsfrCheckboxSet.vue'
import type { DsfrCheckboxSetProps } from '@/components/DsfrCheckbox/DsfrCheckbox.types'

const selectedCheckboxes = ref([])
const cbLegend = 'Légende des cases à cocher'
const cbOptions: DsfrCheckboxSetProps['options'] = [
  {
    value: 'une chaîne',
    modelValue: 'test1',
    label: 'Test 1',
  },
  {
    value: 42,
    modelValue: 'test2',
    label: 'Test 2',
  },
  {
    value: { objet: 'complexe' },
    modelValue: 'test3',
    label: 'Test 3',
  },
]
</script>

<template>
  <form>
    <DsfrCheckboxSet
      v-model="selectedCheckboxes"
      :legend="cbLegend"
      :options="cbOptions"
    />
    <p>
      Sélectionné(s) : {{ selectedCheckboxes }}
    </p>
    <input
      type="submit"
      class="fr-btn"
    >
  </form>
</template>
