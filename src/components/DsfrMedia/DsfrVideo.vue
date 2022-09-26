<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrVideo',

  props: {
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
    transcriptionUrl: {
      type: String,
      default: undefined,
    },
    transcriptionLabel: {
      type: String,
      default: undefined,
    },
    ratio: {
      type: String,
      default: '16x9',
    },
  },
})
</script>

<template>
  <div
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
    <div
      v-if="transcriptionUrl"
      class="fr-content-media__transcription"
    >
      <a
        class="fr-btn"
        :href="transcriptionUrl"
      >{{ transcriptionLabel }}</a>
    </div>
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/content/content.css" />
