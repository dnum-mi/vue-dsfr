<script lang="ts" setup>
import DsfrVideo from '../DsfrVideo.vue'

const size = 'medium'
const src = 'https://www.youtube.com/embed/HyirpmPL43I'
const legend = 'Vidéo traitant du Service National Universel'
const transcriptionTitle = 'Titre de la transcription'
const transcriptionContent = 'Contenu de la transcription'
const ratio = '16x9'
</script>

<template>
  <DsfrVideo
    :src="src"
    :legend="legend"
    :size="size"
    :transcription-title="transcriptionTitle"
    :transcription-content="transcriptionContent"
    :ratio="ratio"
  />
</template>
