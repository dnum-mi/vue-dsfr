<template>
  <div
    class="fr-card fr-enlarge-link"
    :class="{ 'fr-card--horizontal': horizontal }"
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
      <v-icon
        v-if="!noArrow"
        class="fr-card__arrow"
        name="ri-arrow-right-line"
      />
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

<script>
import VIcon from 'oh-vue-icons/dist/v3/icon.es'
import { RiArrowRightLine } from 'oh-vue-icons/icons'

VIcon.add(RiArrowRightLine)

export default {
  name: 'DsfrCard',
  components: {
    VIcon,
  },
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
}
</script>

<style scoped>
.fr-card {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  background-color: var(--beige);
  cursor: pointer;
}

.fr-card--horizontal {
  @media screen and (min-width: 769px) {
    flex-direction: row-reverse;
  }
}

/* TODO: emulate this with oh-vue-icons */
.fr-card__arrow {
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: auto;
  margin-left: auto;
  order: 4;

  color: var(--bf500);
}
.fr-card__img {
  position: relative;
  width: 100%;
}
.fr-card__img:before {
  display: block;
  content: "";
  width: 100%;
  padding-bottom: 56.25%;
}
.fr-card__img img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%
}
.fr-card__body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 1.5rem;
}
.fr-card__detail {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: .75rem;
  line-height: 1.25rem;
  color: var(--g600);
  order: 1;
}
.fr-card__title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: .5rem;
  order: 2;
}
.fr-card__desc,
.fr-card__title {
  line-height: 1.5rem;
  margin-top: 0;
  color: var(--g800);
}
.fr-card__desc {
  margin-bottom: 1rem;
  font-size: .875rem;
  color: var(--g800);
  order: 3;
}
.fr-card__link {
  --is-link: false;
  display: inline-flex;
  width: 100%;
  margin-top: auto;
}

.fr-card,
.fr-card.fr-enlarge-link {
  background-color: var(--beige);
}

.fr-card.fr-enlarge-link,
:root:not([data-fr-theme=dark i]) .fr-card.fr-enlarge-link {
  --color-hover: rgba(79,79,79,0.5);
  --color-active: hsla(0,0%,45.1%,0.5);
}
.fr-card.fr-enlarge-link {
  --color-hover: rgba(79,79,79,0.5);
  --color-active: hsla(0,0%,45.1%,0.5)
}
.fr-card:not(.fr-card--no-arrow) .fr-card__body:after {
  color: var(--bf500)
}
</style>
