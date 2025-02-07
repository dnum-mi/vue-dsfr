<script lang="ts" setup>
import { computed, ref } from 'vue'

import type { DsfrTagProps } from '@/components/DsfrTag/DsfrTags.types.ts'
import DsfrTags from '@/components/DsfrTag/DsfrTags.vue'

const tagSet: (DsfrTagProps)[] = [
  {
    label: 'Les fruits',
    selectable: true,
    selected: true,
    value: 'fruit',
  },
  {
    label: 'Les légumes',
    selectable: true,
    value: 'legume',
  },
]

type FruitOrVegetable = 'fruit' | 'legume'

const items: { name: string, type: FruitOrVegetable }[] = [
  {
    name: 'Banane',
    type: 'fruit',
  },
  {
    name: 'Pomme',
    type: 'fruit',
  },
  {
    name: 'Poire',
    type: 'fruit',
  },
  {
    name: 'Courgette',
    type: 'legume',
  },
  {
    name: 'Poivron',
    type: 'legume',
  },
  {
    name: 'Navet',
    type: 'legume',
  },
]

const filters = ref<FruitOrVegetable[]>(['fruit', 'legume'])

const filteredItems = computed(() =>
  items // Get all items
    .filter(item => filters.value.includes(item.type)) // Filter according to filters
    .sort((a, b) => a.name > b.name ? 1 : -1), // Sort alphabetically
)
</script>

<template>
  <div class="max-w-90">
    <div class="fr-mt-2w">
      <DsfrTags
        v-model="filters"
        :tags="tagSet"
      />
    </div>
    <ul>
      <li
        v-for="item of filteredItems"
        :key="item.name"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.max-w-90 {
  max-width: 90%;
}
</style>
