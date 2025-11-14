<script lang="ts" setup>
import { inject, ref, toRef, useTemplateRef, watch } from 'vue'

import VIcon from '../VIcon/VIcon.vue'

import { registerTabKey } from './injection-key'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DsfrTabItemProps>(), {
  icon: undefined,
})

const emit = defineEmits<{
  /** Émis au clic sur le titre de l'onglet. Passe en argument l'événement natif 'click' (dans lequel on peut récuperer l'élément dans la propriété `target` et l'id dans `target.id`) */
  click: [tabId: string]
  /** Émis à la pression sur la touche Flèche droite ou Flèche bas si le focus est sur le bouton de ce titre d'onglet */
  next: []
  /** Émis à la pression sur la touche Flèche gauche ou Flèche haut si le focus est sur le bouton de ce titre d'onglet */
  previous: []
  /** Émis à la pression sur la touche `Début` (`Home`) si le focus est sur le bouton de ce titre d'onglet */
  first: []
  /** Émis à la pression sur la touche `End` (`Fin`) si le focus est sur le bouton de ce titre d'onglet */
  last: []
}>()

defineSlots<{
  /** Slot par défaut pour le contenu de l’onglet. Sera dans `<button class="fr-tabs__tab">` */
  default?: () => any
}>()

export type DsfrTabItemProps = {
  panelId: string
  tabId: string
  icon?: string
}

const button = ref<HTMLButtonElement | null>(null)

const keyToEventDict = {
  ArrowRight: 'next',
  ArrowLeft: 'previous',
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

const buttonEl = useTemplateRef('button')

watch(isVisible, () => {
  if (isVisible.value) {
    buttonEl.value?.focus()
  }
})
</script>

<template>
  <li
    role="presentation"
  >
    <button
      v-bind="$attrs"
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
      <slot />
    </button>
  </li>
</template>
