<script lang="ts" setup>
import { inject, ref, toRef, watch } from 'vue'
import VIcon from '../VIcon/VIcon.vue'

import type { DsfrTabItemProps } from './DsfrTabs.types'
import { registerTabKey } from './injection-key'

export type { DsfrTabItemProps }

const props = withDefaults(defineProps<DsfrTabItemProps>(), {
  icon: undefined,
})

const emit = defineEmits<{
  (e: 'click', tabId: string): void
  (e: 'next'): void
  (e: 'previous'): void
  (e: 'first'): void
  (e: 'last'): void
}>()

const button = ref<HTMLButtonElement | null>(null)

watch(() => props.selected, (newValue) => {
  if (newValue) {
    button.value?.focus()
  }
})

const keyToEventDict = {
  ArrowRight: 'next',
  ArrowLeft: 'previous',
  ArrowDown: 'next',
  ArrowUp: 'previous',
  Home: 'first',
  End: 'last',
} as const

function onKeyDown (event: KeyboardEvent) {
  const key = event?.key as keyof typeof keyToEventDict
  const eventToEmit = keyToEventDict[key]
  if (eventToEmit) {
    // @ts-expect-error 2769
    emit(eventToEmit)
  }
}

const useTab = inject(registerTabKey)!
const { isVisible } = useTab(toRef(() => props.tabId))
</script>

<template>
  <li
    role="presentation"
  >
    <button
      :id="tabId"
      ref="button"
      :data-testid="`test-${tabId}`"
      class="fr-tabs__tab"
      :tabindex="isVisible ? 0 : -1"
      role="tab"
      type="button"
      :aria-selected="isVisible"
      :aria-controls="panelId"
      @click.prevent="$emit('click', tabId)"
      @keydown="onKeyDown($event)"
    >
      <span
        v-if="icon"
        style="margin-left: -0.25rem; margin-right: 0.5rem; font-size: 0.95rem;"
      >
        <VIcon
          :name="icon"
        />
      </span>
      <!-- @slot Slot par défaut pour le contenu de l’onglet. Sera dans `<button class="fr-tabs__tab">` -->
      <slot />
    </button>
  </li>
</template>
