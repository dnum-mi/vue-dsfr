<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrQuote',
  props: {
    quote: {
      type: String,
      default: undefined,
    },
    author: {
      type: String,
      default: undefined,
    },
    details: {
      type: Array,
      default: () => [],
    },
    source: {
      type: String,
      default: '',
    },
    sourceUrl: {
      type: String,
      default: '',
    },
    quoteImage: {
      type: String,
      default: '',
    },
  },

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
          v-for="(detail, index) in details"
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
          {{ typeof detail !== 'object' ? detail : '' }}
        </li>
      </ul>

      <div class="fr-quote__image">
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

<style src="@gouvfr/dsfr/dist/component/quote/quote.main.min.css" />
