<script setup lang="ts">
import { VIcon } from '@gouvminint/vue-dsfr'
</script>

<template>
  <div>
    <h2>Test des icônes locales</h2>
    <p>Ces icônes doivent s'afficher sans appels réseau :</p>

    <div style="display: flex; gap: 1rem; align-items: center;">
      <VIcon name="ri:flag-line" :scale="2" />
      <span>Flag (Remix Icon)</span>
    </div>

    <div style="display: flex; gap: 1rem; align-items: center;">
      <VIcon name="ri:home-4-line" :scale="2" />
      <span>Home (Remix Icon)</span>
    </div>

    <div style="display: flex; gap: 1rem; align-items: center;">
      <VIcon name="ri:question-mark" :scale="2" />
      <span>Question (Remix Icon)</span>
    </div>

    <div style="display: flex; gap: 1rem; align-items: center;">
      <VIcon name="mdi:home" :scale="2" />
      <span>Home (Material Design)</span>
    </div>

    <div style="display: flex; gap: 1rem; align-items: center;">
      <VIcon name="mdi:star" :scale="2" />
      <span>Star (Material Design)</span>
    </div>
  </div>
</template>
