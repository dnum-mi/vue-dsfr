<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrFileDownload',

  props: {
    title: {
      type: String,
      default: 'Télécharger le document',
    },
    format: {
      type: String,
      default: 'JPEG',
    },
    size: {
      type: String,
      default: '250 Ko',
    },
    href: {
      type: String,
      default: '#',
    },
    description: {
      type: String,
      default: '',
    },
    block: Boolean,
  },
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
        download
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

<style src="@gouvfr/dsfr/dist/component/download/download.min.css" />
