<script>
export default {
  name: 'DsfrSkipLinks',

  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
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
          >{{ link.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style src="./skiplink.main.css" />

<style scoped>
.fr-skiplinks {
  top: 0;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  /**
  * Correctif
  */
  .fr-skiplinks.focus-within {
    position: relative;
    transform: translateY(0);
  }

  .fr-skiplinks {
    background-color: #eee;
  }
}
</style>
