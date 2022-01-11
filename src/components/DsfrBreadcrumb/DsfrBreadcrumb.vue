<script>
import { getRandomId } from '../../utils/random-utils.js'

export default {
  name: 'DsfrBreadcrumb',

  props: {
    breadcrumbId: {
      type: String,
      default () {
        return getRandomId('breadcrumb')
      },
    },
    links: {
      type: Array,
      default: () => [{ text: '' }],
    },
  },

  data () {
    return {
      hideButton: false,
    }
  },

  computed: {
    linkComponent () {
      return '$nuxt' in this ? 'nuxt-link' : 'router-link'
    },
  },
}
</script>

<template>
  <nav
    role="navigation"
    class="fr-breadcrumb"
    aria-label="vous êtes ici :"
  >
    <button
      v-show="!hideButton"
      class="fr-breadcrumb__button"
      :aria-expanded="hideButton"
      :aria-controls="breadcrumbId"
      @click="hideButton = !hideButton"
    >
      Voir le fil d’Ariane
    </button>
    <div
      :id="breadcrumbId"
      class="fr-collapse"
      :class="{ 'fr-collapse--expanded': hideButton }"
    >
      <ol class="fr-breadcrumb__list">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="fr-breadcrumb__item  relative  align-center"
          :data-testid="`lis`"
        >
          <component
            :is="linkComponent"
            v-if="link.to"
            class="fr-breadcrumb__link"
            :to="link.to"
            :aria-current="index === links.length - 1 ? 'page' : undefined"
          >
            {{ link.text }}
          </component>
          <a
            v-if="!link.to"
            class="fr-breadcrumb__link"
            :aria-current="index === links.length - 1 ? 'page' : undefined"
          >{{ link.text }}</a>
          <v-icon
            v-if="index !== links.length - 1"
            class="icon"
            name="ri-arrow-right-s-line"
          />
        </li>
      </ol>
    </div>
  </nav>
</template>

<style src="./breadcrumb.main.css" />

<style scoped>
.fr-collapse--expanded {
  overflow: initial;
}

.fr-breadcrumb__link:not([aria-current])::after {
  content: normal;
  display: none;
}

.fr-breadcrumb__link:not([aria-current]) {
  margin-right: 0;
}

.fr-breadcrumb__link, .fr-breadcrumb__item {
  max-width: 10rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.icon {
  position: relative;
  top: -0.25rem;
  font-size: 1rem;
  pointer-events: none;
}

.align-center {
  display: flex;
  align-items: center;
}
</style>
