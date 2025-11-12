<script lang="ts" setup>
import type { DsfrTagsProps } from './DsfrTags.types'

import DsfrTag from './DsfrTag.vue'

const props = withDefaults(defineProps<DsfrTagsProps>(), {
  tags: () => [],
})

const emit = defineEmits<{
  'update:modelValue': [unknown[]]
}>()

function onSelect ([value, selected]: [unknown, boolean]) {
  if (typeof props.modelValue === 'undefined') {
    return
  }
  const currentValue = props.modelValue || []
  if (selected) {
    // Retirer la valeur
    const newValue = currentValue.filter(v => v !== value)
    emit('update:modelValue', newValue)
    return
  }
  // Ajouter la valeur si elle n'est pas déjà présente
  // eslint-disable-next-line unicorn/prefer-includes
  const alreadyExists = currentValue.some(v => v === value)
  if (!alreadyExists) {
    const newValue = [...currentValue, value]
    emit('update:modelValue', newValue)
  }
}
</script>

<template>
  <ul class="fr-tags-group">
    <li
      v-for="(tag, i) in tags"
      :key="i"
    >
      <DsfrTag
        v-if="tag.selectable"
        :label="tag.label"
        :link="tag.link"
        :tag-name="tag.tagName"
        :icon="tag.icon"
        :disabled="tag.disabled"
        :small="tag.small"
        :icon-only="tag.iconOnly"
        :selectable="true"
        :selected="modelValue?.includes(tag.value) || false"
        :value="tag.value"
        @select="onSelect($event as [unknown, boolean])"
      />
      <DsfrTag
        v-else
        :label="tag.label"
        :link="tag.link"
        :tag-name="tag.tagName"
        :icon="tag.icon"
        :disabled="tag.disabled"
        :small="tag.small"
        :icon-only="tag.iconOnly"
      />
    </li>
  </ul>
</template>
