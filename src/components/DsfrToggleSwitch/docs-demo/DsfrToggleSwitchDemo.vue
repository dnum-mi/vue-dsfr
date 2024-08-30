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
        label-left
      />
    </div>
    <div>
      <DsfrToggleSwitch
        label="Label action interrupteur"
        border-bottom
      />
    </div>
  </div>
</template>
