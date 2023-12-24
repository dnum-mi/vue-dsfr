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
      size="lg"
      icon="fr-icon-home-4-fill"
      label="Accueil"
      @click="handleClick()"
    />
    Cliqué {{ nb }} fois
  </div>
</template>
