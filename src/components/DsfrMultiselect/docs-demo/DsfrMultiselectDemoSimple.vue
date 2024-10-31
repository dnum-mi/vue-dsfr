<script setup lang="ts">
import { ref } from 'vue'

import DsfrMultiselect from '../DsfrMultiselect.vue'

const options = [
  'Dupont',
  'Martin',
  'Durand',
  'Petit',
  'Lefevre',
]

const values = ref<string[]>([])
</script>

<template>
  <div class="flex flex-col">
    <div style="padding-left: 5rem; padding-right: 5rem">
      {{ values }}
      <DsfrMultiselect
        v-model="values"
        :options="options"
        search
        select-all
      />
    </div>
  </div>
</template>
