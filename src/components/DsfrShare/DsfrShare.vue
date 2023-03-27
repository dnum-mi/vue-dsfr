<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrShare',

  props: {
    title: {
      type: String,
      default: 'Partager la page',
    },
    copyLabel: {
      type: String,
      default: 'Copier dans le presse-papier',
    },
    mail: {
      type: Object,
      default: () => undefined,
    },
    networks: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    copyLocationToClipboard () {
      const url = window.location.href
      navigator.clipboard.writeText(url)
    },
    openWindow ({ url, label }) {
      window.open(
        url,
        label,
        'toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=450',
      )
    },
  },
})
</script>

<template>
  <div class="fr-share">
    <p class="fr-share__title">
      {{ title }}
    </p>
    <ul class="fr-btns-group">
      <li
        v-for="(network, i) of networks"
        :key="i"
      >
        <a
          :class="`fr-btn fr-btn--${network.name}`"
          :title="`${network.label} - nouvelle fenêtre`"
          :href="network.url"
          target="_blank"
          rel="noopener noreferrer"
          @click.prevent="openWindow(network)"
        >
          {{ network.label }}
        </a>
      </li>
      <li v-if="mail">
        <a
          class="fr-btn fr-btn--mail"
          :href="mail.to"
          :title="mail.label"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ mail.label }}
        </a>
      </li>
      <li>
        <button
          class="fr-btn fr-btn--copy"
          :title="copyLabel"
          @click="copyLocationToClipboard()"
        >
          {{ copyLabel }}
        </button>
      </li>
    </ul>
  </div>
</template>
