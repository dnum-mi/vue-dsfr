<script lang="ts" setup>
import type { DsfrFranceConnectProps } from './DsfrFranceConnect.types'

export type { DsfrFranceConnectProps }

defineProps<DsfrFranceConnectProps>()
</script>

<template>
  <div class="fr-connect-group">
    <button
      class="fr-connect"
      :class="[{ 'fr-connect--plus': secure }]"
    >
      <span class="fr-connect__login">S’identifier avec </span>
      <span
        class="fr-connect__brand"
      >FranceConnect</span>
    </button>
    <p>
      <a
        :href="url ?? `https://franceconnect.gouv.fr/${secure ? 'france-connect-plus' : ''}`"
        target="_blank"
        rel="noopener noreferrer"
        :title="`Qu’est-ce que FranceConnect${secure ? '+' : ''} ? - nouvelle fenêtre`"
      >{{ `Qu’est-ce que FranceConnect${secure ? '+' : ''} ?` }}</a>
    </p>
  </div>
</template>
