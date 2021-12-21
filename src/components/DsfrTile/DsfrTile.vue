<script>
export default {
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
  },
}
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
        <router-link
          v-else
          class="fr-tile__link"
          :to="to"
        >
          {{ title }}
        </router-link>
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

<style src="./tile.main.css" />

<style scoped>
.fr-tile__desc,
.fr-tile__title {
  color: var(--g800);
}
</style>
