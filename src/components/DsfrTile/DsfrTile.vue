<script lang="ts" setup>
import { computed } from 'vue'
import { RouteLocationRaw } from 'vue-router'

export type DsfrTileProps = {
  title?: string
  imgSrc?: string
  description?: string
  disabled?: boolean
  horizontal?: boolean
  to?: RouteLocationRaw,
  titleTag?: string
}

const props = withDefaults(defineProps<DsfrTileProps>(), {
  title: 'Titre de la tuile',
  imgSrc: undefined,
  description: undefined,
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
      'fr-tile--horizontal': horizontal,
      'fr-tile--disabled': disabled,
    }"
  >
    <div class="fr-tile__body">
      <component
        :is="titleTag"
        class="fr-tile__title"
      >
        <a
          v-if="isExternalLink"
          class="fr-tile__link"
          target="_blank"
          :href="disabled ? '' : (to as string)"
        >{{ title }}</a>
        <RouterLink
          v-if="!isExternalLink"
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
    </div>
    <div
      v-if="imgSrc"
      class="fr-tile__img"
    >
      <img
        :src="imgSrc"
        class="fr-responsive-img"
        alt=""
      >
    <!-- L'alternative de l'image (attribut alt) doit à priori rester vide car l'image est illustrative et ne doit pas être restituée aux technologies d’assistance. Vous pouvez toutefois remplir l'alternative si vous estimer qu'elle apporte une information essentielle à la compréhension du contenu non présente dans le texte -->
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
