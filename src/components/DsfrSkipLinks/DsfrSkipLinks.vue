<script lang="ts" setup>
import type { DsfrSkipLinksProps } from './DsfrSkipLinks.types'

export type { DsfrSkipLinksProps }

defineProps<DsfrSkipLinksProps>()

/**
 * Fait défiler la page vers l'élément ciblé et lui donne le focus
 * @param elementId - L'ID de l'élément vers lequel naviguer
 */
const scrollMeTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  element?.focus()
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
            @click="scrollMeTo(link.id)"
          >{{ link.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
