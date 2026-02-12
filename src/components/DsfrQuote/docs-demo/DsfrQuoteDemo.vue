<script lang="ts" setup>
import DsfrQuote from '../DsfrQuote.vue'

const quote = 'LA citation'
const author = 'Pierre-Louis EGAUD'
const details = [
  {
    url: 'https://www.wikipedia.fr',
    label: 'wikipedia',
  },
]
const source = 'Duckduckgo'
const sourceUrl = 'https://www.duckduckgo.com'
const quoteImage = 'https://loremflickr.com/g/150/150/cat?random=1'
const size = 'lg'
const accent = 'orange-terre-battue'
</script>

<template>
  <DsfrQuote
    :quote="quote"
    :author="author"
    :details="details"
    :source="source"
    :source-url="sourceUrl"
    :quote-image="quoteImage"
    :size="size"
    :accent="accent"
  />
</template>
