<script lang="ts" setup>
import { inject, ref, toRef } from 'vue'
import VIcon from '../VIcon/VIcon.vue'

import { registerTabKey } from './injection-key'

export type DsfrTabItemProps = {
  panelId: string
  tabId: string
  icon?: string
}
const props = withDefaults(defineProps<DsfrTabItemProps>(), {
  icon: undefined,
})

const emit = defineEmits<{
  click: [tabId: string]
  next: []
  previous: []
  first: []
  last: []
}>()

const button = ref<HTMLButtonElement | null>(null)

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
