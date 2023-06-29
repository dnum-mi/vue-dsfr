<script setup>
import { ref } from 'vue'

import DsfrAccordion from '@/components/DsfrAccordion/DsfrAccordion.vue'
import DsfrAccordionsGroup from '@/components/DsfrAccordion/DsfrAccordionsGroup.vue'

const accordionTitle = 'Titre de l’accordéon'
const expandedId = ref(undefined)
</script>
<template>
  <DsfrAccordionsGroup>
    <li>
      <DsfrAccordion
        :title="accordionTitle"
        :expanded-id="expandedId"
        @expand="expandedId = $event === expandedId ? undefined : $event"
      >
        Contenu de l’accordéon dans l’accordéon
      </DsfrAccordion>
    </li>
  </DsfrAccordionsGroup>
  <DsfrTranscription title="Le titre de la transcription">
    La transcription blablabla
  </DsfrTranscription>
</template>
