<script lang="ts" setup>
import { OhVueIcon as VICon } from 'oh-vue-icons'
import { getCurrentInstance } from 'vue'

import DsfrCard from '../DsfrCard.vue'
import DsfrTags from '../../DsfrTag/DsfrTags.vue'

const app = getCurrentInstance()
app?.appContext.app.component('VICon', VICon)

const link = 'https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte'
const description = 'Description exceptionellement précise'
const detail = 'Détails absolument essentiels'
const detailIcon = 'Détails absolument essentiels'
const endDetail = 'Autres détails absolument essentiels'
const endDetailIcon = 'fr-icon-arrow-right-line'
const altImg = 'Un adorable quoique redoutable chaton'
const imgSrc = 'https://loremflickr.com/450/400/cat'

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
  <div class="fr-container fr-my-2v">
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
  </div>
</template>
