<script lang="ts" setup>
import DsfrCard from '../DsfrCard.vue'

const description = 'Description exceptionellement précise'
const detail = 'Détails absolument essentiels'
const detailIcon = 'Détails absolument essentiels'
const endDetail = 'Autres détails absolument essentiels'
const endDetailIcon = 'fr-icon-arrow-right-line'
const altImg = 'Un adorable quoique redoutable chaton'
const imgSrc = 'https://placekitten.com/450/400'

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
