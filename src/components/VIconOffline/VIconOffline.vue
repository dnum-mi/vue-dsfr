<script lang="ts" setup>
import type { VIconOfflineProps } from './VIconOffline.types'
import type { IconifyIcon } from '@iconify/vue'

import { Icon } from '@iconify/vue/offline'
import { computed, inject } from 'vue'

import { resolveOfflineIcon } from '../../utils/resolve-offline-icon'

import { vueDsfrIconCollectionsKey } from './injection-key'

export type { VIconOfflineProps } from './VIconOffline.types'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<VIconOfflineProps>()
const collections = inject(vueDsfrIconCollectionsKey, [])

const icon = computed<IconifyIcon | null>(() => resolveOfflineIcon(props.name, collections))
</script>

<template>
  <Icon
    v-if="icon"
    v-bind="$attrs"
    :icon="icon"
    :aria-hidden="label || title ? false : true"
    :aria-label="label ?? title"
    :title
    mode="svg"
  />
</template>
