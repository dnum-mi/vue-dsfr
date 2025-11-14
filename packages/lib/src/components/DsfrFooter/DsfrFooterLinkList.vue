<script lang="ts" setup>
import type { DsfrFooterLinkListProps } from './DsfrFooter.types'

export type {
  DsfrFooterLinkListProps,
}

withDefaults(defineProps<DsfrFooterLinkListProps>(), {
  categoryName: 'Nom de la catégorie',
  links: () => [],
  titleTag: 'h3',
})
</script>

<template>
  <div>
    <component
      :is="titleTag"
      class="fr-footer__top-cat"
    >
      {{ categoryName }}
    </component>
    <ul class="fr-footer__top-list">
      <li
        v-for="(link, idx) in links"
        :key="idx"
      >
        <a
          v-if="typeof link.to === 'string' && link.to.startsWith('http')"
          class="fr-footer__top-link"
          target="_blank"
          rel="noopener noreferrer"
          :href="link.to"
        >{{ link.label }}</a>
        <RouterLink
          v-if="typeof link.to === 'object' || (typeof link.to === 'string' && !link.to.startsWith('http'))"
          class="fr-footer__top-link"
          :to="link.to"
        >
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
