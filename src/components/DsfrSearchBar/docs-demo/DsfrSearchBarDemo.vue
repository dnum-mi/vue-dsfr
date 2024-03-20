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
        label="Label du curseur"
      />
    </div>
    <p class="fr-my-4w">
      {{ value }}
    </p>
  </div>
</template>
