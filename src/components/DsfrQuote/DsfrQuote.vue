<script lang="ts" setup>
import type { DsfrQuoteProps } from './DsfrQuote.types'

export type { DsfrQuoteProps }

withDefaults(defineProps<DsfrQuoteProps>(), {
  quote: undefined,
  author: undefined,
  details: () => [],
  source: '',
  sourceUrl: '',
  quoteImage: '',
})
</script>

<template>
  <figure class="fr-quote fr-quote--column">
    <blockquote
      v-if="source"
      :cite="sourceUrl"
    >
      <p>« {{ quote }} »</p>
    </blockquote>

    <figcaption>
      <p class="fr-quote__author">
        {{ author }}
      </p>

      <ul class="fr-quote__source">
        <li>
          <cite>{{ source }}</cite>
        </li>

        <li
          v-for="(detail, index) of details"
          :key="index"
        >
          <a
            v-if="typeof detail === 'object'"
            target="_blank"
            rel="noopener noreferrer"
            :href="detail.url"
          >
            {{ detail.label }}
          </a>
          <template v-else>
            {{ detail }}
          </template>
        </li>
      </ul>

      <div
        v-if="quoteImage"
        class="fr-quote__image"
      >
        <img
          :src="quoteImage"
          class="fr-responsive-img"
          alt=""
        >
        <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
      </div>
    </figcaption>
  </figure>
</template>
