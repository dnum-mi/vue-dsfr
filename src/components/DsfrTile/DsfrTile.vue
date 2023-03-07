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
    disabled: Boolean,
    horizontal: Boolean,
    to: {
      type: [String, Object],
      default: '#',
    },
    titleTag: {
      type: String,
      default: 'h3',
    },
  },

  computed: {
    isExternalLink () {
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
  },
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
          :href="disabled ? '' : to"
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

<style src="@gouvfr/dsfr/dist/component/tile/tile.main.min.css" />
<style scoped>
.fr-tile.fr-tile--disabled {
  background-color: var(--background-disabled-grey);
  box-shadow: inset 0 0 0 1px var(--border-default-grey), inset 0 -0.25rem 0 0 var(--border-disabled-grey);
}
.fr-tile.fr-tile--disabled a {
  cursor: not-allowed;
}
</style>
