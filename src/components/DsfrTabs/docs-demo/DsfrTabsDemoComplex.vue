<script lang="ts" setup>
import { ref } from 'vue'
import DsfrButton from '../../DsfrButton/DsfrButton.vue'
import DsfrTabs from '../DsfrTabs.vue'
import DsfrTabContent from '../DsfrTabContent.vue'

const tabListName = 'Liste d’onglet'
const title1 = 'Titre 1'
const tabTitles = [
  { title: title1, icon: 'ri-checkbox-circle-line' },
  { title: 'Titre 2', icon: 'ri-checkbox-circle-line' },
  { title: 'Titre 3', icon: 'ri-checkbox-circle-line' },
  { title: 'Titre 4', icon: 'ri-checkbox-circle-line' },
]

const initialSelectedIndex = 0

const asc = ref(true)
const selectedTabIndex = ref(initialSelectedIndex)

const selectTab = (idx: number) => {
  asc.value = selectedTabIndex.value < idx
  selectedTabIndex.value = idx
}
</script>

<template>
  <div class="fr-container fr-my-2w">
    <DsfrTabs
      ref="tabs"
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
        <div>Contenu 1 avec d'<em>autres composants</em></div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-1"
        tab-id="tab-1"
        :selected="selectedTabIndex === 1"
        :asc="asc"
      >
        <div>Contenu 2 avec d'<strong>autres composants</strong></div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-2"
        tab-id="tab-2"
        :selected="selectedTabIndex === 2"
        :asc="asc"
      >
        <div>Contenu 3 avec d'<em><strong>autres composants</strong></em></div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-3"
        tab-id="tab-3"
        :selected="selectedTabIndex === 3"
        :asc="asc"
      >
        <div>Contenu 4 avec <DsfrButton>d'autres composants</DsfrButton></div>
      </DsfrTabContent>
    </DsfrTabs>
    <div style="display: flex; gap: 1rem; margin-block: 1rem;">
      <DsfrButton
        label="Activer le 1er onglet"
        @click="() => { $refs.tabs.selectFirst() }"
      />
      <DsfrButton
        label="Activer le 2è onglet"
        @click="() => { $refs.tabs.selectIndex(1) }"
      />
      <DsfrButton
        label="Activer le 3è onglet"
        @click="() => { $refs.tabs.selectIndex(2) }"
      />
      <DsfrButton
        label="Activer le dernier onglet"
        @click="() => { $refs.tabs.selectLast() }"
      />
    </div>
  </div>
</template>
