<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'
import { useCollapsable } from '@/composables'

export default defineComponent({
  name: 'DsfrTranscription',
  props: {
    title: {
      type: String,
      default: 'Titre de la vidéo',
    },
    content: {
      type: String,
      default: 'Transcription du contenu de la vidéo',
    },
  },

  setup () {
    const {
      collapse,
      collapsing,
      cssExpanded,
      doExpand,
      adjust,
      onTransitionEnd,
    } = useCollapsable()

    return {
      collapse,
      collapsing,
      cssExpanded,
      doExpand,
      adjust,
      onTransitionEnd,
    }
  },

  data () {
    return {
      opened: false,
      expanded: false,
      id: getRandomId('transcription'),
    }
  },

  computed: {
    modalId () {
      return `fr-transcription__modal-${this.id}`
    },
    collapseId () {
      return `fr-transcription__collapse-${this.id}`
    },
  },

  watch: {
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
     */
    expanded (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.doExpand(newValue)
      }
    },
  },
})
</script>

<template>
  <div class="fr-transcription">
    <button
      class="fr-transcription__btn"
      :aria-expanded="String(expanded)"
      :aria-controls="collapseId"
      @click="expanded = !expanded"
    >
      Transcription
    </button>
    <div
      :id="collapseId"
      ref="collapse"
      class="fr-collapse"
      :class="{ 'fr-collapse--expanded': cssExpanded, 'fr-collapsing': collapsing }"
      @transitionend="onTransitionEnd(expanded)"
    >
      <dialog
        :id="modalId"
        class="fr-modal"
        role="dialog"
        :aria-labelledby="`${modalId}-title`"
      >
        <div class="fr-container fr-container--fluid fr-container-md">
          <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
              <div class="fr-modal__body">
                <div class="fr-modal__header">
                  <button
                    class="fr-btn--close fr-btn"
                    :aria-controls="modalId"
                    title="Fermer"
                  >
                    Fermer
                  </button>
                </div>
                <div class="fr-modal__content">
                  <h1
                    :id="`${modalId}-title`"
                    class="fr-modal__title"
                  >
                    {{ title }}
                  </h1>
                  {{ content }}
                </div>
                <div class="fr-transcription__footer">
                  <div class="fr-transcription__actions-group">
                    <button
                      class="fr-btn fr-btn--fullscreen"
                      :aria-controls="modalId"
                      data-fr-opened="false"
                      title=""
                      @click="opened = true"
                    >
                      Agrandir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
    <Teleport to="body">
      <DsfrModal
        :title="title"
        :opened="opened"
        @close="opened = false"
      >
        <slot>
          {{ content }}
        </slot>
      </DsfrModal>
    </Teleport>
  </div>
</template>
