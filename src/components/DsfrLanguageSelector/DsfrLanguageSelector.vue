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
      // Need to handle a separate data to add/remove the class after a RAF
      cssExpanded: false,
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
        if (newValue === true) {
          // unbound
          // @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L33
          this.$refs.collapse.style.setProperty('--collapse-max-height', 'none')
        }
        // We need to wait for the next RAF to be sure the CSS variable will be set
        // DSFR use RAF too https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/api/modules/render/renderer.js#L22
        window.requestAnimationFrame(() => {
          this.collapsing = true
          this.adjust()
          // We need to wait for the next RAF to be sure the animation will be triggered
          window.requestAnimationFrame(() => {
            this.cssExpanded = newValue
          })
        })
      }
    },
  },
  methods: {
    selectLanguage (language) {
      this.expanded = false
      this.$emit('select', language)
    },
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L61
     */
    adjust () {
      this.$refs.collapse.style.setProperty('--collapser', 'none')
      const height = this.$refs.collapse.offsetHeight
      this.$refs.collapse.style.setProperty('--collapse', -height + 'px')
      this.$refs.collapse.style.setProperty('--collapser', '')
    },
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L25
     */
    onTransitionEnd () {
      this.collapsing = false
      if (this.expanded === false) {
        this.$refs.collapse.style.removeProperty('--collapse-max-height')
      }
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
        @transitionend="onTransitionEnd"
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
