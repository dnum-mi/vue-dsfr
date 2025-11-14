<script lang="ts" setup>
import { ref } from 'vue'

import DsfrButton from '../DsfrButton.vue'

const nb = ref(0)
const handleClick = () => {
  nb.value++
}
</script>

<template>
  <div class="fr-container fr-my-2w">
    <DsfrButton
      size="sm"
      label="Aller plus loin"
      icon="fr-icon-arrow-right-line"
      icon-right
      @click="handleClick()"
    >
      (Contenu <em>supplémentaire</em>)
    </DsfrButton>
    Cliqué {{ nb }} fois
  </div>
</template>
