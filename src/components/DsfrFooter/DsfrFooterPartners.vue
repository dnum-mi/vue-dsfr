<script lang="ts" setup>
import type { TitleTag } from '@/common-types'

export type DsfrFooterPartner = {
  href: string
  logo: string
  name: string
}

export type DsfrFooterPartnersProps = {
  mainPartner?: DsfrFooterPartner
  subPartners?: DsfrFooterPartner[]
  title?: string
  titleTag?: TitleTag
}

withDefaults(defineProps<DsfrFooterPartnersProps>(), {
  mainPartner: undefined,
  subPartners: () => [],
  title: '',
  titleTag: 'h4',
})
</script>

<template>
  <div class="fr-footer__partners">
    <component
      :is="titleTag"
      v-if="title"
      class="fr-footer__partners-title"
    >
      {{ title }}
    </component>
    <div class="fr-footer__partners-logos">
      <div
        v-if="mainPartner"
        class="fr-footer__partners-main"
      >
        <a
          class="fr-footer__partners-link"
          :href="mainPartner.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="fr-footer__logo"
            :src="mainPartner.logo"
            :alt="mainPartner.name"
          >
        </a>
      </div>
      <div class="fr-footer__partners-sub">
        <ul>
          <li
            v-for="(partner, idx) in subPartners"
            :key="idx"
          >
            <a
              class="fr-footer__partners-link"
              :href="partner.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="fr-footer__logo"
                :src="partner.logo"
                :alt="partner.name"
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
