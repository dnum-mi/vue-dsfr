<script lang="ts" setup>
import DsfrTile, { DsfrTileProps } from './DsfrTile.vue'

withDefaults(defineProps<{
  tiles?:(DsfrTileProps & { containerClass: string })[]
  horizontal?: boolean
}>(), {
  tiles: () => [],
})
</script>

<template>
  <div class="fr-grid-row fr-grid-row--gutters">
    <div
      v-for="(tile, idx) of tiles"
      :key="idx"
      :class="{
        [tile.containerClass]: tile.containerClass,
        'fr-col-6 fr-col-md-4 fr-col-lg-3': !tile.containerClass && !horizontal,
        'fr-col-12': horizontal
      }"
    >
      <DsfrTile
        :horizontal="horizontal"
        v-bind="tile"
      />
    </div>
  </div>
</template>
