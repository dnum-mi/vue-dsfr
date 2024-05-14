<script setup lang="ts">
import { computed } from 'vue'

import type { DsfrTabContentProps } from './DsfrTabs.types'

export type { DsfrTabContentProps }

const props = defineProps<DsfrTabContentProps>()

const values = { true: '100%', false: '-100%' }
// @ts-expect-error this will be fine
const translateValueFrom = computed(() => values[String(props.asc)])
// @ts-expect-error this will be fine
const translateValueTo = computed(() => values[String(!props.asc)])
</script>

<template>
  <Transition
    name="slide-fade"
    mode="in-out"
  >
    <div
      v-show="selected"
      :id="panelId"
      class="fr-tabs__panel"
      :class="{
        'fr-tabs__panel--selected': selected,
      }"
      role="tabpanel"
      :aria-labelledby="tabId"
      :tabindex="selected ? 0 : -1"
    >
      <!-- @slot Slot par défaut pour le contenu de l’onglet. Sera dans `<div class="fr-tabs__panel">` -->
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
