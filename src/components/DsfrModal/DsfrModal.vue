<script>
import { FocusTrap } from 'focus-trap-vue'

import DsfrButtonGroup from '../DsfrButton/DsfrButtonGroup.vue'

export default {
  name: 'DsfrModal',

  components: {
    DsfrButtonGroup,
    FocusTrap,
  },

  props: {
    opened: Boolean,
    actions: {
      type: Array,
      default: () => [],
    },
    isAlert: Boolean,
    origin: {
      type: Object,
      default: () => ({ focus () {} }),
    },
    title: {
      type: String,
      required: true,
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
      isTrapActive: this.opened,
    }
  },

  computed: {
    role () {
      return this.isAlert ? 'alertdialog' : 'dialog'
    },
  },

  watch: {
    opened (newValue, oldValue) {
      if (newValue) {
        setTimeout(() => {
          this.isTrapActive = newValue
          this.$refs.closeBtn.focus()
        }, 100)
        return
      }

      if (this.isTrapActive) {
        this.close()
      }
    },
  },

  mounted () {
    this.startListeningToEscape()
  },

  beforeUnmount () {
    this.stopListeningToEscape()
  },

  methods: {
    startListeningToEscape () {
      document.addEventListener('keydown', this.closeIfEscape)
    },

    stopListeningToEscape () {
      document.removeEventListener('keydown', this.closeIfEscape)
    },

    async close () {
      this.isTrapActive = false
      await this.$nextTick()
      this.origin.focus()
      this.$emit('close')
    },
  },
}
</script>

<template>
  <focus-trap
    v-if="opened"
    v-model:active="isTrapActive"
  >
    <div
      id="fr-modal-1"
      aria-labelledby="fr-modal-title-modal-1"
      :role="role"
      class="fr-modal"
      :class="{'fr-modal--opened': opened}"
    >
      <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
          <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
            <div class="fr-modal__body">
              <div class="fr-modal__header">
                <button
                  ref="closeBtn"
                  class="fr-link--close fr-link"
                  title="Fermer la fenêtre modale"
                  aria-controls="fr-modal-1"
                  tabindex="0"
                  @click="close()"
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
                <h1
                  id="fr-modal-title-modal-1"
                  class="fr-modal__title"
                >
                  <VIcon
                    scale="1.5"
                    name="ri-arrow-right-line"
                    style="vertical-align: -0.125em"
                  />
                  {{ title }}
                </h1>
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
    </div>
  </focus-trap>
</template>

<style src="./modal.css" />
