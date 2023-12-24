<script lang="ts" setup>
import { ref } from 'vue'

import DsfrRange from '../DsfrRange.vue'

const value = ref<number>(100)
const value2 = ref<number>(100)
const lowerValue = ref<number>(0)
</script>

<template>
  <div class="fr-container fr-py-4w">
    <div>
      <DsfrRange
        v-model="value"
        label="Label du curseur"
      />
    </div>
    <p>
      {{ value }}
    </p>
    <div>
      <DsfrRange
        v-model="value2"
        v-model:lower-value="lowerValue"
        label="Label du curseur"
      />
    </div>
    <p>
      {{ lowerValue }} - {{ value2 }}
    </p>
  </div>
</template>
