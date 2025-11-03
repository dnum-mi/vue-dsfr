<script lang="ts" setup>
import type { DsfrTagsProps } from './DsfrTags.types'

import DsfrTag from './DsfrTag.vue'

export type { DsfrTagsProps }

const props = withDefaults(defineProps<DsfrTagsProps>(), {
  tags: () => [],
})

const emit = defineEmits<{
  'update:modelValue': [unknown[]]
}>()

function onSelect ([value, selected]: [string, boolean]) {
  if (typeof props.modelValue === 'undefined') {
    return
  }
  if (selected) {
    const newValue = new Set(props.modelValue)
    newValue.delete(value)
    emit('update:modelValue', [...newValue])
    return
  }
  const newValue = [...new Set([...props.modelValue, value])]
  emit('update:modelValue', newValue)
}
</script>

<template>
  <ul class="fr-tags-group">
    <li
      v-for="(tag, i) in tags"
      :key="i"
    >
      <DsfrTag
        :label="tag.label"
        :link="tag.link"
        :tag-name="tag.tagName"
        :icon="tag.icon"
        :disabled="tag.disabled"
        :small="tag.small"
        :icon-only="tag.iconOnly"
        :selectable="tag.selectable"
        :selected="tag.selectable ? modelValue?.includes(tag.value as string) : undefined"
        :value="tag.selectable ? tag.value : undefined"
        @select="onSelect($event as [string, boolean])"
      />
    </li>
  </ul>
</template>
