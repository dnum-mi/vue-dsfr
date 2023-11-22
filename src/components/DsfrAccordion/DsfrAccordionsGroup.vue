<script setup lang="ts">
import { ref } from 'vue'

const expandedId = ref<string>()

const expand = (id: string): void => { expandedId.value = id }
</script>

<template>
  <ul
    class="fr-accordions-group"
    @expand="expand($event)"
  >
    <!-- @slot Slot par défaut pour le contenu de la liste. Sera dans `<ul class="fr-accordions-group">` -->
    <slot :expanded-id="expandedId" />
  </ul>
</template>
