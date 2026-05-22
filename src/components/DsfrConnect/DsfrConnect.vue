<script lang="ts" setup>
import type { DsfrConnectProps } from './DsfrConnect.types'

import { computed } from 'vue'

import { connectI18n } from './DsfrConnect.i18n'

export type { DsfrConnectProps }

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DsfrConnectProps>(), {
  lang: 'fr',
})

const i18n = computed(() => connectI18n[props.lang ?? 'fr']?.[props.variant ?? 'default'])

const variantConfig = computed<{ href: string, brand: string }>(() => {
  if (props.variant === 'pro') {
    return { brand: 'ProConnect', href: 'https://franceconnect.gouv.fr/france-connect-pro' }
  }
  if (props.variant === 'plus') {
    return { brand: 'FranceConnect', href: 'https://franceconnect.gouv.fr/france-connect-plus' }
  }
  return { brand: 'FranceConnect', href: 'https://franceconnect.gouv.fr/' }
})
</script>

<template>
  <div class="fr-connect-group">
    <button
      v-bind="$attrs"
      type="button"
      class="fr-connect"
      :class="props.variant ? `fr-connect--${props.variant}` : undefined"
    >
      <span class="fr-connect__login">{{ i18n.logotext }} </span>
      <span
        class="fr-connect__brand"
      >{{ variantConfig.brand }}</span>
    </button>
    <p>
      <a
        :href="variantConfig.href"
        target="_blank"
        rel="noopener noreferrer"
        :title="i18n.text"
      >
        {{ i18n.text }}
        <span class="fr-sr-only">{{ i18n.newWindow }}</span>
      </a>
    </p>
  </div>
</template>
