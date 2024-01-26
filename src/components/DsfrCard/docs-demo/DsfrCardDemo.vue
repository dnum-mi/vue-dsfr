<script lang="ts" setup>
import { ref } from 'vue'

import DsfrCard from '../DsfrCard.vue'
import DsfrTags from '../../DsfrTag/DsfrTags.vue'

const link = ref('https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte')
const description = ref('Description exceptionellement précise')
const detail = ref('Détails absolument essentiels')
const endDetail = ref('Autres détails absolument essentiels')
const altImg = ref('Un adorable quoique redoutable chaton')
const imgSrc = ref('https://placekitten.com/450/400')

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
    :end-detail="endDetail"
    :alt-img="altImg"
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
