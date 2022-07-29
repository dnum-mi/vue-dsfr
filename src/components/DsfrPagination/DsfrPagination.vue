<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrPagination',
  props: {
    pages: {
      type: Array,
      required: true,
      validator (value) {
        // Doit contenir au moins une page
        return value?.length > 0
      },
    },
    currentPage: {
      type: Number,
      default: 0,
    },
    firstPageTitle: {
      type: String,
      default: 'Première page',
    },
    lastPageTitle: {
      type: String,
      default: 'Dernière page',
    },
    nextPageTitle: {
      type: String,
      default: 'Page suivante',
    },
    prevPageTitle: {
      type: String,
      default: 'Page précédente',
    },
    truncLimit: {
      type: Number,
      default: 5,
    },
  },

  emits: ['update:currentPage'],

  computed: {
    startIndex () {
      return Math.min(this.pages.length - 1 - this.truncLimit, Math.max(this.currentPage - (this.truncLimit - this.truncLimit % 2) / 2, 0))
    },
    endIndex () {
      return Math.min(this.pages.length - 1, this.startIndex + this.truncLimit)
    },
    displayedPages () {
      return this.pages.length > this.truncLimit ? this.pages.slice(this.startIndex, this.endIndex + 1) : this.pages
    },
  },
  methods: {
    tofirstPage () {
      this.toPage(0)
    },
    toPreviousPage () {
      this.toPage(Math.max(0, this.currentPage - 1))
    },
    toNextPage () {
      this.toPage(Math.min(this.pages.length - 1, this.currentPage + 1))
    },
    toLastPage () {
      this.toPage(this.pages.length - 1)
    },
    toPage (index) {
      this.updatePage(index)
    },
    isCurrentPage (page) {
      return this.pages.indexOf(page) === this.currentPage
    },
    updatePage (index) {
      this.$emit('update:currentPage', index)
    },
  },
})
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
          :href="pages[0]?.href"
          class="fr-pagination__link fr-pagination__link--first"
          :title="firstPageTitle"
          :disabled="currentPage === 0 ? true : null"
          @click.prevent="tofirstPage()"
        />
      </li>
      <li>
        <a
          :href="pages[Math.max(currentPage - 1, 0)]?.href"
          class="fr-pagination__link fr-pagination__link--prev fr-pagination__link--lg-label"
          :title="prevPageTitle"
          :disabled="currentPage === 0 ? true : null"
          @click.prevent="toPreviousPage()"
        />
      </li>
      <li
        v-for="(page, idx) in displayedPages"
        :key="idx"
      >
        <a
          :href="page?.href"
          class="fr-pagination__link fr-unhidden-lg"
          :title="page.title"
          :disabled="isCurrentPage(page) ? true : null"
          :aria-current="isCurrentPage(page) ? 'page' : undefined"
          @click.prevent="toPage(pages.indexOf(page))"
        >
          <span v-if="displayedPages.indexOf(page) === 0 && startIndex > 0 ">...</span>
          {{ page.label }}
          <span v-if="displayedPages.indexOf(page) === displayedPages.length - 1 && endIndex < pages.length - 1">...</span>
        </a>
      </li>
      <li>
        <a
          :href="pages[Math.min(currentPage + 1, pages.length - 1)]?.href"
          class="fr-pagination__link fr-pagination__link--next fr-pagination__link--lg-label"
          :title="nextPageTitle"
          :disabled="currentPage === pages.length - 1 ? true : null"
          @click.prevent="toNextPage()"
        />
      </li>
      <li>
        <a
          class="fr-pagination__link fr-pagination__link--last"
          :href="pages[pages.length - 1]?.href"
          :title="lastPageTitle"
          :disabled="currentPage === pages.length - 1 ? true : null"
          @click.prevent="toLastPage()"
        />
      </li>
    </ul>
  </nav>
</template>

<style src="@gouvfr/dsfr/dist/component/pagination/pagination.main.min.css" />

<style scoped>
.fr-pagination__link:hover {
  background-image: linear-gradient(
  deg, rgba(224,224,224,0.5), rgba(224,224,224,0.5));
}
</style>
