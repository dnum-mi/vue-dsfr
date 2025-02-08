<script lang="ts" setup>
import DsfrTag from './DsfrTag.vue'
import type { DsfrTagsProps } from './DsfrTags.types'

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
    const newValue = new Set([...props.modelValue])
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
      v-for="({ icon, label, ...tagProps }, i) in tags"
      :key="i"
    >
      <DsfrTag
        v-bind="tagProps"
        :icon="icon"
        :label="label"
        :selectable="tagProps.selectable"
        :selected="tagProps.selectable ? modelValue?.includes(tagProps.value as string) : undefined"
        @select="onSelect($event as [string, boolean])"
      />
    </li>
  </ul>
</template>
