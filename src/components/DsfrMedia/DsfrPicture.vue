<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrPicture',
  props: {
    alt: {
      type: String,
      default: '',
    },
    legend: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: undefined,
      validator: (val) => ['small', 'medium', 'large', undefined].includes(val),
    },
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
  },
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
          :src="src"
          class="fr-responsive-img"
          :alt="alt"
          :title="title"
        >
      </slot>
    </div>
    <figcaption class="fr-content-media__caption">
      {{ legend }}
    </figcaption>
  </figure>
</template>

<style src="@gouvfr/dsfr/dist/component/content/content.css" />
