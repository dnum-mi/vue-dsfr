<script lang="ts" setup>
import { ref } from 'vue'

import DsfrCard from '../DsfrCard.vue'

const link = ref('https://www.systeme-de-design.gouv.fr/')
const description = ref('Description sommaire de la carte')
const detail = ref('Détails sur la carte en question')
const altImg = ref('Un adorable chaton')
const imgSrc = ref('https://placekitten.com/300/200')
</script>

<template>
  <DsfrCard
    :imgSrc="imgSrc"
    :link="link"
    :description="description"
    :detail="detail"
    :altImg="altImg"
  />
</template>