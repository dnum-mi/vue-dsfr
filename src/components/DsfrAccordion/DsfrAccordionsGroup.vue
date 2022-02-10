<script setup>
import { ref } from 'vue'

const expandedId = ref(undefined)
</script>

<template>
  <ul
    class="fr-accordions-group"
    @expand="id => expandedId = id"
  >
    <!-- @slot Slot par défaut pour le contenu de la liste. Sera dans `<ul class="fr-accordions-group">` -->
    <slot :expanded-id="expandedId" />
  </ul>
</template>
