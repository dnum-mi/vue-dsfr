<script lang="ts" setup>
import { ref } from 'vue'

import DsfrAccordion from '../DsfrAccordion.vue'
import DsfrAccordionsGroup from '../DsfrAccordionsGroup.vue'

const title1 = ref('Un titre d’accordéon 1')
const title2 = ref('Un titre d’accordéon 2')
const title3 = ref('Un titre d’accordéon 3')
const expandedId = ref('')
</script>

<template>
  <DsfrAccordionsGroup>
    <li>
      <DsfrAccordion
        id="accordion-1"
        :title="title1"
        :expanded-id="expandedId"
        @expand="expandedId = $event"
      >
        Contenu de l’accordéon 1
      </DsfrAccordion>
    </li>
    <li>
      <DsfrAccordion
        id="accordion-2"
        :title="title2"
        :expanded-id="expandedId"
        @expand="id => expandedId = id"
      >
        Contenu de l’accordéon 2
      </DsfrAccordion>
    </li>
    <li>
      <DsfrAccordion
        id="accordion-3"
        :title="title3"
        :expanded-id="expandedId"
        @expand="id => expandedId = id"
      >
        Contenu de l’accordéon 3
      </DsfrAccordion>
    </li>
  </DsfrAccordionsGroup>
</template>
