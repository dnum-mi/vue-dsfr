<script setup lang="ts">
withDefaults(defineProps<{
  href: string
  rel?: string
  target?: string
  icon?: string | {
    name: string
    size?: number
    color?: string
  }
  iconLeft: string | {
    name: string
    size?: number
    color?: string
  }
}>(), {
  rel: 'noreferrer',
  target: '_blank',
})
</script>

<template>
  <a :href="href" :target="target" :rel="rel">
    <Icon v-if="iconLeft" v-bind="typeof iconLeft == 'object' ? iconLeft : { name: iconLeft }" />
    <slot />
    <Icon v-if="icon" v-bind="typeof icon == 'object' ? icon : { name: icon }" />
  </a>
</template>
