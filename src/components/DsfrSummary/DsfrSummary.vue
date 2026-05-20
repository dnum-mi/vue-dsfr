<script lang="ts" setup>
import type { DsfrSummaryProps } from './DsfrSummary.types'

export type { DsfrSummaryProps }

withDefaults(defineProps<DsfrSummaryProps>(), {
  title: 'Sommaire',
  titleTag: 'h2',
  anchors: () => [],
})
</script>

<template>
  <nav
    class="fr-summary"
    role="navigation"
    aria-labelledby="fr-summary-title"
  >
    <component
      :is="titleTag"
      id="fr-summary-title"
      class="fr-summary__title"
    >
      {{ title }}
    </component>
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
