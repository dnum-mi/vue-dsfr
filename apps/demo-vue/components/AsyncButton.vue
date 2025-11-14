<script lang="ts" setup>
import type { DsfrButtonProps } from '@gouvminint/vue-dsfr'

import { DsfrButton } from '@gouvminint/vue-dsfr'

defineProps<DsfrButtonProps & { isLoading: boolean }>()
</script>

<template>
  <DsfrButton v-bind="$props">
    <slot />
  </DsfrButton>
  <Transition
    name="x"
    mode="out-in"
  >
    <DsfrButton
      v-if="isLoading"
      class="wrapper"
      @click.prevent
    >
      <VIcon
        name="ri-loader-4-line"
        animation="spin"
      />
    </DsfrButton>
  </Transition>
</template>

<style scoped>
.x-enter-active, .x-leave-active {
  transition: all 0.3s ease-in-out;
  width: 3.25rem;
  opacity: 0.8;
  padding-inline: 0.5rem;
  margin-inline: 0;
}
.x-enter-from, .x-leave-to {
  width: 0;
  opacity: 0;
  padding-inline: 0;
  margin-inline: 0;
}

.wrapper {
  opacity: 0.8;
}
</style>
