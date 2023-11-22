<script lang="ts" setup>
import { ref, watch } from 'vue'

export type DsfrTabItemProps = {
  panelId: string
  tabId: string
  selected?: boolean
  icon?: string
}

const props = withDefaults(defineProps<DsfrTabItemProps>(), {
  icon: undefined,
})

// eslint-disable-next-line func-call-spacing
defineEmits<{
  (e: 'click', payload: MouseEvent): void,
  (e: 'next'): void,
  (e: 'previous'): void,
  (e: 'first'): void,
  (e: 'last'): void,
}>()

const button = ref<HTMLButtonElement | null>(null)

watch(() => props.selected, (newValue) => {
  if (newValue) {
    button.value?.focus()
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
      type="button"
      :aria-selected="selected"
      :aria-controls="panelId"
      @click.prevent="$emit('click', $event)"
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
