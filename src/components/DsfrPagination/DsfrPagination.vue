<script>
export default {
  name: 'DsfrPagination',
  props: {
    links: {
      type: Array,
      required: true,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },

  emits: ['update:currentPage'],

  methods: {
    getPreviousPage () {
      return this.currentPage > 1 ? this.currentPage - 1 : 1
    },
    getNextPage () {
      return this.currentPage < this.links.length ? this.currentPage + 1 : this.links.length
    },
  },
}
</script>

<template>
  <nav
    role="navigation"
    class="fr-pagination"
    aria-label="Pagination"
  >
    <ul class="fr-pagination__list">
      <li>
        <a
          href="#"
          class="fr-pagination__link fr-pagination__link--first"
          title="Première page"
          @click.prevent="$emits('update:currentPage', 1)"
        >
          <VIcon
            name="ri-skip-back-fill"
          />
        </a>
      </li>
      <li>
        <a
          href="#"
          class="fr-pagination__link fr-pagination__link--prev fr-pagination__link--lg-label"
          title="Page précédente"
          @click.prevent="$emit('update:currentPage', getPreviousPage())"
        >
          <VIcon
            name="ri-play-fill"
            flip="horizontal"
          />
        </a>
      </li>
      <li
        v-for="(link, idx) in links"
        :key="idx"
      >
        <a
          href="#"
          class="fr-pagination__link fr-displayed-lg"
          :title="link.title"
          :aria-current="link.label == currentPage ? 'page' : undefined"
          @click.prevent="$emit('update:currentPage', +link.label)"
        >
          {{ link.label }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="fr-pagination__link fr-pagination__link--next fr-pagination__link--lg-label"
          title="Page suivante"
          @click.prevent="$emit('update:currentPage', getNextPage())"
        >
          <VIcon
            name="ri-play-fill"
          />
        </a>
      </li>
      <li>
        <a
          class="fr-pagination__link fr-pagination__link--last"
          href="#"
          title="Dernière Page"
          @click.prevent="$emit('update:currentPage', links.length)"
        >
          <VIcon
            name="ri-skip-forward-fill"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style src="./pagination.main.css" />

<style scoped>
.fr-pagination__link:hover {
  background-image: linear-gradient(
0deg, rgba(224,224,224,0.5), rgba(224,224,224,0.5));
}
</style>
