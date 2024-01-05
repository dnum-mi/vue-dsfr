<script lang="ts" setup>
import DsfrConsent from '../DsfrConsent.vue'

const AcceptAllCookies = () => {}
const RefuseAllCookies = () => {}
const CustomizeCookies = () => {}

</script>

<template>
  <DsfrConsent
    @accept-all="AcceptAllCookies()"
    @refuse-all="RefuseAllCookies()"
    @customize="CustomizeCookies()"
  >
    <p>
      Nous avons recours à plusieurs cookies afin d'améliorer votre
      expérience sur cette application. Vos données vous appartiennent
      et ce bandeau vous permet de sélectionner les cookies que vous
      souhaitez activer. Pour plus d'informations, consultez notre page
      <a href="/donnees">Données personnelles et cookies</a>.
    </p>
  </DsfrConsent>
</template>
