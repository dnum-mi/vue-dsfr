<script>
import DsfrButton from '../DsfrButton/DsfrButton.vue'

export default {
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
}
</script>

<template>
  <div class="fr-callout">
    <div
      class="fr-mt-n2w  fr-mb-2w  fr-ml-n4w"
    >
      <VIcon
        v-if="icon"
        :name="icon"
        scale="1.25"
        color="var(--g800)"
      />
    </div>

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

    <slot />
  </div>
</template>

<style src="./callouts.css"></style>

<style scoped>
.fr-callout__text {
  color: var(--g800);
}
</style>
