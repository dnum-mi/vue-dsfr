<script lang="ts" setup>
import svgCityHall from '@gouvfr/dsfr/dist/artwork/pictograms/buildings/city-hall.svg'
import svgHouse from '@gouvfr/dsfr/dist/artwork/pictograms/buildings/house.svg'

import svgSchool from '@gouvfr/dsfr/dist/artwork/pictograms/buildings/school.svg'
import svgContract from '@gouvfr/dsfr/dist/artwork/pictograms/document/contract.svg'
import svgDocument from '@gouvfr/dsfr/dist/artwork/pictograms/document/driving-licence.svg'
import { getCurrentInstance, ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import DsfrButton from '../../DsfrButton/DsfrButton.vue'
import DsfrTile from '../DsfrTile.vue'

const title = 'Ma formidable tuile'
const imgSrc = ref<string>()
const svgPath = ref<string | undefined>(svgSchool)
const description = 'Une tuile absolument formidable'
const disabled = ref(false)
const horizontal = ref(false)
const details = 'Détails (optionnel)'
const to = '/dummy-path'
const titleTag = 'h2'
const download = false
const small = false
const icon = ref(true)
const noBorder = false
const shadow = false
const noBackground = false
const grey = false

function toggleSvgImg () {
  svgPath.value = svgPath.value === undefined ? getRandomSvg() : undefined
  imgSrc.value = imgSrc.value === undefined ? `https://loremflickr.com/80/80/cat?random=${Math.round(Math.random() * 10)}` : undefined
}

function setRandomSvg () {
  imgSrc.value = undefined
  svgPath.value = getRandomSvg()
}

function getRandomSvg () {
  const svgs = [svgSchool, svgCityHall, svgHouse, svgContract, svgDocument]
  return svgs[Math.floor(Math.random() * svgs.length)]
}

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
    <DsfrTile
      :title="title"
      :img-src="imgSrc"
      :svg-path="svgPath"
      :description="description"
      :details="details"
      :horizontal="horizontal"
      :disabled="disabled"
      :to="to"
      :title-tag="titleTag"
      :download="download"
      :small="small"
      :icon="icon"
      :no-border="noBorder"
      :shadow="shadow"
      :no-background="noBackground"
      :grey="grey"
    />
    <div class="fr-my-2v  flex  gap-2">
      <DsfrButton
        type="button"
        :label="disabled ? 'Activer' : 'Désactiver'"
        secondary
        @click="disabled = !disabled"
      />
      <DsfrButton
        type="button"
        label="Horizontal / Vertical"
        secondary
        @click="horizontal = !horizontal"
      />
      <DsfrButton
        type="button"
        label="Avec / sans icône"
        secondary
        @click="icon = !icon"
      />
      <DsfrButton
        type="button"
        label="Image / SVG"
        secondary
        @click="toggleSvgImg()"
      />
      <DsfrButton
        type="button"
        label="SVG aléatoire"
        secondary
        @click="setRandomSvg()"
      />
    </div>
  </div>
</template>
