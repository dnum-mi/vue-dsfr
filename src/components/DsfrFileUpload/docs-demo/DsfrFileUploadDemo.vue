<script lang="ts" setup>
import DsfrFileUpload from '../DsfrFileUpload.vue'

const handleFileChange = (files: FileList) => {
  console.log(files) // eslint-disable-line no-console
}
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrFileUpload
      label="Télécharger une photo"
      hint="Formats acceptés : .jpg, .png"
      :accept="['.jpg', '.png']"
      @change="handleFileChange"
    />
    (regardez la console pour voir les fichiers sélectionnés)

    <DsfrFileUpload
      label="Télécharger une photo"
      hint="Formats acceptés : .jpg, .png"
      readonly
      accept=".pdf,.doc"
      @change="handleFileChange"
    />
    (regardez la console pour voir les fichiers sélectionnés)
  </div>
</template>
