<script lang="ts" setup>
import svgCityHall from '@gouvfr/dsfr/dist/artwork/pictograms/buildings/city-hall.svg'
import svgSchool from '@gouvfr/dsfr/dist/artwork/pictograms/buildings/school.svg'
import svgContract from '@gouvfr/dsfr/dist/artwork/pictograms/document/contract.svg'
import { ref } from 'vue'

import DsfrButton from '../../DsfrButton/DsfrButton.vue'
import DsfrPictogram from '../DsfrPictogram.vue'

const pictograms = [svgSchool, svgCityHall, svgContract]
const currentIndex = ref(0)
const svgPath = ref(pictograms[0])

function nextPictogram () {
  currentIndex.value = (currentIndex.value + 1) % pictograms.length
  svgPath.value = pictograms[currentIndex.value]
}
</script>

<template>
  <div class="demo-container-col">
    <div class="flex items-center gap-4">
      <DsfrPictogram :svg-path="svgPath" />
      <DsfrPictogram
        :svg-path="svgPath"
        :svg-attrs="{ width: '40px', height: '40px' }"
      />
      <DsfrPictogram
        :svg-path="svgPath"
        :svg-attrs="{ width: '24px', height: '24px' }"
      />
    </div>
    <DsfrButton
      label="Changer de pictogramme"
      @click="nextPictogram()"
    />
  </div>
</template>
