<script lang="ts" setup>
import { ref } from 'vue'

import DsfrInput from '../DsfrInput.vue'

const name = ref('')
</script>

<template>
  <div class="fr-container fr-my-2w">
    <h2>1. Simple</h2>

    <DsfrInput
      v-model="name"
      label="Nom"
      placeholder="Jean Dupont"
      label-visible
      required
      hint="Indiquez votre nom"
    />
    <p>{{ name }}</p>

    <h2>2. Avec utilisation du slot <code>#required-tip</code></h2>

    <DsfrInput
      v-model="name"
      label="Nom"
      label-visible
      hint="Entrez votre nom complet"
      required
    >
      <template #required-tip>
        <span class="custom-required"> (requis)</span>
      </template>
    </DsfrInput>
  </div>
</template>

<style scoped>
.custom-required {
  color: red;
  font-style: italic;
}
</style>
