<script>
export default {
  name: 'DsfrPicture',
  props: {
    alt: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      required: true,
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
  },
}
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
      <img
        :src="src"
        class="fr-responsive-img"
        :alt="alt"
      >
    </div>
    <figcaption class="fr-content-media__caption">
      {{ legend }}
    </figcaption>
  </figure>
</template>

<style src="./content.css" />

<style scoped>
.fr-content-media__caption {
  color: var(--g800);
}
</style>
