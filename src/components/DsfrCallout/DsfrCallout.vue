<script>
import { defineComponent } from 'vue'

import DsfrButton from '../DsfrButton/DsfrButton.vue'

export default defineComponent({
  name: 'DsfrCallout',

  components: {
    DsfrButton,
  },

  props: {
    title: {
      type: String,
      default: 'Titre somptueusement mis en avant',
    },
    content: {
      type: String,
      default: 'Contenu admirablement mis en avant',
    },
    icon: {
      type: String,
      default: undefined,
    },
    button: {
      type: Object,
      default: () => undefined,
      required: false,
    },
  },
})
</script>

<template>
  <div class="fr-callout">
    <div
      class="fr-mt-n2w  fr-mb-2w  fr-ml-n4w"
    />

    <p class="fr-callout__title">
      {{ title }}
    </p>

    <p class="fr-callout__text">
      {{ content }}
    </p>

    <DsfrButton
      v-if="button"
      v-bind="button"
      @click="button.onClick"
    />

    <!-- @slot Slot par défaut pour le contenu de la mise en avant. Sera dans `<div class="fr-callout">` -->
    <slot />
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/callout/callout.main.min.css"></style>

<style scoped>
.fr-callout__text {
  color: var(--text-default-grey);
}
</style>
