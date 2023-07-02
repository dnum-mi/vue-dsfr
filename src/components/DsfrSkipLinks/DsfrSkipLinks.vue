<script lang="ts" setup>
defineProps<{
  links: { id: string, text: string }[]
}>()

const scrollMeTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  const top = element?.offsetTop
  window.scrollTo(0, top || 0)
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
            @click.prevent="scrollMeTo(link.id)"
          >{{ link.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
