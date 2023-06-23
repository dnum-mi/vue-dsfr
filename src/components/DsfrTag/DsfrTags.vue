<script lang="ts" setup>
import DsfrTag, { type DsfrTagProps } from './DsfrTag.vue'

withDefaults(defineProps<{tags: DsfrTagProps[]}>(), {
  tags: () => [],
})
</script>

<template>
  <ul class="fr-tags-group">
    <li
      v-for="({icon, label, ...tagProps}, i) in tags"
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
