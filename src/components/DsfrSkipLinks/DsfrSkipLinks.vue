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

<style src="./skiplinks.css" />

<style scoped>
.fr-skiplinks {
  top: 0;
}
</style>
