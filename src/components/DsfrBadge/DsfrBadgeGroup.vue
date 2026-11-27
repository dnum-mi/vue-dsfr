<script lang="ts" setup>
import type { DsfrBadgeGroupProps } from './DsfrBadgeGroup.types'

import DsfrBadge from './DsfrBadge.vue'

withDefaults(defineProps<DsfrBadgeGroupProps>(), {
  badges: () => [],
})
</script>

<template>
  <ul class="fr-badges-group">
    <li
      v-for="(badge, i) in badges"
      :key="i"
    >
      <DsfrBadge
        v-bind="badge"
        tag-name="span"
      />
    </li>
  </ul>
</template>
