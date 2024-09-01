<script lang="ts" setup>
import { ref } from 'vue'

import DsfrAccordion from '../DsfrAccordion.vue'
import DsfrAccordionsGroup from '../DsfrAccordionsGroup.vue'

const title1 = ref('Un titre d’accordéon 1')
const titleSub1 = ref('Un titre d’accordéon 1.1')
const titleSub2 = ref('Un titre d’accordéon 1.2')
const expandedId = ref<string>()
const subExpandedId = ref<string>()
</script>

<template>
  <DsfrAccordionsGroup>
    <DsfrAccordion
      :title="title1"
      :expanded-id="expandedId"
      @expand="expandedId = $event"
    >
      <DsfrAccordionsGroup style="margin-left: 1rem;">
        <DsfrAccordion
          :title="titleSub1"
          :expanded-id="subExpandedId"
          @expand="subExpandedId = $event"
        >
          Contenu de l’accordéon dans l’accordéon
        </DsfrAccordion>
        <DsfrAccordion
          :title="titleSub2"
          :expanded-id="subExpandedId"
          @expand="subExpandedId = $event"
        >
          Contenu de l’accordéon dans l’accordéon
        </DsfrAccordion>
      </DsfrAccordionsGroup>
    </DsfrAccordion>
  </DsfrAccordionsGroup>
</template>
