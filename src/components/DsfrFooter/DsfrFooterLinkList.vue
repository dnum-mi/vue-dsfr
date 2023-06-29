<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router'

export type DsfrFooterLinkProps = {
  label: string
  to: string | RouteLocationRaw
}

export type DsfrFooterLinkListProps = {
  categoryName: string
  links: DsfrFooterLinkProps[]
}

withDefaults(defineProps<DsfrFooterLinkListProps>(), {
  categoryName: 'Nom de la catégorie',
  links: () => [],
})
</script>

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
          target="_blank"
          :href="link.to"
        >{{ link.label }}</a>
        <RouterLink
          v-else
          class="fr-footer__top-link"
          :to="link.to"
        >
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
