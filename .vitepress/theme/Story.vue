<script setup lang="ts">
import { ref, watchEffect, watch, onMounted } from 'vue'
import { useData } from 'vitepress'

const iframe = ref<HTMLIFrameElement>()
const { isDark } = useData()

withDefaults(defineProps<{
  minH?: string
  dark?: boolean
  storyTitle?: string
}>(), {
  minH: '240px',
  storyTitle: 'Story',
})

watchEffect(() => {
  const { contentDocument: doc, contentWindow: win } = iframe.value || {}
  if (!doc || !win) return

  const css = doc.createElement('style')
  css.appendChild(doc.createTextNode(`*{transition:none!important}`))
  doc.head.appendChild(css)

  doc.documentElement.setAttribute('data-fr-theme', isDark.value ? 'dark' : 'light')

  const _ = win.getComputedStyle(css).opacity
  doc.head.removeChild(css)
})

onMounted(() => {
  setTimeout(() => {
    const { contentDocument: doc, contentWindow: win } = iframe.value || {}
    if (!doc || !win) return

    doc.documentElement.setAttribute('data-fr-theme', isDark.value ? 'dark' : 'light')
  }, 1000)
})
</script>

<template>
  <div class="vp-block active" >
    <iframe data-why :title="storyTitle" ref="iframe">
      <slot></slot>
    </iframe>
  </div>
</template>

<style scoped>
iframe[data-why] {
  border: 0;
  width: calc(100% + 48px);
  min-height: v-bind(minH);
  margin: -20px -24px;
  visibility: hidden;
}
</style>
