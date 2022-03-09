<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrTile',

  props:
  {
    title: {
      type: String,
      default: 'Exemple Tuile',
    },
    imgSrc: {
      type: String,
      default: undefined,
    },
    description: {
      type: String,
      default: undefined,
    },
    horizontal: Boolean,
    to: {
      type: [String, Object],
      default: '#',
    },
  },

  computed: {
    isExternalLink () {
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
    linkComponent () {
      return '$nuxt' in this ? 'nuxt-link' : 'router-link'
    },
  },
})
</script>

<template>
  <div
    class="fr-tile fr-enlarge-link"
    :class="{ 'fr-tile--horizontal': horizontal }"
  >
    <div class="fr-tile__body">
      <h4 class="fr-tile__title">
        <a
          v-if="isExternalLink"
          class="fr-tile__link"
          :href="to"
        >{{ title }}</a>
        <component
          :is="linkComponent"
          v-else
          class="fr-tile__link"
          :to="to"
        >
          {{ title }}
        </component>
      </h4>
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

<style src="@gouvfr/dsfr/dist/component/tile/tile.main.css" />
