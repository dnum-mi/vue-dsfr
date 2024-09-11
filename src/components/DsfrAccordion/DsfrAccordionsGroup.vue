<script setup lang="ts">
import { computed, onUnmounted, provide, ref, type Ref, watch } from 'vue'

import { registerTabKey } from './injection-key'

const props = withDefaults(defineProps<{
  modelValue: number
}>(), {
  modelValue: -1,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const activeAccordion = computed({
  get: () => props.modelValue,
  set (accordionId: number) {
    emit('update:modelValue', accordionId)
  },
})
const accordions = ref(new Map<number, string>())
const currentId = ref(0)
provide(registerTabKey, (title: Ref<string>) => {
  const myIndex = currentId.value++
  accordions.value.set(myIndex, title.value)

  const isActive = computed(() => myIndex === activeAccordion.value)

  watch(title, () => {
    accordions.value.set(myIndex, title.value)
  })

  function expand (): void {
    if (activeAccordion.value === myIndex) {
      activeAccordion.value = -1
      return
    }
    activeAccordion.value = myIndex
  }

  onUnmounted(() => {
    accordions.value.delete(myIndex)
  })

  return { isActive, expand }
})
</script>

<template>
  <div
    class="fr-accordions-group"
  >
    <!-- @slot Slot par défaut pour le contenu de la liste. Sera dans `<div class="fr-accordions-group">` -->
    <slot />
  </div>
</template>
