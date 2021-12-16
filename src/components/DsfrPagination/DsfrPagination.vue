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
          class="fr-pagination__link fr-pagination__link--first"
          title="Première page"
          :href="links[0].url"
        >
          <VIcon
            name="ri-skip-back-fill"
          />
        </a>
      </li>
      <li>
        <a
          class="fr-pagination__link fr-pagination__link--prev fr-pagination__link--lg-label"
          title="Page précédente"
          :href="links[currentPage - 1] != 0 ? links[currentPage - 1].url : links[currentPage].url"
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
          :href="link.url"
          class="fr-pagination__link fr-displayed-lg"
          :title="link.title"
          :aria-current="link.label == currentPage ? 'page' : undefined"
        >
          {{ link.label }}
        </a>
      </li>
      <li>
        <a
          class="fr-pagination__link fr-pagination__link--next fr-pagination__link--lg-label"
          :href="links[currentPage + 1] <= links.length ? links[currentPage + 1].url : links[currentPage].url"
          title="Page suivante"
        >
          <VIcon
            name="ri-play-fill"
          />
        </a>
      </li>
      <li>
        <a
          class="fr-pagination__link fr-pagination__link--last"
          :href="links[links.length - 1].url"
          title="Dernière Page"
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
