<script lang="ts" setup>
import { ref } from 'vue'

import DsfrButton from '../../DsfrButton/DsfrButton.vue'
import DsfrTabContent from '../DsfrTabContent.vue'
import DsfrTabItem from '../DsfrTabItem.vue'
import DsfrTabs from '../DsfrTabs.vue'

const tabListName = 'Liste d’onglet'
const title1 = 'Titre 1'
const tabTitles = [
  { title: title1, icon: 'ri-checkbox-circle-line', tabId: 'tab-0', panelId: 'tab-content-0' },
  { title: 'Titre 2', icon: 'ri-checkbox-circle-line', tabId: 'tab-1', panelId: 'tab-content-1' },
  { title: 'Titre 3', icon: 'ri-checkbox-circle-line', tabId: 'tab-2', panelId: 'tab-content-2' },
  { title: 'Titre 4', icon: 'ri-checkbox-circle-line', tabId: 'tab-3', panelId: 'tab-content-3' },
]

const activeTab = ref(0)
const selectPrevious = async () => {
  const newIndex = activeTab.value === 0 ? tabTitles.length - 1 : activeTab.value - 1
  activeTab.value = newIndex
}
const selectNext = async () => {
  const newIndex = activeTab.value === tabTitles.length - 1 ? 0 : activeTab.value + 1
  activeTab.value = newIndex
}
const selectFirst = async () => {
  activeTab.value = 0
}
const selectLast = async () => {
  activeTab.value = tabTitles.length - 1
}
</script>

<template>
  <div class="fr-container fr-my-2w">
    <DsfrTabs
      v-model="activeTab"
      :tab-list-name="tabListName"
    >
      <template #tab-items>
        <DsfrTabItem
          v-for="(tab, index) of tabTitles"
          :key="tab.tabId"
          :tab-id="tab.tabId"
          :panel-id="tab.panelId"
          :icon="tab.icon"
          @click="activeTab = index"
          @next="selectNext()"
          @previous="selectPrevious()"
          @first="selectFirst()"
          @last="selectLast()"
        >
          {{ tab.title }}
        </DsfrTabItem>
      </template>
      <DsfrTabContent
        panel-id="tab-content-0"
        tab-id="tab-0"
      >
        <div>Contenu 1 avec d'<em>autres composants</em></div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-1"
        tab-id="tab-1"
      >
        <div>Contenu 2 avec d'<strong>autres composants</strong></div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-2"
        tab-id="tab-2"
      >
        <div>Contenu 3 avec d'<em><strong>autres composants</strong></em></div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-3"
        tab-id="tab-3"
      >
        <div>
          <p>Contenu 4 avec beaucoup de contenus</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae fugit sit et eos a officiis adipisci nulla repellat cupiditate? Assumenda, explicabo ullam laboriosam ex sit corporis enim illum a itaque.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi quis quos consectetur alias delectus recusandae sunt quisquam incidunt provident quidem, at voluptatibus id, molestias et? Temporibus perspiciatis aut voluptates.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam obcaecati at delectus iusto possimus! Molestiae, iusto veritatis. Nostrum magni officiis autem, in ullam aliquid, mollitia, commodi architecto vitae omnis vero.</p>
        </div>
      </DsfrTabContent>
    </DsfrTabs>
    <div style="display: flex; gap: 1rem; margin-block: 1rem;">
      <DsfrButton
        label="Activer le 1er onglet"
        :disabled="activeTab === 0"
        @click="activeTab = 0"
      />
      <DsfrButton
        label="Activer le 2è onglet"
        :disabled="activeTab === 1"
        @click="activeTab = 1"
      />
      <DsfrButton
        label="Activer le 3è onglet"
        :disabled="activeTab === 2"
        @click="activeTab = 2"
      />
      <DsfrButton
        label="Activer le dernier onglet"
        :disabled="activeTab === tabTitles.length - 1"
        @click="activeTab = tabTitles.length - 1"
      />
    </div>
  </div>
</template>
