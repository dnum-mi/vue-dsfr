<script lang="ts" setup>
import { type ThHTMLAttributes } from 'vue'
import { type CustomizeIconType, OhVueIcon as VIcon } from 'oh-vue-icons'

export type DsfrTableHeaderProps = {
  header?: string
  headerAttrs?: ThHTMLAttributes & { onClick?: (e: MouseEvent) => void }
  icon?: CustomizeIconType
}

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
