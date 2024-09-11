<script lang="ts" setup>
import { ref } from 'vue'

import type { VIconProps } from '@/components/VIcon/VIcon.types'
import DsfrButton from '../../DsfrButton/DsfrButton.vue'
import DsfrCallout from '../DsfrCallout.vue'

const title = 'Titre de la mise en avant'
const button = undefined
const icon = 'ri:notification-3-line'
const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol'
const titleTag = undefined

const animateTitle = 'Titre de la mise en avant stylée'
const animatedIcon: VIconProps = { name: 'bi:bell', animation: 'ring' }
const animatedtitleTag = 'h4'
const buttonIcon = ref<VIconProps>({ name: 'ri-refresh-line', animation: 'spin' })
const possibleAnimations = ['spin', 'wrench', 'pulse', 'spin-pulse', 'flash', 'float', 'ring'] as const
const getRandomNb = (max = 1000, min = 0) => Math.floor(min + Math.random() * (max + 1 - min))
function getRandomEl<T> (x: readonly T[]): T | undefined {
  if (x.length === 0) {
    return undefined
  }
  return x.at(getRandomNb(x.length - 1))
}
const getRandomAnimation = () => getRandomEl<(typeof possibleAnimations)[number]>(possibleAnimations)
</script>

<template>
  <DsfrCallout
    :title="`${title} (${titleTag ?? 'h3'})`"
    :content="content"
    :button="button"
    :icon="icon"
    :title-tag="titleTag"
  />
  <DsfrCallout
    :title="`${animateTitle} (${animatedtitleTag ?? 'h3'})`"
    :button="button"
    :icon="animatedIcon"
    :title-tag="animatedtitleTag"
  >
    Contenu <em>élaboré</em> avec d’autres composants
    <DsfrButton
      type="button"
      :label="`(${buttonIcon.animation}) Cliquez-moi pour changer l’animation de l’icône !`"
      :icon="buttonIcon"
      @click="buttonIcon.animation = getRandomAnimation()"
    />
  </DsfrCallout>
</template>
