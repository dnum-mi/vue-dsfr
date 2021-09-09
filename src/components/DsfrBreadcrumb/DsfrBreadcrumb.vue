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
          class="relative"
          :data-testid="`lis`"
        >
          <router-link
            class="fr-breadcrumb__link"
            :to="link.to"
            :aria-current="index === links.length - 1 ? 'page' : undefined"
          >
            {{ link.text }}
          </router-link>
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
      default: () => [{ text: 'test' }],
    },
  },
  data () {
    return {
      hideButton: false,
    }
  },
}
</script>

<style scoped>
.fr-breadcrumb {
  position: relative;
  margin: 1rem 0 2rem;
  line-height: 1.25rem;
  font-size: 0.75rem;
  color: var(--g600);
}

.fr-collapse {
  margin-left: -4px;
  margin-right: -4px;
  padding-left: 4px;
  padding-right: 4px;
  transform: translateY(-4px);
  overflow: hidden;
  transition: visibility 0.3s;
  max-height: 0;
  --collapse: -99999px;
  --collapser: '';

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  transition: transform 0.5s ease-out;
  transform: translateY(-1.5rem);

  &.fr-collapse--expanded {
    --collapse: 0;
    max-height: 1.5rem;
    transition: transform 0.5s ease-out;
    transform: translateY(0);
  }

  @media (min-width: 769px) {
    & {
      --collapse: 0;
      max-height: none;
      transform: translateY(0);
    }
  }
}

.fr-breadcrumb__button {
  display: none;
  background-color: var(--t-plain);
  box-shadow: 0 1px 0 0 currentColor;
  font-size: 0.75rem;
  line-height: 1.25rem;
  margin: 0;
  padding: 0;
  color: inherit;

  @media (max-width: 768px) {
    & {
      display: inherit;
    }
  }
}

.fr-breadcrumb__link {
  display: inline-block;
  position: relative;
  font-size: 0.75rem;
  line-height: 1.25rem;
  padding-bottom: 0.25rem;
  margin-bottom: 0.5rem;
  color: var(--g600);

  max-width: 10rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @nest li:not(:last-child) & {
    box-shadow: 0 1px 0 0 var(--g600);
  }
}

.fr-breadcrumb__list {
  --is-list: false;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  transform: translateY(4px);
  padding-left: 0;
  list-style: none;
}

.fr-breadcrumb li {
  margin-top: 0 !important;
  padding-right: 0;
}

.icon {
  position: relative;
  top: -0.875rem;
  font-size: 1rem;
  pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
