<script lang="ts" setup>
import type { DsfrErrorPageProps } from './DsfrErrorPage.types'

import DsfrButtonGroup from '../DsfrButton/DsfrButtonGroup.vue'

export type { DsfrErrorPageProps }

/**
 * @slot default - Slot par défaut : sera après ou à la place des boutons
 */
defineSlots<{
  default?: () => any
}>()

withDefaults(defineProps<DsfrErrorPageProps>(), {
  title: 'Page non trouvée',
  subtitle: 'Erreur 404',
  description: 'La page que vous cherchez est introuvable. Excusez-nous pour la gêne occasionnée.',
  help: 'Si vous avez tapé l\'adresse web dans le navigateur, vérifiez qu\'elle est correcte. La page n\'est peut être plus disponible.',
  buttons: undefined,
})
</script>

<template>
  <div class="fr-container  flex">
    <div class="half">
      <h1 class="fr-h1">
        {{ title }}
      </h1>
      <span class="flex fr-my-md-3w">{{ subtitle }}</span>
      <p class="fr-h6">
        {{ description }}
      </p>
      <p>{{ help }}</p>
      <DsfrButtonGroup
        v-if="buttons?.length"
        :buttons="buttons"
        inline-layout-when="always"
      />
      <slot />
    </div>
    <div class="half  self-center  text-center">
      <img
        class="error-img"
        src="../../assets/img/technical-error.png"
      >
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}

.half {
  max-width: 50%;
  width: 50%;
}

.self-center {
  align-self: center;
}

.text-center {
  text-align: center;
}
</style>
