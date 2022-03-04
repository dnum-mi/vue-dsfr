<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrHighlight',

  props: {
    text: {
      type: String,
      default: undefined,
    },
    small: Boolean,
    large: Boolean,
  },
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
    </p>
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/highlight/highlight.main.css" />
