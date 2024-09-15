<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import DsfrToggleSwitch from '../../DsfrToggleSwitch/DsfrToggleSwitch.vue'
import DsfrTiles from '../DsfrTiles.vue'
import type { DsfrTileProps } from '../DsfrTiles.types'

const horizontal = ref(false)
const tiles: DsfrTileProps[] = [
  {
    title: 'Ma formidable tuile 1',
    imgSrc: 'https://loremflickr.com/80/80/cat?random=1',
    description: 'Une tuile absolument formidable',
  },
  {
    title: 'Ma formidable tuile 2',
    imgSrc: 'https://loremflickr.com/80/80/cat?random=2',
    description: 'Une tuile absolument formidable',
  },
  {
    title: 'Ma formidable tuile 3',
    imgSrc: 'https://loremflickr.com/80/80/cat?random=3',
    description: 'Une tuile absolument formidable',
  },
  {
    title: 'Ma formidable tuile 4',
    imgSrc: 'https://loremflickr.com/80/80/cat?random=4',
    description: 'Une tuile absolument formidable',
  },
]
const app = getCurrentInstance()
app?.appContext.app.use(
  createRouter({
    history: createWebHistory(),
    routes: [
      { path: '', component: { template: '<div>Accueil</div>' } },
      { path: '/dummy-path', component: { template: '<div>DummyPath</div>' } },
    ],
  }),
)
</script>

<template>
  <div class="fr-container fr-my-2v">
    <div class="fr-my-4v">
      <DsfrToggleSwitch
        v-model="horizontal"
        label="Tuiles à l’horizontal"
      />
    </div>
    <DsfrTiles
      :tiles
      :horizontal
    />
  </div>
</template>
