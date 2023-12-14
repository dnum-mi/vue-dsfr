<script lang="ts" setup>
import { ref } from 'vue'

import DsfrSegmented from '../DsfrSegmented.vue'
import DsfrSegmentedSet from '../DsfrSegmentedSet.vue'

const region = ref<string | number>('')
const viennoiserie = ref<string | number>('')

const options = [
  { label: 'Sud-ouest', value: 'Chocolatine' },
  { label: 'Ailleurs', value: 'Pain au chocolat' },
]
</script>

<template>
  <div class="fr-container">
    <div>
      <DsfrSegmentedSet
        name="region"
        label="Région"
        :options="options"
        @update:model-value="region = $event"
      />
    </div>

    <div
      v-if="region"
      class="fr-mt-4w"
    >
      <DsfrSegmentedSet
        name="viennoiserie"
        label="Viennoiserie"
      >
        <DsfrSegmented
          icon="fr-icon-moon-line"
          label="Croissant"
          value="croissant"
          :model-value="viennoiserie"
          @update:model-value="viennoiserie = $event"
        />
        <DsfrSegmented
          :label="region.toString()"
          value="chocolatine"
          :icon="{ name: 'gi-chocolate-bar' }"
          :model-value="viennoiserie"
          @update:model-value="viennoiserie = $event"
        />
      </DsfrSegmentedSet>
      <p>
        Vrai nom : {{ viennoiserie }}
      </p>
    </div>
  </div>
</template>
