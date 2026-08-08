<script lang="ts" setup>
import type { VIconOfflineProps } from './VIconOffline.types'
import type { IconifyIcon } from '@iconify/vue'

import { Icon } from '@iconify/vue/offline'
import { computed, inject } from 'vue'

import { vueDsfrIconCollectionsKey } from './injection-key'

export type { VIconOfflineProps } from './VIconOffline.types'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<VIconOfflineProps>()
const collections = inject(vueDsfrIconCollectionsKey, [])

const icon = computed<IconifyIcon | null>(() => {
  const separatorIndex = props.name.indexOf(':')
  if (separatorIndex <= 0 || separatorIndex === props.name.length - 1) {
    return null
  }

  const prefix = props.name.slice(0, separatorIndex)
  const iconName = props.name.slice(separatorIndex + 1)
  const collection = collections.find(item => item.prefix === prefix)
  const iconData = collection?.icons[iconName]

  if (!collection || !iconData) {
    return null
  }

  return {
    ...iconData,
    height: iconData.height ?? collection.height,
    left: iconData.left ?? collection.left,
    top: iconData.top ?? collection.top,
    width: iconData.width ?? collection.width,
  }
})
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
