<script lang="ts" setup>
import DsfrCard from '../DsfrCard.vue'
import DsfrTags from '../../DsfrTag/DsfrTags.vue'

const link = 'https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte'
const description = 'Description exceptionellement précise'
const detail = 'Détails absolument essentiels'
const detailIcon = 'Détails absolument essentiels'
const endDetail = 'Autres détails absolument essentiels'
const endDetailIcon = 'fr-icon-arrow-right-line'
const altImg = 'Un adorable quoique redoutable chaton'
const imgSrc = 'https://placekitten.com/450/400'

const exampleTags = [
  {
    label: 'Tag1',
  },
  {
    label: 'Tag2',
  },
  {
    label: 'Tag3',
  },
  {
    label: 'Tag4',
  },
]
</script>

<template>
  <DsfrCard
    :img-src="imgSrc"
    :link="link"
    :description="description"
    :detail="detail"
    :detail-icon="detailIcon"
    :end-detail="endDetail"
    :end-detail-icon="endDetailIcon"
    :alt-img="altImg"
    title="Titre de la carte"
    size="large"
    ratio-img="large"
  >
    <template #start-details>
      <DsfrTags
        :tags="exampleTags"
      />
    </template>
  </DsfrCard>
</template>
