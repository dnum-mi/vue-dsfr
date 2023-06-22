
<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  small?: boolean
  large?: boolean
  logoText?: string | string[]
}>(), {
  logoText: () => 'Gouvernement',
})

const text = computed(() => props.logoText instanceof Array ? props.logoText.join('<br>') : props.logoText)
</script>

<template>
  <p
    class="fr-logo"
    :class="{
      'fr-logo--sm': small && !large,
      'fr-logo--lg': large && !small,
    }"
    v-html="text"
  />
</template>
