<script>
import { defineComponent } from 'vue'
import DsfrTag from './DsfrTag.vue'

export default defineComponent({
  name: 'DsfrTags',
  components: {
    DsfrTag,
  },
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<template>
  <ul class="fr-tags-group">
    <li
      v-for="({icon, iconRight, label, ...tagProps}, i) in tags"
      :key="i"
    >
      <DsfrTag
        v-bind="tagProps"
        :icon="icon"
        :icon-right="iconRight"
        :label="label"
      />
    </li>
  </ul>
</template>

<style src="./tags.css" />
