<script lang="ts" setup>
withDefaults(defineProps<{
  title: string
  anchors: { link: string, name: string }[]
}>(), {
  title: 'Sommaire',
  anchors: () => [],
})
</script>

<template>
  <nav
    class="fr-summary"
    role="navigation"
    aria-labelledby="fr-summary-title"
  >
    <h2
      id="fr-summary-title"
      class="fr-summary__title"
    >
      {{ title }}
    </h2>
    <ol class="fr-summary__list">
      <li
        v-for="(anchor, idx) in anchors"
        :key="idx"
      >
        <a
          class="fr-summary__link"
          :href="anchor.link"
        >{{ anchor.name }}</a>
      </li>
    </ol>
  </nav>
</template>
