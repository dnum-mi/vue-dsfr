<script lang="ts" setup>
import { computed } from 'vue'

type Page = { href?: string, label: string, title: string }
const props = withDefaults(defineProps<{
  pages: Page[]
  currentPage?: number
  firstPageTitle?: string
  lastPageTitle?: string
  nextPageTitle?: string
  prevPageTitle?: string
  truncLimit?: number,
}>(), {
  truncLimit: 5,
  currentPage: 0,
  firstPageTitle: 'Première page',
  lastPageTitle: 'Dernière page',
  nextPageTitle: 'Page suivante',
  prevPageTitle: 'Page précédente',

})

const emit = defineEmits<{(e: 'update:currentPage', payload: number): void}>()

const startIndex = computed(() => {
  return Math.min(props.pages.length - 1 - props.truncLimit, Math.max(props.currentPage - (props.truncLimit - props.truncLimit % 2) / 2, 0))
})
const endIndex = computed(() => {
  return Math.min(props.pages.length - 1, startIndex.value + props.truncLimit)
})
const displayedPages = computed(() => {
  return props.pages.length > props.truncLimit ? props.pages.slice(startIndex.value, endIndex.value + 1) : props.pages
})

const updatePage = (index: number) => emit('update:currentPage', index)
const toPage = (index: number) => updatePage(index)
const tofirstPage = () => toPage(0)
const toPreviousPage = () => toPage(Math.max(0, props.currentPage - 1))
const toNextPage = () => toPage(Math.min(props.pages.length - 1, props.currentPage + 1))
const toLastPage = () => toPage(props.pages.length - 1)
const isCurrentPage = (page: Page) => props.pages.indexOf(page) === props.currentPage
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
        >{{ prevPageTitle }}</a>
      </li>
      <li
        v-for="(page, idx) in displayedPages"
        :key="idx"
      >
        <a
          :href="page?.href"
          class="fr-pagination__link fr-unhidden-lg"
          :title="page.title"
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
        >{{ nextPageTitle }}</a>
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

<style scoped>
.fr-pagination__link:hover {
  background-image: linear-gradient(
  deg, rgba(224,224,224,0.5), rgba(224,224,224,0.5));
}
</style>
