<script lang="ts" setup>
import { ref, watch } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import type { DsfrTabItemProps } from './DsfrTabs.types'

export type { DsfrTabItemProps }

const props = withDefaults(defineProps<DsfrTabItemProps>(), {
  icon: undefined,
})

const emit = defineEmits<{
  (e: 'click', payload: MouseEvent): void
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
  const key = event.key as keyof typeof keyToEventDict
  // @ts-expect-error 2769
  emit(keyToEventDict[key])
}
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
      :tabindex="selected ? 0 : -1"
      role="tab"
      type="button"
      :aria-selected="selected"
      :aria-controls="panelId"
      @click.prevent="$emit('click', $event)"
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
