<template>
  <figure class="fr-quote fr-quote--column">
    <VIcon
      label="Quote"
    >
      <VIcon
        name="ri-chat-1-line"
        scale="1.3"
        fill="var(--bf500)"
      />
      <VIcon
        name="ri-double-quotes-l"
        scale="0.6"
        fill="var(--bf500)"
      />
    </VIcon>

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

<style src="./quotes.css" />

<style scoped>
.fr-quote {
  color: var(--g800);
}

.fr-quote::before {
  content: normal;
}

.fr-quote__source a {
  box-shadow: none;
}
.fr-quote__source a::after {
  content: normal;
}
</style>
