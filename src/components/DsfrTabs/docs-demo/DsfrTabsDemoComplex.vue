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
        <div>
          <p>Contenu 4 avec beaucoup de contenus</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae fugit sit et eos a officiis adipisci nulla repellat cupiditate? Assumenda, explicabo ullam laboriosam ex sit corporis enim illum a itaque.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi quis quos consectetur alias delectus recusandae sunt quisquam incidunt provident quidem, at voluptatibus id, molestias et? Temporibus perspiciatis aut voluptates.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam obcaecati at delectus iusto possimus! Molestiae, iusto veritatis. Nostrum magni officiis autem, in ullam aliquid, mollitia, commodi architecto vitae omnis vero.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore explicabo voluptates, pariatur excepturi ad sint voluptatum vero molestias aut qui beatae. Porro laudantium, saepe consequuntur voluptatem magni earum labore veniam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quo nisi explicabo corrupti assumenda! Eaque quod, perspiciatis facere molestias nihil eum beatae commodi laudantium possimus qui error veniam enim at!</p>
        </div>
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
