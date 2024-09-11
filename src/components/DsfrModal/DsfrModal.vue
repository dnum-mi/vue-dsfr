<script lang="ts" setup>
import { getRandomId } from '@/utils/random-utils'
import { FocusTrap } from 'focus-trap-vue'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import DsfrButtonGroup from '../DsfrButton/DsfrButtonGroup.vue'
import VIcon from '../VIcon/VIcon.vue'

import type { DsfrModalProps } from './DsfrModal.types'

export type { DsfrModalProps }

const props = withDefaults(defineProps<DsfrModalProps>(), {
  modalId: () => getRandomId('modal', 'dialog'),
  actions: () => [],
  origin: () => ({ focus () {} }),
  icon: undefined,
  size: 'md',
  closeButtonLabel: 'Fermer',
  closeButtonTitle: 'Fermer la fenêtre modale',
})

const emit = defineEmits<{ (e: 'close'): void }>()

const closeIfEscape = ($event: KeyboardEvent) => {
  if ($event.key === 'Escape') {
    close()
  }
}

const role = computed(() => {
  return props.isAlert ? 'alertdialog' : 'dialog'
})

const closeBtn = ref<HTMLButtonElement | null>(null)
const modal = ref()
watch(() => props.opened, (newValue) => {
  if (newValue) {
    modal.value?.showModal()
    setTimeout(() => {
      closeBtn.value?.focus()
    }, 100)
  } else {
    modal.value?.close()
  }
  setAppropriateClassOnBody(newValue)
})

function setAppropriateClassOnBody (on: boolean) {
  if (typeof window !== 'undefined') {
    document.body.classList.toggle('modal-open', on)
  }
}

onMounted(() => {
  startListeningToEscape()
  setAppropriateClassOnBody(props.opened)
})

onBeforeUnmount(() => {
  stopListeningToEscape()
  setAppropriateClassOnBody(false)
})

function startListeningToEscape () {
  document.addEventListener('keydown', closeIfEscape)
}

function stopListeningToEscape () {
  document.removeEventListener('keydown', closeIfEscape)
}

async function close () {
  await nextTick()
  props.origin?.focus()
  emit('close')
}

const dsfrIcon = computed(() => typeof props.icon === 'string' && props.icon.startsWith('fr-icon-'))
const defaultScale = 2
const iconProps = computed(() => dsfrIcon.value
  ? undefined
  : typeof props.icon === 'string'
    ? { name: props.icon, scale: defaultScale }
    : { scale: defaultScale, ...(props.icon ?? {}) },
)
</script>

<template>
  <FocusTrap
    v-if="opened"
  >
    <dialog
      id="fr-modal-1"
      ref="modal"
      :aria-labelledby="modalId"
      :role="role"
      class="fr-modal"
      :class="{ 'fr-modal--opened': opened }"
      :open="opened"
    >
      <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
          <div
            class="fr-col-12"
            :class="{
              'fr-col-md-8': size === 'lg',
              'fr-col-md-6': size === 'md',
              'fr-col-md-4': size === 'sm',
            }"
          >
            <div class="fr-modal__body">
              <div class="fr-modal__header">
                <button
                  ref="closeBtn"
                  class="fr-btn fr-btn--close"
                  :title="closeButtonTitle"
                  aria-controls="fr-modal-1"
                  type="button"
                  @click="close()"
                >
                  <span>
                    {{ closeButtonLabel }}
                  </span>
                </button>
              </div>
              <div class="fr-modal__content">
                <h1
                  :id="modalId"
                  class="fr-modal__title"
                >
                  <span
                    v-if="dsfrIcon || iconProps"
                    :class="{
                      [String(icon)]: dsfrIcon,
                    }"
                  >
                    <VIcon
                      v-if="icon && iconProps"
                      v-bind="iconProps"
                    />
                  </span>
                  {{ title }}
                </h1>
                <!-- @slot Slot par défaut pour le contenu de la liste. Sera dans `<ul class="fr-modal__title">` -->
                <slot />
              </div>
              <div
                v-if="actions?.length || $slots.footer"
                class="fr-modal__footer"
              >
                <!-- @slot Slot pour le pied-de-page de la modale `<ul class="fr-modal__footer">` -->
                <slot name="footer" />
                <DsfrButtonGroup
                  v-if="actions?.length"
                  align="right"
                  :buttons="actions"
                  inline-layout-when="large"
                  reverse
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  </FocusTrap>
</template>

<style scoped>
.fr-modal {
  color: var(--text-default-grey);
}
:global(body.modal-open) {
  overflow: hidden;
}
</style>
