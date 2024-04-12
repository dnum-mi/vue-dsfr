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
const asc = ref(true)
const initialSelectedIndex = 0
const title1 = 'Un titre d’accordéon 1'
const title2 = 'Un titre d’accordéon 2'
const title3 = 'Un titre d’accordéon 3'
const expandedId = ref(undefined)

function selectTab (idx) {
  asc.value = selectedTabIndex.value < idx
  selectedTabIndex.value = idx
}
</script>

<template>
  <DsfrTabs
    :tab-list-name="tabListName"
    :tab-titles="tabTitles"
    :initial-selected-index="initialSelectedIndex"
    @select-tab="selectTab"
  >
    <DsfrTabContent
      panel-id="tab-content-0"
      tab-id="tab-0"
      :selected="selectedTabIndex === 0"
      :asc="asc"
    >
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
    </DsfrTabContent>
    <DsfrTabContent
      panel-id="tab-content-1"
      tab-id="tab-1"
      :selected="selectedTabIndex === 1"
      :asc="asc"
    >
      <DsfrCard
        detail="detail"
        description="description"
        img-src="https://loremflickr.com/300/200/cat"
        title="title"
      />
    </DsfrTabContent>
  </DsfrTabs>
</template>
