<script lang="ts" setup>
import { getRandomId } from '../../utils/random-utils'

import type { DsfrSegmentedProps } from './DsfrSegmented.types'
import { computed } from 'vue'

export type { DsfrSegmentedProps }

const props = withDefaults(defineProps<DsfrSegmentedProps>(), {
  id: () => getRandomId('basic', 'checkbox'),
  modelValue: '',
  label: '',
  hint: '',
  icon: undefined,
})

defineEmits<{(e: 'update:modelValue', payload: string | number): void}>()

const iconProps = computed(() => typeof props.icon === 'string' ? { name: props.icon } : props.icon)
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
    >
      <VIcon
        v-if="icon"
        v-bind="iconProps"
      />
      <span v-if="icon">&nbsp;</span>
      {{ label }}
    </label>
  </div>
</template>
