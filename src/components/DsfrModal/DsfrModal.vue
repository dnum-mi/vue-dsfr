<script lang="ts" setup>
import { FocusTrap } from 'focus-trap-vue'

import DsfrButtonGroup from '../DsfrButton/DsfrButtonGroup.vue'
import { onMounted, onBeforeUnmount, computed, ref, nextTick, watch } from 'vue'
import { getRandomId } from '@/utils/random-utils'

import type { DsfrModalProps } from './DsfrModal.types'

export type { DsfrModalProps }

const props = withDefaults(defineProps<DsfrModalProps>(), {
  modalId: () => getRandomId('modal', 'dialog'),
  actions: () => [],
  origin: () => ({ focus () {} }), // eslint-disable-line @typescript-eslint/no-empty-function
  icon: undefined,
  size: 'md',
})

const emit = defineEmits<{(e: 'close'): void}>()

const closeIfEscape = ($event: KeyboardEvent) => {
  if ($event.key === 'Escape') {
    close()
  }
}

const role = computed(() => {
  return props.isAlert ? 'alertdialog' : 'dialog'
})

const closeBtn = ref<HTMLButtonElement | null>(null)
watch(() => props.opened, (newValue) => {
  if (newValue) {
    document.body.classList.add('modal-open')
    modal.value?.showModal()
    setTimeout(() => {
      closeBtn.value?.focus()
    }, 100)
  } else {
    document.body.classList.remove('modal-open')
    modal.value?.close()
  }
})

const modal = ref()

onMounted(() => {
  startListeningToEscape()
})

onBeforeUnmount(() => {
  stopListeningToEscape()
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
</script>

<template>
  <focus-trap
    v-if="opened"
  >
    <dialog
      id="fr-modal-1"
      ref="modal"
      :aria-labelledby="modalId"
      :role="role"
      class="fr-modal"
      :class="{'fr-modal--opened': opened}"
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
                  title="Fermer la fenêtre modale"
                  aria-controls="fr-modal-1"
                  type="button"
                  @click="close()"
                >
                  <span>
                    Fermer
                  </span>
                </button>
              </div>
              <div class="fr-modal__content">
                <h1
                  :id="modalId"
                  class="fr-modal__title"
                >
                  <span
                    v-if="icon"
                  >
                    <VIcon
                      :name="icon"
                      scale="2"
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
  </focus-trap>
</template>

<style scoped>
.fr-modal {
  color: var(--text-default-grey);
}
</style>

<style>
body.modal-open {
  overflow: hidden;
}
</style>
