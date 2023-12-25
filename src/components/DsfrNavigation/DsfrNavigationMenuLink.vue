<script lang="ts" setup>
import { computed } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import { getRandomId } from '../../utils/random-utils'

import type { DsfrNavigationMenuLinkProps } from './DsfrNavigation.types'

export type { DsfrNavigationMenuLinkProps }

const props = withDefaults(defineProps<DsfrNavigationMenuLinkProps>(), {
  id: () => getRandomId('menu-link'),
  icon: undefined,
  onClick: () => undefined,
  text: '',
  to: '#',
})

defineEmits<{(event: 'toggle-id', id: string): void}>()

const isExternal = computed(() => typeof props.to === 'string' && props.to.startsWith('http'))
const dsfrIcon = computed(() => props.icon && typeof props.icon === 'string' && props.icon.startsWith('fr-icon-'))
const defaultScale = 2
const iconProps = computed(() => (dsfrIcon.value || !props.icon)
  ? undefined
  : (typeof props.icon === 'string')
      ? { scale: defaultScale, name: props.icon }
      : { scale: defaultScale, ...((props.icon as Record<string, string>) || {}) },
)
</script>

<template>
  <a
    v-if="isExternal"
    class="fr-nav__link"
    data-testid="nav-external-link"
    :href="(to as string)"
    @click="$emit('toggle-id', id)"
  >
    {{ text }}
  </a>
  <RouterLink
    v-else
    class="fr-nav__link"
    data-testid="nav-router-link"
    :to="to"
    :class="{
      [String(icon)]: dsfrIcon,
    }"
    @click="$emit('toggle-id', id)"
  >
    <VIcon
      v-if="iconProps"
      v-bind="iconProps"
    />
    {{ text }}
  </RouterLink>
</template>
