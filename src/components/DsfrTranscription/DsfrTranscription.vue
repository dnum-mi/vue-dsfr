<script lang="ts" setup>
import { ref, computed, watch } from 'vue'

import { getRandomId } from '../../utils/random-utils'
import { useCollapsable } from '../../composables'

const props = withDefaults(defineProps<{
  id?: string
  title?: string
  content?: string
}>(), {
  id: () => getRandomId('transcription'),
  title: 'Titre de la vidéo',
  content: 'Transcription du contenu de la vidéo',
})

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const opened = ref(false)
const expanded = ref(false)

const modalId = computed(() => {
  return `fr-transcription__modal-${props.id}`
})
const collapseId = computed(() => {
  return `fr-transcription__collapse-${props.id}`
})

watch(expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})
</script>

<template>
  <div class="fr-transcription">
    <button
      class="fr-transcription__btn"
      :aria-expanded="expanded"
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
