<script lang="ts" setup>
import DsfrTranscription from '../DsfrTranscription.vue'

const title = 'Titre de la transcription'
const content = 'Contenu de la transcription'
</script>

<template>
  <DsfrTranscription
    :title="title"
    :content="content"
  />
</template>
