<script>
import { defineComponent } from 'vue'

// Ne fonctionne pas dans Nuxt
// import '@gouvfr/dsfr/dist/component/breadcrumb/breadcrumb.module.js'

import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
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
})
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
          class="fr-breadcrumb__item"
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
        </li>
      </ol>
    </div>
  </nav>
</template>

<style src="@gouvfr/dsfr/dist/component/breadcrumb/breadcrumb.main.min.css" />
