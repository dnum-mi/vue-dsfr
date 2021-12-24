<template>
  <div>
    <h3 class="fr-footer__top-cat">
      {{ categoryName }}
    </h3>
    <ul class="fr-footer__top-list">
      <li
        v-for="(link, idx) in links"
        :key="idx"
      >
        <a
          v-if="typeof link.to === 'string' && link.to.startsWith('http')"
          class="fr-footer__top-link"
          :to="link.to"
        >{{ link.label }}</a>
        <component
          :is="linkComponent"
          v-else
          class="fr-footer__top-link"
          :to="link.to"
        >
          {{ link.label }}
        </component>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrFooterLinkList',

  props: {
    categoryName: {
      type: String,
      default: 'Nom de la catégorie',
    },
    links: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    linkComponent () {
      return '$nuxt' in this ? 'nuxt-link' : 'router-link'
    },
  },
})
</script>
