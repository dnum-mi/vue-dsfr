<script>
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

export default {
  name: 'DsfrNavigationMegaMenuCategory',

  components: {
    DsfrNavigationMenuLink,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <div class="fr-col-12 fr-col-md-3">
    <h5 class="fr-mega-menu__category">
      <a
        class="fr-nav__link"
        href="#"
        @click.prevent=""
      >
        {{ title }}
      </a>
    </h5>
    <ul class="fr-mega-menu__list">
      <li
        v-for="(link, idx) of links"
        :key="idx"
        class="fr-mega-menu__item"
      >
        <DsfrNavigationMenuLink
          v-bind="link"
        />
      </li>
    </ul>
  </div>
</template>
