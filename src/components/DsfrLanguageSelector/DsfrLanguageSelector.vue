<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { getRandomId } from '../../utils/random-utils'
import { useCollapsable } from '../../composables'

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const props = withDefaults(defineProps<{
  id?: string,
  languages?: { codeIso: string; label: string }[]
  currentLanguage?: string
}>(), {
  id: () => getRandomId('translate'),
  languages: () => [],
  currentLanguage: 'fr',
})

const expanded = ref(false)

type Language = { codeIso: string, label: string }
const emit = defineEmits<{(e: 'select', payload: Language): void}>()
function selectLanguage (language: Language) {
  expanded.value = false
  emit('select', language)
}

const currentLanguageObject = computed(
  () => props.languages.find(({ codeIso }) => codeIso === props.currentLanguage),
)

watch(expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
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
        {{ currentLanguageObject?.codeIso.toUpperCase() }}<span class="fr-hidden-lg">&nbsp;- {{ currentLanguageObject?.label }}</span>
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
