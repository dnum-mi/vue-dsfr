<script lang="ts" setup>
import type { DsfrTilesProps } from './DsfrTiles.types'

import DsfrTile from './DsfrTile.vue'

export type { DsfrTilesProps }

withDefaults(defineProps<DsfrTilesProps>(), {
  tiles: () => [],
})
</script>

<template>
  <div class="fr-grid-row fr-grid-row--gutters">
    <div
      v-for="(tile, idx) of tiles"
      :key="idx"
      :class="{
        [tile.containerClass ?? 'no-class']: tile.containerClass,
        'fr-col-6 fr-col-md-4 fr-col-lg-3': !tile.containerClass && !horizontal,
        'fr-col-12': horizontal,
      }"
    >
      <DsfrTile
        :horizontal="horizontal"
        v-bind="tile"
      />
    </div>
  </div>
</template>
