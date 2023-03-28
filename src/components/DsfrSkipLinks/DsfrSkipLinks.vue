<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrSkipLinks',

  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  methods: {
    scrollMeTo (elementId) {
      const element = document.getElementById(elementId)
      const top = element?.offsetTop
      window.scrollTo(0, top)
    },
  },
})
</script>

<template>
  <div class="fr-skiplinks">
    <nav
      class="fr-container"
      role="navigation"
      aria-label="Accès rapide"
    >
      <ul class="fr-skiplinks__list">
        <li
          v-for="link of links"
          :key="link.id"
        >
          <a
            class="fr-link"
            :href="`#${link.id}`"
            @click.prevent="scrollMeTo(link.id)"
          >{{ link.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
