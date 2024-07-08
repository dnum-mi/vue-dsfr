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
      label="Label action interrupteur"
      border-bottom
    />
  </div>
</template>
