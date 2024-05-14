<script lang="ts" setup>
import DsfrTag from './DsfrTag.vue'

import type { DsfrTagsProps } from './DsfrTags.types'

export type { DsfrTagsProps }

withDefaults(defineProps<DsfrTagsProps>(), {
  tags: () => [],
})
</script>

<template>
  <ul class="fr-tags-group">
    <li
      v-for="({ icon, label, ...tagProps }, i) in tags"
      :key="i"
    >
      <DsfrTag
        v-bind="tagProps"
        :icon="icon"
        :label="label"
      />
    </li>
  </ul>
</template>
