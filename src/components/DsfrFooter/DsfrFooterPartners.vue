<script lang="ts" setup>
export type DsfrFooterPartner = {
  href: string
  logo: string
  name: string
}

export type DsfrFooterPartnersProps = {
  mainPartner?: DsfrFooterPartner
  subPartners?: DsfrFooterPartner[],
  title?: string,
}

withDefaults(defineProps<DsfrFooterPartnersProps>(), {
  mainPartner: undefined,
  subPartners: () => [],
  title: '',
})
</script>

<template>
  <div class="fr-footer__partners">
    <h4
      v-if="title"
      class="fr-footer__partners-title"
    >
      {{ title }}
    </h4>
    <div class="fr-footer__partners-logos">
      <div
        v-if="mainPartner"
        class="fr-footer__partners-main"
      >
        <a
          class="fr-footer__partners-link"
          :href="mainPartner.href"
          target="_blank"
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
