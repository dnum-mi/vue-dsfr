<script lang="ts" setup>
import { computed } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { getRandomId } from '../../utils/random-utils'
import { RouteLocationNormalized } from 'vue-router'

export type DsfrNavigationMenuLinkProps = {
  id?: string,
  to: string | RouteLocationNormalized,
  text: string,
  icon?: string,
  onClick?: ($event: MouseEvent) => void
}

const props = withDefaults(defineProps<DsfrNavigationMenuLinkProps>(), {
  id: () => getRandomId('menu-link'),
  icon: undefined,
  onClick: () => undefined,
})

defineEmits<{(event: 'toggle-id', id: string): void}>()

const isExternal = computed(() => typeof props.to === 'string' && props.to.startsWith('http'))
</script>

<template>
  <a
    v-if="isExternal"
    class="fr-nav__link"
    data-testid="nav-external-link"
    :href="to"
    @click="$emit('toggle-id', id)"
  >
    {{ text }}
  </a>
  <RouterLink
    v-else
    class="fr-nav__link"
    data-testid="nav-router-link"
    :to="to"
    @click="$emit('toggle-id', id)"
  >
    <VIcon
      v-if="icon"
      :name="icon"
    />
    {{ text }}
  </RouterLink>
</template>
