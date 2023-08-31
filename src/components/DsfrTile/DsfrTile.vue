<script lang="ts" setup>
import { computed } from 'vue'
import { RouteLocationRaw } from 'vue-router'

export type DsfrTileProps = {
  title?: string
  imgSrc?: string
  description?: string
  details?: string
  disabled?: boolean
  horizontal?: boolean
  verticalAtMd?: boolean
  verticalAtLg?: boolean
  small?: boolean
  download?: boolean
  noBorder?: boolean
  noBackground?: boolean
  shadow?: boolean
  grey?: boolean
  to?: RouteLocationRaw
  titleTag?: string
}

const props = withDefaults(defineProps<DsfrTileProps>(), {
  title: 'Titre de la tuile',
  imgSrc: undefined,
  description: undefined,
  details: undefined,
  to: '#',
  titleTag: 'h3',
})

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
  <div
    class="fr-tile fr-enlarge-link"
    :class="{
      'fr-tile--vertical@md': verticalAtMd,
      'fr-tile--vertical@lg': verticalAtLg,
      'fr-tile--horizontal': horizontal,
      'fr-tile--disabled': disabled,
      'fr-tile--sm': small,
      'fr-tile--no-icon': !imgSrc,
      'fr-tile--download': download,
      'fr-tile--no-border': noBorder,
      'fr-tile--no-background': noBackground,
      'fr-tile--shadow': shadow,
      'fr-tile--grey': grey,
    }"
  >
    <div class="fr-tile__body">
      <div class="fr-tile__content">
        <component
          :is="titleTag"
          class="fr-tile__title"
        >
          <a
            v-if="isExternalLink"
            target="_blank"
            :href="disabled ? '' : (to as string)"
          >
            {{ title }}
          </a>
          <RouterLink
            v-if="!isExternalLink"
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
      </div>
    </div>
    <div class="fr-tile__header">
      <div
        v-if="imgSrc"
        class="fr-tile__pictogram"
      >
        <img
          :src="imgSrc"
          alt=""
          class="fr-artwork"
        >
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
