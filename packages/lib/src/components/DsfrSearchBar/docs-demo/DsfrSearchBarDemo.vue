<script lang="ts" setup>
import { ref } from 'vue'

import DsfrSearchBar from '../DsfrSearchBar.vue'

const value = ref('')
</script>

<template>
  <div class="fr-container fr-py-4w">
    <div>
      <DsfrSearchBar
        v-model="value"
        label="Label de la barre de recherche"
      />
    </div>
    <p class="fr-my-4w">
      {{ value }}
    </p>
  </div>
</template>
