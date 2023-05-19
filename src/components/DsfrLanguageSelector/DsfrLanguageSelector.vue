<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils'
import { useCollapsable } from '@/composables'

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
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {},
    },
    currentLanguage: {
      type: String,
      default: 'fr',
    },
  },
  emits: ['select'],
  setup () {
    const {
      collapse,
      collapsing,
      cssExpanded,
      doExpand,
      adjust,
      onTransitionEnd,
    } = useCollapsable()

    return {
      collapse,
      collapsing,
      cssExpanded,
      doExpand,
      adjust,
      onTransitionEnd,
    }
  },
  data () {
    return {
      expanded: false,
    }
  },
  computed: {
    currentLanguageObject () {
      return this.languages.find(({ codeIso }) => codeIso === this.currentLanguage)
    },
  },
  watch: {
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
     */
    expanded (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.doExpand(newValue)
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
        class="fr-translate__btn fr-btn fr-btn--tertiary"
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
        ref="collapse"
        class="fr-collapse fr-translate__menu fr-menu"
        :class="{ 'fr-collapse--expanded': cssExpanded, 'fr-collapsing': collapsing }"
        @transitionend="onTransitionEnd(expanded)"
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
