<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrLanguageSelector',
  props: {
    languages: {
      type: Array,
      default: () => {},
    },
  },
})

</script>

<template>
  <nav
    role="navigation"
    class="fr-translate fr-nav"
  >
    <div class="fr-nav__item">
      <button
        class="fr-translate__btn fr-btn fr-btn--tertiary"
        aria-controls="translate-1181"
        aria-expanded="false"
        title="Sélectionner une langue"
      >
        FR<span class="fr-hidden-lg">&nbsp;- Français</span>
      </button>
      <div
        id="translate-1181"
        class="fr-collapse fr-translate__menu fr-menu"
      >
        <ul class="fr-menu__list">
          <li>
            <a
              class="fr-translate__language fr-nav__link"
              hreflang="fr"
              lang="fr"
              href="#"
              aria-current="true"
            >FR - Français</a>
          </li>
          <li
            v-for="language, idx in languages"
            :key="idx"
          >
            <a
              class="fr-translate__language fr-nav__link"
              :hreflang="language.codeIso"
              :lang="language.codeIso"
              href="#"
            >{{ language.codeIso.toUpperCase() + ' - ' + language.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style src="@gouvfr/dsfr/dist/component/translate/translate.css" />
