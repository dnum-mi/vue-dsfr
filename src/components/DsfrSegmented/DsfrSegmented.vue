<script lang="ts" setup>
import { computed } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import { getRandomId } from '../../utils/random-utils'

import type { DsfrSegmentedProps } from './DsfrSegmented.types'

export type { DsfrSegmentedProps }

const props = withDefaults(defineProps<DsfrSegmentedProps>(), {
  id: () => getRandomId('basic', 'checkbox'),
  hint: '',
  icon: undefined,
  label: '',
  modelValue: '',
  name: undefined,
})

defineEmits<{(e: 'update:modelValue', payload: string | number): void}>()

const iconProps = computed(() => typeof props.icon === 'string' ? { name: props.icon } : props.icon)

const dsfrIcon = computed(() => {
  return props.icon && typeof props.icon === 'string' && props.icon.startsWith('fr-') ? props.icon : ''
})
</script>

<template>
  <div
    class="fr-segmented__element"
  >
    <input
      :id="id"
      type="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      v-bind="$attrs"
      @click="$emit('update:modelValue', value)"
    >
    <label
      :for="id"
      class="fr-label"
      :class="{ [dsfrIcon]: dsfrIcon }"
    >
      <VIcon
        v-if="icon && !dsfrIcon"
        v-bind="iconProps"
      />
      <span v-if="icon">&nbsp;</span>
      {{ label }}
    </label>
  </div>
</template>
