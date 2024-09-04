<script lang="ts" setup>
import { ref } from 'vue'

import DsfrTabs from '../../src/components/DsfrTabs/DsfrTabs.vue'
import DsfrTabContent from '../../src/components/DsfrTabs/DsfrTabContent.vue'
import DsfrCard from '../../src/components/DsfrCard/DsfrCard.vue'
import DsfrAccordion from '../../src/components/DsfrAccordion/DsfrAccordion.vue'

const tabListName = 'Liste d’onglet'
const tabTitles = [
  { title: 'Onglet avec accordéon', icon: 'ri-checkbox-circle-line', tabId: 'tab-0', panelId: 'tab-content-0' },
  { title: 'Titre 2', icon: 'ri-checkbox-circle-line', tabId: 'tab-1', panelId: 'tab-content-1' },
]
const selectedTabIndex = ref(0)
const title1 = 'Un titre d’accordéon 1'
const title2 = 'Un titre d’accordéon 2'
const title3 = 'Un titre d’accordéon 3'
const activeAccordion = ref(-1)
</script>

<template>
  <DsfrTabs
    v-model="selectedTabIndex"
    :tab-list-name="tabListName"
    :tab-titles="tabTitles"
  >
    <DsfrTabContent
      panel-id="tab-content-0"
      tab-id="tab-0"
    >
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
    </DsfrTabContent>
    <DsfrTabContent
      panel-id="tab-content-1"
      tab-id="tab-1"
    >
      <DsfrCard
        detail="Détails de la carte"
        description="Description de la carte : lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dignissimos deleniti, velit ut cupiditate rem odit nobis iste eos qui itaque necessitatibus ab nostrum quibusdam veniam accusamus deserunt earum perspiciatis."
        title="Titre de la carte"
      />
    </DsfrTabContent>
  </DsfrTabs>
</template>
