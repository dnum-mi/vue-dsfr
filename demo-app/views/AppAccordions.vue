<script setup>
import DsfrAccordion from '@/components/DsfrAccordion/DsfrAccordion.vue'

import DsfrAccordionsGroup from '@/components/DsfrAccordion/DsfrAccordionsGroup.vue'
import DsfrTranscription from '@/components/DsfrTranscription/DsfrTranscription.vue'
import { ref } from 'vue'

const activeAccordion = ref(-1)
const activeAccordionInGroup = ref(-1)
const title1 = 'Un titre d’accordéon 1'
const title2 = 'Un titre d’accordéon 2'
const title3 = 'Un titre d’accordéon 3'
</script>

<template>
  <h2 class="mt-8">
    Un accordéon seul
  </h2>
  <DsfrAccordionsGroup
    v-model="activeAccordionInGroup"
  >
    <DsfrAccordion
      id="accordion-alone"
      title="Titre de l’accordéon"
    >
      Contenu de l’accordéon dans le groupe
    </DsfrAccordion>
  </DsfrAccordionsGroup>

  <h2 class="mt-8">
    Un composant transcription
  </h2>

  <DsfrTranscription title="Le titre de la transcription">
    La transcription blablabla
  </DsfrTranscription>

  <h2 class="mt-8">
    Un groupe de 3 accordéons
  </h2>

  <DsfrAccordionsGroup v-model="activeAccordion">
    <DsfrAccordion
      id="accordion-1"
      :title="title1"
    >
      Contenu de l’accordéon 1
    </DsfrAccordion>
    <DsfrAccordion
      id="accordion-2"
      :title="title2"
    >
      Contenu de l’accordéon 2
    </DsfrAccordion>
    <DsfrAccordion
      id="accordion-3"
      :title="title3"
    >
      Contenu de l’accordéon 3
    </DsfrAccordion>
  </DsfrAccordionsGroup>
</template>

<style scoped>
.mt-8 {
  margin-top: 2rem;
}
</style>
