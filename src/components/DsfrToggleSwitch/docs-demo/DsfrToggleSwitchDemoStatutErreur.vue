<script lang="ts" setup>
import DsfrToggleSwitch from '../DsfrToggleSwitch.vue'
</script>

<template>
  <div
    class="flex flex-col"
  >
    <div>
      <DsfrToggleSwitch
        label="Label action interrupteur (sans statut)"
        border-bottom
      />
    </div>
    <div>
      <DsfrToggleSwitch
        label="Label action interrupteur (valide)"
        border-bottom
        status="valid"
        valid-message="C'est tout bon !"
      />
    </div>
    <div>
      <DsfrToggleSwitch
        label="Label action interrupteur (en erreur)"
        border-bottom
        status="error"
        error-message="Il y a une erreur"
      />
    </div>
  </div>
</template>
