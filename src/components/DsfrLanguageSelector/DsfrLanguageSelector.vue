<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrLanguageSelector',
  props: {
    id: {
      type: String,
      default () {
        return getRandomId('translate')
      },
    },
    languages: {
      type: Array,
      default: () => {},
    },
    currentLanguage: {
      type: String,
      default: 'fr',
    },
  },
  emits: ['select'],
  data () {
    return {
      expanded: false,
      collapsing: false,
    }
  },
  computed: {
    collapseStyle () {
      const baseStyle = {
        '--collapse': `-${this.languages.length * 114}px`,
      }
      if (this.expanded || this.collapsing) {
        baseStyle['--collapse-max-height'] = 'none'
      }
      return baseStyle
    },
    currentLanguageObject () {
      return this.languages.find(({ codeIso }) => codeIso === this.currentLanguage)
    },
  },
  watch: {
    expanded (isExpanded) {
      if (!isExpanded) {
        this.collapsing = true
        setTimeout(() => { this.collapsing = false }, 300)
      }
    },
  },
  methods: {
    selectLanguage (language) {
      this.expanded = false
      this.$emit('select', language)
    },
  },
})

</script>

<template>
  <nav
    role="navigation"
    class="fr-translate  fr-nav"
  >
    <div class="fr-nav__item">
      <button
        class="fr-translate__btn  fr-btn  fr-btn--tertiary"
        :aria-controls="id"
        :aria-expanded="expanded"
        title="Sélectionner une langue"
        type="button"
        @click.prevent.stop="expanded = !expanded"
      >
        {{ currentLanguageObject.codeIso.toUpperCase() }}<span class="fr-hidden-lg">&nbsp;- {{ currentLanguageObject.label }}</span>
      </button>
      <div
        :id="id"
        class="fr-collapse  fr-translate__menu  fr-menu"
        :class="{ 'fr-collapse--expanded': expanded, 'fr-collapsing': collapsing }"
        :style="collapseStyle"
      >
        <ul class="fr-menu__list">
          <li
            v-for="language, idx in languages"
            :key="idx"
          >
            <a
              class="fr-translate__language  fr-nav__link"
              :hreflang="language.codeIso"
              :lang="language.codeIso"
              :aria-current="currentLanguage === language.codeIso ? true : undefined"
              :href="`#${language.codeIso}`"
              @click.prevent.stop="selectLanguage(language)"
            >{{ language.codeIso.toUpperCase() + ' - ' + language.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style src="@gouvfr/dsfr/dist/component/translate/translate.main.min.css" />
