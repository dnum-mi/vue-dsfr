<script>
import { defineComponent } from 'vue'

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
    collapseValue: {
      type: String,
      default: '-114px',
    },
  },

  data () {
    return {
      opened: false,
      expanded: false,
      collapsing: false,
    }
  },

  computed: {
    collapseStyle () {
      const baseStyle = {
        '--collapse': this.collapseValue,
      }
      if (this.expanded || this.collapsing) {
        baseStyle['--collapse-max-height'] = 'none'
      }
      return baseStyle
    },
  },
  watch: {
    expanded (isExpanded) {
      if (!isExpanded) {
        this.collapsing = true
        setTimeout(() => { this.collapsing = false }, 300)
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
      aria-controls="fr-transcription__collapse-transcription-1354"
      @click="expanded = !expanded"
    >
      Transcription
    </button>
    <div
      id="fr-transcription__collapse-transcription-1354"
      class="fr-collapse"
      :class="{ 'fr-collapse--expanded': expanded, 'fr-collapsing': collapsing }"
      :style="collapseStyle"
    >
      <dialog
        id="fr-transcription__modal-transcription-1354"
        class="fr-modal"
        role="dialog"
        aria-labelledby="fr-transcription__modal-transcription-1354-title"
      >
        <div class="fr-container fr-container--fluid fr-container-md">
          <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
              <div class="fr-modal__body">
                <div class="fr-modal__header">
                  <button
                    class="fr-btn--close fr-btn"
                    aria-controls="fr-transcription__modal-transcription-1354"
                    title="Fermer"
                  >
                    Fermer
                  </button>
                </div>
                <div class="fr-modal__content">
                  <h1
                    id="fr-transcription__modal-transcription-1354-title"
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
                      aria-controls="fr-transcription__modal-transcription-1354"
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
