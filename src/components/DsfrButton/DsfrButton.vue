<script lang="ts" setup>
import { type Ref, computed, ref } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

// import '@gouvfr/dsfr/dist/component/button/button.module.js'

export type DsfrButtonProps = {
  disabled?: boolean
  label?: string
  secondary?: boolean
  tertiary?: boolean
  iconRight?: boolean
  iconOnly?: boolean
  noOutline?: boolean
  size?: 'sm' | 'small' | 'lg' | 'large' | 'md' | 'medium' | '' | undefined
  icon?: string
  onClick?: ($event: MouseEvent) => void
}

const props = withDefaults(defineProps<DsfrButtonProps>(), {
  size: 'md',
  icon: undefined,
  label: undefined,
  onClick: () => undefined,
})

const sm = computed(() => ['sm', 'small'].includes(props.size))
const md = computed(() => ['md', 'medium'].includes(props.size))
const lg = computed(() => ['lg', 'large'].includes(props.size))

const btn: Ref<{focus: () => void} | null> = ref(null)
const focus = () => {
  btn.value?.focus()
}
defineExpose({ focus })
</script>

<template>
  <button
    ref="btn"
    :class="{
      'fr-btn': true,
      'fr-btn--secondary': secondary && !tertiary,
      'fr-btn--tertiary': tertiary && !secondary && !noOutline,
      'fr-btn--tertiary-no-outline': tertiary && !secondary && noOutline,
      'fr-btn--sm': sm,
      'fr-btn--md': md,
      'fr-btn--lg': lg,
      'inline-flex': true,
      'reverse': iconRight,
      'justify-center': iconOnly,
    }"
    :title="iconOnly ? label : undefined"
    :disabled="disabled"
    :aria-disabled="disabled"
    @click="onClick ? onClick($event) : () => {}"
  >
    <VIcon
      v-if="icon"
      :name="icon"
    />
    <span v-if="!iconOnly">
      {{ label }}
      <!-- @slot Slot par défaut pour le contenu du bouton. Sera dans `<button class="fr-btn"><span">` -->
      <slot />
    </span>
  </button>
</template>

<style scoped>
.inline-flex {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.reverse {
  flex-direction: row-reverse;
}
</style>
