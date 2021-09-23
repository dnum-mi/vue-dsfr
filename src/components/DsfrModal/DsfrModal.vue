<script>
import DsfrButtonGroup from '../DsfrButton/DsfrButtonGroup.vue'

export default {
  name: 'DsfrModal',

  components: {
    DsfrButtonGroup,
  },

  props: {
    opened: Boolean,
    actions: {
      type: Array,
      default: () => [],
    },
  },

  emits: [
    'close',
  ],

  data () {
    return {
      closeIfEscape: ($event) => {
        if ($event.key === 'Escape') {
          this.close()
        }
      },
    }
  },

  mounted () {
    this.startListeningToEscape()
  },

  beforeUnmount () {
    this.startListeningToEscape()
  },

  methods: {
    startListeningToEscape () {
      document.addEventListener('keydown', this.closeIfEscape)
    },

    stopListeningToEscape () {
      document.removeEventListener('keydown', this.closeIfEscape)
    },

    close () {
      this.$emit('close')
    },
  },
}
</script>

<template>
  <dialog
    id="fr-modal-1"
    aria-labelledby="fr-modal-title-modal-1"
    role="dialog"
    class="fr-modal"
    :class="{'fr-modal--opened': opened}"
  >
    <div class="fr-container fr-container--fluid fr-container-md">
      <div class="fr-grid-row fr-grid-row--center">
        <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
          <div class="fr-modal__body">
            <div class="fr-modal__header">
              <button
                class="fr-link--close fr-link"
                title="Fermer la fenêtre modale"
                aria-controls="fr-modal-1"
                @click="close"
              >
                <VIcon
                  scale="0.85"
                  :style="{ top: '0.05em', position: 'relative' }"
                  name="ri-close-line"
                />
                <span>
                  Fermer
                </span>
              </button>
            </div>
            <div class="fr-modal__content">
              <slot />
            </div>
            <div
              v-if="actions && actions.length"
              class="fr-modal__footer"
            >
              <DsfrButtonGroup
                align="right"
                :buttons="actions"
                inline
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<style src="./modal.css" />
