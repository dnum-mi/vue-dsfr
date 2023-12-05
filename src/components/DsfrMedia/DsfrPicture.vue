<script lang="ts" setup>
import type { DsfrPictureProps } from './DsfrMedia.types'

export type { DsfrPictureProps }

withDefaults(defineProps<DsfrPictureProps>(), {
  alt: '',
  legend: '',
  title: '',
  size: 'medium',
  ratio: '16x9',
})
</script>

<template>
  <figure
    class="fr-content-media"
    role="group"
    :class="{
      'fr-content-media--sm': size == 'small',
      'fr-content-media--lg': size == 'large',
    }"
    :aria-label="legend"
  >
    <div class="fr-content-media__img">
      <!-- @slot Slot par défaut pour insérer une image personnalisée (SVG ou autre). Par défaut, insère l’image donnée par la props src -->
      <slot>
        <img
          v-if="src"
          :src="src"
          class="fr-responsive-img"
          :class="`fr-ratio-${ratio}`"
          :alt="alt"
          :title="title"
          :ratio="ratio"
        >
      </slot>
    </div>
    <figcaption class="fr-content-media__caption">
      {{ legend }}
    </figcaption>
  </figure>
</template>
