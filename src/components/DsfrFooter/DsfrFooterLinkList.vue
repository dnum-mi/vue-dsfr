<script lang="ts" setup>
import type { OhVueIcon } from 'oh-vue-icons'

type DsfrFooterLinkProps = {
  button?: boolean
  icon?: string | InstanceType<typeof OhVueIcon>['$props']
  iconAttrs?: InstanceType<typeof OhVueIcon>['$props'] & import('vue').HTMLAttributes
  iconRight?: boolean
  label?: string
  target?: string
  onClick?: ($event: MouseEvent) => void
  to?: import('vue-router').RouteLocationRaw
  href?: string
}

type DsfrFooterLinkListProps = {
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
