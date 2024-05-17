<script lang="ts" setup>
import svgSchool from '@gouvfr/dsfr/dist/artwork/pictograms/buildings/school.svg'
import DsfrTile from '../../src/components/DsfrTile/DsfrTile.vue'
</script>

<template>
  <div class="fr-my-2v">
    <DsfrCard
      title="Ma formidable carte"
      description="Description de la carte"
      detail="Détail (optionnel) de la carte"
      link="/"
      alt-img="Texte alternatif pour l’image"
      img-src="https://loremflickr.com/800/800/cat"
    />
  </div>
  <div class="fr-my-2v">
    <DsfrTile
      title="Ma formidable tuile"
      description="Une tuile absolument formidable"
      details="Détail (optionnel) de la tuile"
      :svg-path="svgSchool"
      to="/"
    />
  </div>
</template>
