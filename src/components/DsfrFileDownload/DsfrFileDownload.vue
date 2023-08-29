<script lang="ts" setup>
export type DsfrFileDownloadProps = {
  title?: string
  format?: string
  size?: string
  href?: string
  download?: string
}

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
