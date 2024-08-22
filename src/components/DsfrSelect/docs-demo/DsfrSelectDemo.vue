<script lang="ts" setup>
import { ref } from 'vue'

import DsfrSelect from '../DsfrSelect.vue'

const selectedOption1 = ref(0)
const selectedOption2 = ref(null)
const selectedOption3 = ref('')
</script>

<template>
  <div
    class="flex flex-col"
  >
    <DsfrSelect
      v-model.number="selectedOption1"
      label="Label du select"
      :options="[1, 2, 3, 4, 5]"
    />
    Select 1 : {{ selectedOption1 }} ({{ typeof selectedOption1 }})
    <DsfrSelect
      v-model="selectedOption2"
      label="Label du select 1"
      description="Description du select"
      :options="['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5']"
    />
    Select 2 : {{ selectedOption2 }} ({{ typeof selectedOption2 }})
    <DsfrSelect
      v-model="selectedOption3"
      label="Label du select 3"
      border-bottom
      required
      :options="[
        { value: 'Value 1', text: 'Text 1' },
        { value: 'Value 2', text: 'Text 2' },
        { value: 'Value 3', text: 'Text 3' },
        { value: 'Value 4', text: 'Text 4' },
        { value: 'Value 5', text: 'Text 5' },
      ]"
    />
    Select 3 : {{ selectedOption3 }} ({{ typeof selectedOption3 }})
  </div>
</template>
