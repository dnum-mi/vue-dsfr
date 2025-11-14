<script lang="ts" setup>
import { ref } from 'vue'

import DsfrTabs from '../DsfrTabs.vue'

const tabListName = 'Liste d’onglet'
const title1 = 'Titre 1'
const tabTitles = [
  { title: title1, icon: 'ri-checkbox-circle-line' },
  { title: 'Titre 2', icon: 'ri-checkbox-circle-line' },
  { title: 'Titre 3', icon: 'ri-checkbox-circle-line' },
  { title: 'Titre 4', icon: 'ri-checkbox-circle-line' },
]
const tabContents = [
  'Contenu 1 avec seulement des strings',
  'Contenu 2 avec seulement des strings',
  'Contenu 3 avec seulement des strings',
  'Contenu 4 avec seulement des strings',
]
const activeTab = ref(0)
</script>

<template>
  <div class="fr-container fr-my-2w">
    <DsfrTabs
      v-model="activeTab"
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      :tab-contents="tabContents"
    />
  </div>
</template>
