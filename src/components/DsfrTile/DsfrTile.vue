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
  vertical?: 'md' | 'lg'
  to?: RouteLocationRaw,
  titleTag?: string
  download?: boolean
  small?: boolean
  icon?: boolean
  noBorder?: boolean
  shadow?: boolean
  noBackground?: boolean
  grey?: boolean
}

const props = withDefaults(defineProps<DsfrTileProps>(), {
  title: 'Titre de la tuile',
  imgSrc: undefined,
  description: undefined,
  details: undefined,
  horizontal: false,
  vertical: undefined,
  to: '#',
  titleTag: 'h3',
  icon: true,
})

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
    },]"
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
            :download="download"
            :href="disabled ? '' : (to as string)"
          >{{ title }}</a>
          <RouterLink
            v-if="!isExternalLink"
            :download="download"
            class="fr-tile__link so-test"
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
          class="fr-artwork"
          alt=""
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
