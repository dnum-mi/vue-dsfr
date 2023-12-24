<script setup lang="ts">
import { type OhVueIcon as VIcon } from 'oh-vue-icons'

withDefaults(defineProps<{
  href: string
  rel?: string
  target?: string
  internal?: boolean
  icon?: string | InstanceType<typeof VIcon>['$props']
  iconLeft: string | InstanceType<typeof VIcon>['$props']
}>(), {
  rel: 'noopener noreferrer',
  target: '_blank',
})
</script>

<template>
  <a :href="href" :target="internal ? undefined : target" :rel="internal ? undefined : rel">
    <VIcon v-if="iconLeft" style="margin-right: 0.125rem;" v-bind="typeof iconLeft == 'object' ? iconLeft : { name: iconLeft }" />
    <slot />
    <VIcon v-if="icon" style="margin-left: 0.125rem;" v-bind="typeof icon == 'object' ? icon : { name: icon }" />
  </a>
</template>
