<script lang="ts" setup>
export type DsfrFileDownloadProps = {
  title?: string
  format?: string
  size?: string
  href?: string
  download?: string
  description?: string
  block?: boolean
}

withDefaults(defineProps<DsfrFileDownloadProps>(), {
  title: 'Télécharger le document',
  format: 'JPEG',
  size: '250 Ko',
  href: '#',
  download: '',
  description: '',
})
</script>

<template>
  <div
    class="fr-download"
    :class="{ 'fr-enlarge-link fr-download--card': block }"
  >
    <p>
      <a
        :href="href"
        :download="download"
        class="fr-download__link"
      > {{ title }}
        <span class="fr-download__detail">
          {{ format }} – {{ size }}
        </span>
      </a>
    </p>
    <p
      v-if="block"
      class="fr-download__desc"
    >
      {{ description }}
    </p>
  </div>
</template>
