<script lang="ts" setup>
import type { DsfrTileProps } from './DsfrTiles.types'

import { computed } from 'vue'

export type { DsfrTileProps }

const props = withDefaults(defineProps<DsfrTileProps>(), {
  title: 'Titre de la tuile',
  imgSrc: undefined,
  svgPath: undefined,
  svgAttrs: () => ({ viewBox: '0 0 80 80', width: '80px', height: '80px' }),
  description: undefined,
  details: undefined,
  horizontal: false,
  vertical: undefined,
  to: '#',
  titleTag: 'h3',
  icon: true,
})

const defaultSvgAttrs = { viewBox: '0 0 80 80', width: '80px', height: '80px' }

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
  <div
    class="fr-tile fr-enlarge-link"
    :class="[{
      'fr-tile--disabled': disabled,
      'fr-tile--sm': small === true,
      'fr-tile--horizontal': horizontal === true,
      'fr-tile--vertical': horizontal === false || vertical === 'md' || vertical === 'lg',
      'fr-tile--vertical@md': vertical === 'md',
      'fr-tile--vertical@lg': vertical === 'lg',
      'fr-tile--download': download,
      'fr-tile--no-icon': icon === false,
      'fr-tile--no-border': noBorder,
      'fr-tile--no-background': noBackground,
      'fr-tile--shadow': shadow,
      'fr-tile--grey': grey,
      'fr-enlarge-button': enlarge,
    }]"
  >
    <div class="fr-tile__body">
      <div class="fr-tile__content">
        <component
          :is="titleTag"
          class="fr-tile__title"
        >
          <a
            v-if="isExternalLink"
            class="fr-tile__link"
            target="_blank"
            rel="noopener noreferrer"
            :download="download"
            :href="disabled ? '' : (to as string)"
          >{{ title }}</a>
          <RouterLink
            v-if="!isExternalLink"
            :download="download"
            class="fr-tile__link"
            :to="disabled ? '' : to"
          >
            {{ title }}
          </RouterLink>
        </component>
        <p
          v-if="description"
          class="fr-tile__desc"
        >
          {{ description }}
        </p>
        <p
          v-if="details"
          class="fr-tile__detail"
        >
          {{ details }}
        </p>
        <div
          v-if="$slots['start-details']"
          class="fr-tile__start"
        >
          <!-- @slot Slot pour les détails d’une tuile sous forme de tags (cliquables ou non) ou de badges (4 maximum) -->
          <slot name="start-details" />
        </div>
      </div>
    </div>
    <div class="fr-tile__header">
      <slot name="header" />
      <div
        v-if="imgSrc || svgPath"
        class="fr-tile__pictogram"
      >
        <img
          v-if="imgSrc"
          :src="imgSrc"
          class="fr-artwork"
          alt=""
        >
        <svg
          v-else
          aria-hidden="true"
          class="fr-artwork"
          v-bind="{ ...defaultSvgAttrs, ...svgAttrs }"
        >
          <use
            class="fr-artwork-decorative"
            :href="`${svgPath}#artwork-decorative`"
          />
          <use
            class="fr-artwork-minor"
            :href="`${svgPath}#artwork-minor`"
          />
          <use
            class="fr-artwork-major"
            :href="`${svgPath}#artwork-major`"
          />
        </svg>
      <!-- L'alternative de l'image (attribut alt) doit à priori rester vide car l'image est illustrative et ne doit pas être restituée aux technologies d’assistance. Vous pouvez toutefois remplir l'alternative si vous estimer qu'elle apporte une information essentielle à la compréhension du contenu non présente dans le texte -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.fr-tile.fr-tile--disabled {
  background-color: var(--background-disabled-grey);
  box-shadow: inset 0 0 0 1px var(--border-default-grey), inset 0 -0.25rem 0 0 var(--border-disabled-grey);
}
.fr-tile.fr-tile--disabled a {
  cursor: not-allowed;
}
</style>
