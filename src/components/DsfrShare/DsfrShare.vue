<script>
export default {
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
}
</script>

<template>
  <div class="fr-share">
    <p class="fr-share__title">
      {{ title }}
    </p>
    <ul class="fr-share__group">
      <li
        v-for="(network, i) of networks"
        :key="i"
      >
        <a
          :class="`fr-share__link fr-share__link--${network.name}`"
          :title="`${network.label} - nouvelle fenêtre`"
          :href="network.url"
          target="_blank"
          rel="noopener"
          @click.prevent="window.open(network.url, network.label, 'toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=450')"
        >
          {{ network.label }}
        </a>
      </li>
      <li v-if="mail">
        <a
          class="fr-share__link fr-share__link--mail"
          :href="mail.to"
          :title="mail.label"
          target="_blank"
        >
          {{ mail.label }}
        </a>
      </li>
      <li>
        <button
          class="fr-share__link fr-share__link--copy"
          :title="copyLabel"
          @click="navigator.clipboard.writeText(window.location)"
        >
          {{ copyLabel }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/share/share.main.css" />
