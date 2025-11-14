<script lang="ts" setup>
import type { DsfrTagProps } from '@gouvminint/vue-dsfr'

import { DsfrTag, DsfrTags } from '@gouvminint/vue-dsfr'
import { ref } from 'vue'

const tags = [
  {
    icon: 'fr-icon-ancient-pavilion-fill',
    label: 'Elément 1 de la liste de tags',
  },
  {
    icon: 'ri-notification-3-line',
    label: 'Elément 2 de la liste de tags',
  },
]

const tagSet: (DsfrTagProps)[] = [
  {
    icon: 'fr-icon-ancient-pavilion-fill',
    label: 'Les tags individuels',
    selectable: true,
    selected: true,
    value: 'individualTags',
  },
  {
    icon: 'ri-notification-3-line',
    label: 'Les ensembles de tags',
    selectable: true,
    value: 'tagSets',
  },
]

const loneTag = ref(false)

const filters = ref(['individualTags', 'tagSets'])
</script>

<template>
  <div class="fr-mt-2w">
    <DsfrTags
      v-model="filters"
      :tags="tagSet"
    />
  </div>
  <div
    v-show="filters.includes('individualTags')"
  >
    <DsfrTag label="Bonjour VueDsfr !" />
  </div>
  <div
    v-show="filters.includes('individualTags')"
    class="fr-mt-2w"
  >
    <DsfrTag
      label="Vue Power"
      icon="ri-notification-3-line"
    />
  </div>
  <div
    v-show="filters.includes('individualTags')"
    class="fr-mt-2w"
  >
    <DsfrTag
      label="Tag tout cliquable seul !"
      selectable
      :selected="loneTag"
      @select="loneTag = !loneTag"
    />
  </div>
  <div
    v-show="filters.includes('tagSets')"
    class="fr-mt-2w"
  >
    <DsfrTags :tags="tags" />
  </div>
</template>
