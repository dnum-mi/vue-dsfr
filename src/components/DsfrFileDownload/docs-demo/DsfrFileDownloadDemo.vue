<script lang="ts" setup>
import { ref } from 'vue'
import DsfrFileDownload from '../DsfrFileDownload.vue'

const format = ref('PDF')
const size = ref('1Mo')
const href = ref('#')
const download = ref('')
const title = ref('Télécharger le manuel d\'utilisation du grille pain Malinox')

</script>

<template>
  <DsfrFileDownload
    :format="format"
    :size="size"
    :href="href"
    :download="download"
    :title="title"
  />
</template>
