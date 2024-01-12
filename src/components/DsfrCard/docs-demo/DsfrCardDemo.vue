<script lang="ts" setup>
import { ref } from 'vue'

import DsfrCard from '../DsfrCard.vue'

const link = ref('https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte')
const description = ref('Description exceptionellement précise')
const detail = ref('Détails absolument essentiels')
const altImg = ref('Un adorable quoique redoutable chaton')
const imgSrc = ref('https://placekitten.com/300/200')
</script>

<template>
  <DsfrCard
    :img-src="imgSrc"
    :link="link"
    :description="description"
    :detail="detail"
    :alt-img="altImg"
    size="large"
    ratio-img="large"
  />
</template>
