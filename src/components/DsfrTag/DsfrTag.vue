<script lang="ts" setup>
import { computed } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

// TODO: Pourquoi icône 'check' quand on utilise ce js et qu’on clique sur le premier ?
// D’autre part, pour les étiquettes sélectionnables posent problème : le JS n’est pas
// import '@gouvfr/dsfr/dist/component/tag/tag.module.js'

export type DsfrTagProps = {
  label? : string
  link? : string
  tagName?: string
  icon? : string
  selected? : boolean
  disabled? : boolean
  small? : boolean
  iconOnly? : boolean
}

const props = withDefaults(defineProps<DsfrTagProps>(), {
  label: undefined,
  link: undefined,
  tagName: 'p',
  icon: undefined,
})

const isExternalLink = computed(() => {
  return typeof props.link === 'string' && props.link.startsWith('http')
})
const is = computed(() => {
  return props.link
    ? (isExternalLink.value ? 'a' : 'RouterLink')
    : ((props.disabled && props.tagName === 'p') ? 'button' : props.tagName)
})
const linkProps = computed(() => {
  return { [isExternalLink.value ? 'href' : 'to']: props.link }
})
</script>

<template>
  <component
    :is="is"
    class="fr-tag"
    :disabled="disabled"
    :class="{
      'fr-tag--sm': small,
    }"
    :aria-pressed="selected"
    v-bind="linkProps"
  >
    <VIcon
      v-if="icon"
      :name="icon"
      :label="iconOnly ? label : undefined"
      :scale="0.9"
    />
    <span v-if="!iconOnly">{{ label }}</span>
    <slot />
  </component>
</template>

<style scoped>
.ov-icon {
  margin-top: 0.1rem;
}

.fr-tag {
  align-items: center;
}

.success {
  color: var(--success);
  background-color: var(--bg-success);
}
.error {
  color: var(--error);
  background-color: var(--bg-error);
}
.warning {
  color: var(--warning);
  background-color: var(--bg-warning);
}
.info {
  color: var(--info);
  background-color: var(--bg-info);
}
</style>
