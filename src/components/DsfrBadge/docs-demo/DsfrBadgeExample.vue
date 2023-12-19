<script lang="ts" setup>
import DsfrBadge from '../DsfrBadge.vue'
</script>

<template>
  <div class="flex justify-center w-full gap-4">
    <div class="demo-container-col">
      <DsfrBadge
        label="Badge défaut"
      />
      <DsfrBadge
        label="Badge succès"
        type="success"
      />
      <DsfrBadge
        label="Badge danger"
        type="warning"
      />
      <DsfrBadge
        label="Badge erreur"
        type="error"
      />
      <DsfrBadge
        label="Badge info"
        type="info"
      />
      <DsfrBadge
        label="Badge 'none'"
        type="none"
      />
    </div>
    <div class="demo-container-col">
      <DsfrBadge
        label="Badge petit défaut"
        small
      />
      <DsfrBadge
        label="Badge petit succès"
        type="success"
        small
      />
      <DsfrBadge
        label="Badge petit danger"
        type="warning"
        small
      />
      <DsfrBadge
        label="Badge petit erreur"
        type="error"
        small
      />
      <DsfrBadge
        label="Badge petit info"
        type="info"
        small
      />
      <DsfrBadge
        label="Badge petit 'none'"
        type="none"
        small
      />
    </div>
    <div class="demo-container-col">
      <DsfrBadge
        label="Badge avec un titre un petit peu trop long"
        type="info"
        ellipsis
        style="max-width: 200px;"
      />
    </div>
  </div>
</template>
