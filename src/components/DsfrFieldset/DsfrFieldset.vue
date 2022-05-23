<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrFieldset',

  props: {
    legend: {
      type: String,
      default: '',
    },
    legendClass: {
      type: [String, Object],
      default: '',
    },
    legendId: {
      type: String,
      default: undefined,
    },
    hint: {
      type: String,
      default: '',
    },
    hintClass: {
      type: [String, Object],
      default: '',
    },
  },
})
</script>

<template>
  <fieldset class="fr-fieldset">
    <legend
      v-if="legend || $slots.legend?.().length"
      :id="legendId"
      class="fr-fieldset__legend"
      :class="legendClass"
    >
      {{ legend }}
      <!-- @slot Slot pour le contenu du titre du `fieldset` (sera dans `<legend class="fr-fieldset__legend">`). Une props du même nom est utilisable pour du texte simple sans mise en forme. -->
      <slot name="legend" />
    </legend>
    <span
      v-if="hint || $slots.hint?.().length"
      class="fr-hint-text"
      :class="hintClass"
    >
      {{ hint }}
      <!-- @slot Slot pour le contenu de l’indice (sera dans `<span class="fr-hint-text">` qui sera dans `</legend>`). Une **props du même nom est utilisable pour du texte simple** sans mise en forme. -->
      <slot name="hint" />
    </span>

    <!-- @slot Slot par défaut pour le contenu du fieldset (sera dans `<fieldset>`, après `</legend>`) -->
    <slot />
  </fieldset>
</template>
