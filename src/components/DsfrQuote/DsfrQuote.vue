<template>
  <figure class="fr-quote fr-quote--column">
    <div style="display: flex; color: var(--artwork-minor-blue-france)">
      <VIcon
        label="Quote"
        name="ri-chat-1-line"
        scale="1.3"
      />
      <strong style="font-size: 1.125em; position: relative; left: -1em; top: -0.1em">«</strong>
    </div>

    <blockquote
      v-if="source"
      :cite="sourceUrl"
    >
      <p>« {{ quote }} »</p>
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
            :href="detail.url"
          >
            {{ detail.label }}
            <VIcon
              name="ri-external-link-line"
              scale="0.9"
              style="position: relative; top: 0.1em"
            />
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

<script>
export default {
  name: 'DsfrQuote',
  props: {
    quote: {
      type: String,
      default: undefined,
    },
    icon: {
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
    illustration: {
      type: String,
      default: undefined,
    },
    separator: {
      type: String,
      default: 'horizontal',
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

}
</script>

<style src="./quote.main.css" />

<style scoped>
.fr-quote::before {
  content: normal;
}

.fr-quote__source a::after {
  content: normal;
}
</style>
