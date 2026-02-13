<script lang="ts" setup>
import DsfrToggleSwitch from '../DsfrToggleSwitch.vue'
</script>

<template>
  <div
    class="flex flex-col"
  >
    <div>
      <DsfrToggleSwitch label="Label action interrupteur" />
    </div>
    <div>
      <DsfrToggleSwitch
        label="Label action interrupteur"
      />
    </div>
    <div>
      <DsfrToggleSwitch
        label="Vitesse lumière ?"
        border-bottom
        active-text="Vers l'infini et au-delà"
        inactive-text="restons terre à terre"
      />
    </div>
  </div>
</template>
