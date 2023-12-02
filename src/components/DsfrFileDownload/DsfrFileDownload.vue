<script lang="ts" setup>
import type { DsfrFileDownloadProps } from './DsfrFileDownload.types'

export type { DsfrFileDownloadProps }

withDefaults(defineProps<DsfrFileDownloadProps>(), {
  title: 'Télécharger le document',
  format: 'JPEG',
  size: '250 Ko',
  href: '#',
  download: '',
})
</script>

<template>
  <a
    :href="href"
    :download="download"
    class="fr-link  fr-link--download"
  > {{ title }}
    <span class="fr-link__detail">
      {{ format }} – {{ size }}
    </span>
  </a>
</template>
