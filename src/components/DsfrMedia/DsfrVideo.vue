<script lang="ts" setup>
import DsfrTranscription from '../DsfrTranscription/DsfrTranscription.vue'

withDefaults(defineProps<{
  src: string
  legend?: string
  size?: 'small' | 'medium' | 'large'
  transcriptionTitle?: string
  transcriptionContent?: string
  ratio?: string
}>(), {
  legend: '',
  transcriptionTitle: '',
  transcriptionContent: '',
  ratio: '16x9',
  size: 'medium',
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
    />
  </figure>
</template>
