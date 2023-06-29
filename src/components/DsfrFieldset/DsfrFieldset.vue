<script lang="ts" setup>
withDefaults(defineProps<{
  legend?: string
  legendClass?: string
  legendId?: string
  hint?: string
  hintClass?: string
}>(), {
  legend: '',
  legendId: '',
  legendClass: '',
  hint: '',
  hintClass: '',
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
    <div
      v-if="hint || $slots.hint?.().length"
      class="fr-fieldset__element"
    >
      <span
        class="fr-hint-text"
        :class="hintClass"
      >
        {{ hint }}
        <!-- @slot Slot pour le contenu de l’indice (sera dans `<span class="fr-hint-text">` qui sera dans `</legend>`). Une **props du même nom est utilisable pour du texte simple** sans mise en forme. -->
        <slot name="hint" />
      </span>
    </div>
    <!-- @slot Slot par défaut pour le contenu du fieldset (sera dans `<fieldset>`, après `</legend>`) -->
    <div class="fr-fieldset__element">
      <slot />
    </div>
  </fieldset>
</template>
