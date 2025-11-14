<script lang="ts" setup>
import DsfrFranceConnect from '../DsfrFranceConnect.vue'
</script>

<template>
  <div class="fr-container fr-my-2v">
    <h2>FranceConnect</h2>
    <p class="fr-my-2v">
      <DsfrFranceConnect />
    </p>

    <h2>FranceConnect+</h2>
    <p class="fr-my-2v">
      <DsfrFranceConnect secure />
    </p>
  </div>
</template>
