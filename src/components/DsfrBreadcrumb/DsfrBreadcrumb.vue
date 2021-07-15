<template>
  <nav
    role="navigation"
    class="fr-breadcrumb"
    aria-label="vous êtes ici :"
  >
    <button
      class="fr-breadcrumb__button"
      aria-expanded="false"
      aria-controls="breadcrumb-1"
    >
      Voir le fil d’Ariane
    </button>
    <div
      :id="breadcrumbId"
      class="fr-collapse"
    >
      <ol class="fr-breadcrumb__list">
        <li
          v-for="(link, index) in links"
          :key="index"
        >
          <router-link
            class="fr-breadcrumb__link"
            :to="link.to"
          >
            {{ link.text }}
          </router-link>
        </li>
      </ol>
    </div>
  </nav>
</template>

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
      default: () => [],
    },
  },
  data () {
    return {}
  },
}
</script>

<style scoped>

</style>
