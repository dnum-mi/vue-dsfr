<script setup lang="ts">
import DsfrNavigationMenuLink, { DsfrNavigationMenuLinkProps } from './DsfrNavigationMenuLink.vue'

export type DsfrNavigationMegaMenuCategoryProps = {
  title: string
  links: DsfrNavigationMenuLinkProps[]
}

withDefaults(defineProps<DsfrNavigationMegaMenuCategoryProps>(), {

})
</script>

<template>
  <div class="fr-col-12 fr-col-lg-3">
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
        class="fr-nav__link"
      >
        <DsfrNavigationMenuLink
          v-bind="link"
        />
      </li>
    </ul>
  </div>
</template>
