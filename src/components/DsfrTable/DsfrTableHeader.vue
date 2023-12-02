<script lang="ts" setup>
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import type { DsfrTableHeaderProps } from './DsfrTable.types'

export type { DsfrTableHeaderProps }

withDefaults(defineProps<DsfrTableHeaderProps>(), {
  header: '',
  headerAttrs: () => ({}),
  icon: undefined,
})
</script>

<template>
  <th
    v-bind="headerAttrs"
    scope="col"
  >
    {{ header }}
    <VIcon
      v-if="icon && icon.name"
      v-bind="icon"
    />
  </th>
</template>
