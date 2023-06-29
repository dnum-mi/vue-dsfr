<script lang="ts" setup>
withDefaults(defineProps<{
  text?: string
  small?: boolean
  large?: boolean
}>(), {
  text: undefined,
})
</script>

<template>
  <div class="fr-highlight">
    <p
      :class="{
        'fr-text--lg': large && !small,
        'fr-text--sm': small && !large,
      }"
    >
      {{ text }}
      <!-- @slot Slot par défaut pour le contenu de la mise en exergue -->
      <slot />
    </p>
  </div>
</template>
