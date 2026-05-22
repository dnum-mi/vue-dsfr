<script lang="ts" setup>
import DsfrConnect from '../DsfrConnect.vue'
</script>

<template>
  <div class="fr-container fr-my-2v">
    <h2>FranceConnect</h2>
    <p class="fr-my-2v">
      <DsfrConnect />
    </p>

    <h2>FranceConnect+</h2>
    <p class="fr-my-2v">
      <DsfrConnect
        variant="plus"
        lang="en"
      />
    </p>

    <h2>ProConnect </h2>
    <p class="fr-my-2v">
      <DsfrConnect
        variant="pro"
        lang="es"
      />
    </p>

    <h2>FranceConnect (désactivé)</h2>
    <p class="fr-my-2v">
      <DsfrConnect
        disabled
      />
    </p>
  </div>
</template>
