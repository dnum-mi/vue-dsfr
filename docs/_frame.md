---
layout: false
---

<div ref="el" class="flex h-4 flex-col justify-center px-6 pb-5"></div>

<script setup lang="ts">
import { useStyleTag } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { createApp } from 'whyframe:app'

import dsfrStyles from '@gouvfr/dsfr/dist/dsfr.min.css?inline'

import * as icons from '../src/icons'

useStyleTag(dsfrStyles, { id: 'dsfr' })

const el = ref<HTMLDivElement>()

onMounted(() => {
  if (!el.value || !window.frameElement) return
  document.documentElement.classList.add('vp-raw')
  createApp(el.value)
  ;(window.frameElement as HTMLIFrameElement).style.visibility = 'visible'
})
</script>
