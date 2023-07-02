<script lang="ts" setup>
import DsfrButton, { type DsfrButtonProps } from '../DsfrButton/DsfrButton.vue'

withDefaults(defineProps<{
  title: string
  content: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  button?: DsfrButtonProps
  icon?: string
}>(), {
  // @ts-ignore this is really undefined
  button: () => undefined,
  titleTag: 'h3',
  icon: undefined,
})
</script>

<template>
  <div class="fr-callout">
    <div
      class="fr-mt-n2w  fr-mb-2w  fr-ml-n4w"
    />

    <component
      :is="titleTag"
      class="fr-callout__title"
    >
      {{ title }}
    </component>

    <p class="fr-callout__text">
      {{ content }}
    </p>

    <DsfrButton
      v-if="button"
      v-bind="button"
    />

    <!-- @slot Slot par défaut pour le contenu de la mise en avant. Sera dans `<div class="fr-callout">` -->
    <slot />
  </div>
</template>

<style scoped>
.fr-callout__text {
  color: var(--text-default-grey);
}
</style>
