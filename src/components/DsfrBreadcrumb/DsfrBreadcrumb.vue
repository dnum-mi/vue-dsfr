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
          class="fr-breadcrumb__item  relative"
          :data-testid="`lis`"
        >
          <router-link
            v-if="link.to"
            class="fr-breadcrumb__link"
            :to="link.to"
            :aria-current="index === links.length - 1 ? 'page' : undefined"
          >
            {{ link.text }}
          </router-link>
          {{ link.to ? '' : link.text }}
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

<script>
import { getRandomId } from '../../utils/random-utils.js'

import VIcon from 'oh-vue-icons/dist/v3/icon.es'

import { RiArrowRightSLine } from 'oh-vue-icons/icons'

VIcon.add(RiArrowRightSLine)

export default {
  name: 'DsfrBreadcrumb',
  components: {
    VIcon,
  },
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
}
</script>

<style src="./breadcrumb.css" />

<style scoped>
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
  top: 0.1rem;
  font-size: 1rem;
  pointer-events: none;
}
</style>
