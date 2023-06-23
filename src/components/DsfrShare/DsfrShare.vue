<script lang="ts" setup>
withDefaults(defineProps<{
  title?: string
  copyLabel: string
  mail: { label: string, to: string }
  networks: { name: string, label: string, url: string }[]
}>(), {
  title: 'Partager la page',
  copyLabel: 'Copier dans le presse-papier',
  mail: () => undefined,
  networks: () => [],
})

const copyLocationToClipboard = () => {
  const url = window.location.href
  navigator.clipboard.writeText(url)
}
const openWindow = ({ url, label }) => {
  window.open(
    url,
    label,
    'toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=450',
  )
}
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
