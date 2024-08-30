<script lang="ts" setup>
import DsfrToggleSwitch from '../DsfrToggleSwitch.vue'
</script>

<template>
  <div
    class="flex flex-col"
  >
    <DsfrToggleSwitch label="Label action interrupteur" />
    <DsfrToggleSwitch
      label="Label action interrupteur"
      label-left
    />
    <DsfrToggleSwitch
      label="Vitesse lumière ?"
      border-bottom
      active-text="Vers l'infini et au-delà"
      inactive-text="restons terre à terre"
    />
  </div>
</template>
