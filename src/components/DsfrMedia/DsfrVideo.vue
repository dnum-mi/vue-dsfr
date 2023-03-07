<script>
import { defineComponent } from 'vue'
import DsfrTranscription from '../DsfrTranscription/DsfrTranscription.vue'

export default defineComponent({
  name: 'DsfrVideo',
  components: {
    DsfrTranscription,
  },

  props: {
    expandTranscription: Boolean,
    src: {
      type: String,
      required: true,
    },
    legend: {
      type: String,
      default: 'Une vidéo formidable',
    },
    size: {
      type: String,
      default: 'medium',
    },
    transcriptionTitle: {
      type: String,
      default: 'Titre de la vidéo',
    },
    transcriptionContent: {
      type: String,
      default: 'Transcription du contenu de la vidéo',
    },
    ratio: {
      type: String,
      default: '16x9',
    },
  },
  emits: ['expandTranscription'],
})
</script>

<template>
  <figure
    class="fr-content-media"
    :class="{
      'fr-content-media--sm': size == 'small',
      'fr-content-media--lg': size == 'large',
    }"
  >
    <div
      class="fr-responsive-vid"
      :class="`fr-ratio-${ratio}`"
    >
      <iframe
        :src="src"
        class="fr-responsive-vid__player"
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      />
    </div>
    <div class="fr-content-media__caption">
      {{ legend }}
    </div>
    <DsfrTranscription
      :title="transcriptionTitle"
      :content="transcriptionContent"
      @expand-transcription="expandTranscription"
    />
  </figure>
</template>

<style src="@gouvfr/dsfr/dist/component/content/content.main.min.css" />
