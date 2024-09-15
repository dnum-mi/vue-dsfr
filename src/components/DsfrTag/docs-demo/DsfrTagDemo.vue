<script lang="ts" setup>
import DsfrTag from '@/components/DsfrTag/DsfrTag.vue'
</script>

<template>
  <div class="flex  gap-2  fr-m-2v  flex-wrap">
    <DsfrTag
      label="Vue Power"
    />
    <DsfrTag
      label="DSFR"
      icon="fr-icon-success-line"
    />
    <DsfrTag
      label="Iconify Power"
      icon="ri-bell-line"
    />
    <DsfrTag
      label="Tag inactif (disabled)"
      icon="ri-stop-line"
      title="désactivé"
      disabled
    />
    <DsfrTag
      label="Icône seule"
      title="Icône seule"
      icon="ri-play-line"
      icon-only
    />
    <DsfrTag
      label="Petit tag"
      title="Petite"
      small
    />
    <DsfrTag
      label="Petit tag avec icone DSFR"
      title="Petite"
      small
      icon="fr-icon-success-line"
    />
    <DsfrTag
      label="Petit tag avec icone Iconify"
      title="Petite"
      small
      icon="ri-checkbox-circle-line"
    />
  </div>
</template>
