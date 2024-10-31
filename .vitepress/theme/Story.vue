<script setup lang="ts">
import { useData } from 'vitepress'
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'

import { useScheme, type UseSchemeResult } from '../../src/index'

withDefaults(defineProps<{
  minH?: string
  dark?: boolean
  storyTitle?: string
}>(), {
  minH: '100px',
  storyTitle: 'Story',
})
const iframe = ref<HTMLIFrameElement>()
const { isDark } = useData()

watchEffect(() => {
  const { contentDocument: doc, contentWindow: win } = iframe.value || {}
  if (!doc || !win) { return }

  const css = doc.createElement('style')
  css.appendChild(doc.createTextNode(`*{transition:none!important}`))
  doc.head.appendChild(css)

  doc.documentElement.setAttribute('data-fr-theme', isDark.value ? 'dark' : 'light')

  const _ = win.getComputedStyle(css).opacity
  doc.head.removeChild(css)
})

let observer: MutationObserver | undefined
let target
const options = {
  subtree: false,
  childList: false,
  attributes: true,
}

onMounted(() => {
  setTimeout(() => {
    const { contentDocument: doc, contentWindow: win } = iframe.value || {}
    if (!doc || !win) { return }

    target = doc.documentElement

    const { scheme, setScheme } = useScheme() as UseSchemeResult
    doc.documentElement.setAttribute('data-fr-theme', isDark.value ? 'dark' : 'light')
    setScheme(isDark.value ? 'dark' : 'light')
    observer = new MutationObserver((mutationList /* , observer */) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-fr-theme') {
          const newScheme = (mutation.target as HTMLElement).getAttribute(mutation.attributeName) as 'light' | 'dark'
          if (newScheme !== scheme.value) {
            setScheme(newScheme)
          }
        }
      }
    })

    observer.observe(target, options)
  }, 1000)
})

onUnmounted(() => observer && observer.disconnect())
</script>

<template>
  <div class="vp-block active">
    <iframe
      ref="iframe"
      data-why
      :title="storyTitle"
    >
      <slot />
    </iframe>
  </div>
</template>

<style scoped>
iframe[data-why] {
  border: 0;
  width: 100%;
  min-height: v-bind(minH);
  visibility: hidden;
}
</style>
