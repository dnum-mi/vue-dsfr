<script lang="ts" setup>
import { ref } from 'vue'

import DsfrTag from '@/components/DsfrTag/DsfrTag.vue'

const loneTag = ref(false)

const filters = ref(['individualTags', 'tagSets'])
</script>

<template>
  <div
    v-if="filters.includes('individualTags')"
    class="flex  gap-2  fr-m-2v  flex-wrap"
  >
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
    <DsfrTag
      label="Tag tout cliquable seul !"
      selectable
      :selected="loneTag"
      @select="loneTag = !loneTag"
    />
    <DsfrTag
      label="Tag cliquable tout seul mais désactivé !"
      selectable
      disabled
      :selected="loneTag"
      @select="loneTag = !loneTag"
    />
  </div>
</template>
