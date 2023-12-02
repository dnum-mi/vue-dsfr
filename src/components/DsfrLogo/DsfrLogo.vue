<script lang="ts" setup>
import { computed } from 'vue'

import type { DsfrLogoProps } from './DsfrLogo.types'

export type { DsfrLogoProps }

const props = withDefaults(defineProps<DsfrLogoProps>(), {
  logoText: () => 'Gouvernement',
})

const text = computed(() => props.logoText instanceof Array ? props.logoText.join('<br>') : props.logoText)
</script>

<template>
  <p
    class="fr-logo"
    :class="{
      'fr-logo--sm': small && !large,
      'fr-logo--lg': large && !small,
    }"
    v-html="text"
  />
</template>
