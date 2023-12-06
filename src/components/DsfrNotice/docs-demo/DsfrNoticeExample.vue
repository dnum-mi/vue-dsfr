<script lang="ts" setup>
import DsfrNotice from '../DsfrNotice.vue'
import DsfrButton from '../../DsfrButton/DsfrButton.vue';
import { ref } from 'vue'

const isClosed = ref(false)
</script>

<template>
  <DsfrNotice
    v-if="!isClosed"
    :closeable="true"
    @close="() => isClosed = true"
  >
    Titre du bandeau, <a href='/composants/DsfrNotice' rel='noopener' target='_blank'>lien au fil du texte</a>
  </DsfrNotice>
  <div v-if="isClosed">
    <p>Le bandeau d’information a été fermé.</p>
    <DsfrButton
      label="Afficher le bandeau d'information"
      @click="() => isClosed = false"
    />
  </div>
</template>
