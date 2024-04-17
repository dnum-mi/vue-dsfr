<script lang="ts" setup>
import { OhVueIcon as VICon } from 'oh-vue-icons'
import { getCurrentInstance } from 'vue'

import DsfrCard from '../DsfrCard.vue'

const app = getCurrentInstance()
app?.appContext.app.component('VICon', VICon)

const description = 'Description exceptionnellement précise'
const detail = 'Détails absolument essentiels'
const detailIcon = 'Détails absolument essentiels'
const endDetail = 'Autres détails absolument essentiels'
const endDetailIcon = 'fr-icon-arrow-right-line'
const altImg = 'Un adorable quoique redoutable chaton'
const imgSrc = 'https://loremflickr.com/450/400/cat'

const actions = [
  {
    label: 'Valider',
    onClick: (event: MouseEvent) => {
      event.preventDefault()
      alert('Valider')
    },
  },
  {
    label: 'Annuler',
    secondary: true,
    onClick: (event: MouseEvent) => {
      event.preventDefault()
      alert('Annuler')
    },
  },
]
</script>

<template>
  <DsfrCard
    :img-src="imgSrc"
    :description="description"
    :detail="detail"
    :detail-icon="detailIcon"
    :end-detail="endDetail"
    :end-detail-icon="endDetailIcon"
    :alt-img="altImg"
    ratio-img="large"
    size="large"
    title="Titre de la carte"
    :buttons="actions"
  />
</template>
