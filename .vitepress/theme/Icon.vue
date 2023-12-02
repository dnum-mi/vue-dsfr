<script setup lang="ts">
import { computed } from 'vue';
import * as icons from "lucide-vue-next";

const props = withDefaults(defineProps<{
  name: string
  size?: number
  color?: string
  strokeWidth?: number
  defaultClass?: string
  display?: string
  isLeft?: boolean
}>(), {
  size: 20,
  color: 'currentColor',
  strokeWidth: 1.5,
  defaultClass: 'icon',
  display: 'inline'
})

const icon = computed(() => icons[props.name]);
</script>

<template>
  <component
    :style="{ display: display ?? 'inline', verticalAlign: 'middle', [isLeft ? 'marginRight' : 'marginLeft']: '0.25rem' }"
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth" :default-class="defaultClass"
  />
</template>
