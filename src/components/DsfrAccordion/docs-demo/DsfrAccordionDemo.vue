<script lang="ts" setup>
import { ref } from 'vue'

import DsfrAccordion from '../DsfrAccordion.vue'
import DsfrAccordionsGroup from '../DsfrAccordionsGroup.vue'

const title1 = ref('Un titre d’accordéon 1')
const title2 = ref('Un titre d’accordéon 2')
const title3 = ref('Un titre d’accordéon 3')

const activeAccordion = ref<number>()
</script>

<template>
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
