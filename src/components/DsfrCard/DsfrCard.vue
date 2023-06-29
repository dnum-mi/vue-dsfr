
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { RouteLocationNormalized } from 'vue-router'
import DsfrButtonGroup from '../DsfrButton/DsfrButtonGroup.vue'
import { type DsfrButtonProps } from '../DsfrButton/DsfrButton.vue'

const props = withDefaults(defineProps<{
  imgSrc?: string
  link?: string | RouteLocationNormalized
  title: string
  description: string
  size?: 'md' | 'medium' | 'large' | 'lg' | 'sm' | 'small' | undefined
  detail?: string
  altImg?: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  buttons?: DsfrButtonProps[]
  linksGroup?:(string | ({ label: string } & ({ to: RouteLocationNormalized } | { link: string } | { href: string })))[]
  noArrow?: boolean
  horizontal?: boolean
}>(), {
  imgSrc: undefined,
  link: undefined,
  detail: undefined,
  altImg: '',
  buttons: () => [],
  linksGroup: () => [],
  titleTag: 'h3',
  size: 'md',
})

const sm = computed(() => {
  return ['sm', 'small'].includes(props.size)
})
const lg = computed(() => {
  return ['lg', 'large'].includes(props.size)
})
const externalLink = computed(() => {
  return typeof props.link === 'string' && props.link.startsWith('http')
})

const titleElt = ref(null)
const goToTargetLink = () => {
  titleElt.value.querySelector('.fr-card__link').click()
}
defineExpose({ goToTargetLink })
</script>

<template>
  <div
    class="fr-card"
    :class="{
      'fr-card--horizontal': horizontal,
      'fr-enlarge-link': !noArrow,
      'fr-card--sm': sm,
      'fr-card--lg': lg,
    }"
    data-testid="fr-card"
  >
    <div class="fr-card__body">
      <div class="fr-card__content">
        <component
          :is="titleTag"
          ref="title"
          class="fr-card__title"
        >
          <a
            v-if="externalLink"
            :href="link"
            data-testid="card-link"
            class="fr-card__link"
          >{{ title }}</a>
          <RouterLink
            v-else-if="link"
            :to="link"
            class="fr-card__link"
            data-testid="card-link"
            @click="$event.stopPropagation()"
          >
            {{ title }}
          </RouterLink>
          <template v-else>
            {{ title }}
          </template>
        </component>
        <p class="fr-card__desc">
          {{ description }}
        </p>
        <p class="fr-card__detail">
          {{ detail }}
        </p>
      </div>

      <div
        v-if="buttons.length || linksGroup.length"
        class="fr-card__footer"
      >
        <dsfr-button-group
          v-if="buttons.length"
          :buttons="buttons"
          inline-layout-when="lg"
          :size="size"
          reverse
        />
        <ul
          v-if="linksGroup.length"
          class="fr-links-group"
        >
          <li
            v-for="singleLink in linksGroup"
            :key="singleLink.link || singleLink.href || singleLink.to"
          >
            <a
              :href="singleLink.link || singleLink.href || singleLink.to"
              :class="{
                'fr-link': true,
                'fr-icon-arrow-right-line': true,
                'fr-link--icon-right': true,
                'fr-link--sm': sm,
                'fr-link--lg': lg,
              }"
            >
              {{ singleLink.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="imgSrc"
      class="fr-card__header"
    >
      <div class="fr-card__img">
        <img
          :src="imgSrc"
          class="fr-responsive-img"
          :alt="altImg"
          data-testid="card-img"
        >
        <!-- L'alternative de l'image (attribut alt) doit à priori rester vide car l'image est illustrative
          et ne doit pas être restituée aux technologies d’assistance. Vous pouvez toutefois remplir l'alternative si vous
          estimez qu'elle apporte une information essentielle à la compréhension du contenu non présente dans le texte -->
      </div>
    </div>
  </div>
</template>
