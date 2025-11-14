<script setup lang="ts">
import { computed, inject, toRef } from 'vue'

import { registerTabKey } from './injection-key'

export type DsfrTabContentProps = {
  panelId: string
  tabId: string
}
const props = defineProps<DsfrTabContentProps>()

defineSlots<{
  /**
   * Slot par défaut pour le contenu de l’onglet. Sera dans `<div class="fr-tabs__panel">`
   */
  default?: () => any
}>()

const values = { true: '100%', false: '-100%' }
const useTab = inject(registerTabKey)!
const { isVisible, asc } = useTab(toRef(() => props.tabId))
// @ts-expect-error this will be fine
const translateValueFrom = computed(() => values[String(asc?.value)])
// @ts-expect-error this will be fine
const translateValueTo = computed(() => values[String(!asc?.value)])
</script>

<template>
  <Transition
    name="slide-fade"
    mode="in-out"
  >
    <div
      v-show="isVisible"
      :id="panelId"
      class="fr-tabs__panel"
      :class="{
        'fr-tabs__panel--selected': isVisible,
      }"
      role="tabpanel"
      :aria-labelledby="tabId"
      :tabindex="isVisible ? 0 : -1"
    >
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(v-bind(translateValueFrom));
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(v-bind(translateValueTo));
  opacity: 0;
}
</style>
