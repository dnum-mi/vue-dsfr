<script lang="ts" setup>
defineProps<{secure: boolean}>()
</script>

<template>
  <div class="fr-connect-group">
    <button
      :class="secure ? 'fr-connect fr-connect--plus' : 'fr-connect'"
    >
      <span class="fr-connect__login">S’identifier avec</span>
      <span
        class="fr-connect__brand"
      >FranceConnect{{ secure ? '+' : '' }}</span>
    </button>
    <p>
      <a
        :href="secure ? 'https://franceconnect.gouv.fr/france-connect-plus' : 'https://franceconnect.gouv.fr/'"
        target="_blank"
        rel="noopener noreferrer"
        :title="secure ? 'Qu’est ce que FranceConnect+ ? - nouvelle fenêtre' : 'Qu’est ce que FranceConnect ? - nouvelle fenêtre'"
      >Qu’est-ce que France Connect{{ secure ? '+' : '' }} ?</a>
    </p>
  </div>
</template>
