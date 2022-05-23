<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrCard',

  props: {
    imgSrc: {
      type: String,
      default: undefined,
    },
    link: {
      type: [String, Object],
      default: undefined,
    },
    title: {
      type: String,
      default: 'Simple title',
    },
    description: {
      type: String,
      default: 'Simple description',
    },
    detail: {
      type: String,
      default: 'details',
    },
    altImg: {
      type: String,
      default: '',
    },
    noArrow: Boolean,
    horizontal: Boolean,
  },

  methods: {
    goToTargetLink () {
      this.$refs.title.querySelector('.fr-card__link').click()
    },
  },
})
</script>

<template>
  <div
    class="fr-card fr-enlarge-link"
    :class="{
      'fr-card--horizontal': horizontal,
      'fr-card--no-arrow': noArrow,
    }"
    data-testid="fr-card"
    @click="goToTargetLink"
  >
    <div class="fr-card__body">
      <h4
        ref="title"
        class="fr-card__title"
      >
        <router-link
          :to="link"
          class="fr-card__link"
          data-testid="card-link"
          @click="$event.stopPropagation()"
        >
          {{ title }}
        </router-link>
      </h4>
      <p class="fr-card__desc">
        {{ description }}
      </p>
      <p class="fr-card__detail">
        {{ detail }}
      </p>
    </div>
    <div class="fr-card__img">
      <img
        :src="imgSrc"
        class="fr-responsive-img"
        :alt="altImg"
        data-testid="card-img"
      >
      <!-- L'alternative de l'image (attribut alt) doit à priori rester vide car l'image est illustrative
        et ne doit pas être restituée aux technologies d’assistance. Vous pouvez toutefois remplir l'alternative si vous
        estimez qu'elle apporte une information essentielle à la compréhension du contenu non présente dans le texte -->
    </div>
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/card/card.main.min.css" />
