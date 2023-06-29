<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  panelId: string
  tabId: string
  selected?: boolean
  icon?: string
}>(), {
  icon: undefined,
})

// eslint-disable-next-line func-call-spacing
defineEmits<{
  (e: 'click', payload: string): void,
  (e: 'next', payload: string): void,
  (e: 'previous', payload: string): void,
  (e: 'first', payload: string): void,
  (e: 'last', payload: string): void,
}>()

const button = ref(null)

watch(() => props.selected, (newValue) => {
  if (newValue) {
    button.value.focus()
  }
})
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
      :aria-selected="selected"
      :aria-controls="panelId"
      @click="$emit('click', $event)"
      @keydown.right="$emit('next')"
      @keydown.left="$emit('previous')"
      @keydown.down="$emit('next')"
      @keydown.up="$emit('previous')"
      @keydown.home="$emit('first')"
      @keydown.end="$emit('last')"
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
