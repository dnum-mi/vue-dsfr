<script lang="ts" setup>
import { ref } from 'vue'

import DsfrFollow from '../DsfrFollow.vue'
import DsfrNewsLetter from '../DsfrNewsLetter.vue'

const title = 'Titre de la lettre d’information'
const description = 'Description de la lettre d’information'
const email = ref<string>('email.super@chouette.fr')
const labelEmail = 'Votre adresse électronique'
const inputTitle = 'Adresse électronique'
const placeholder = 'james.bond@mi6.gov.uk'
const hintText = 'En renseignant votre adresse électronique, vous acceptez de recevoir nos actualités par courriel. Vous pouvez vous désinscrire à tout moment à l’aide des liens de désinscription ou en nous contactant.'
const buttonText = 'S’abonner'
const buttonTitle = 'Titre du bouton (attribut `title`) de la balise `button`'
</script>

<template>
  <DsfrFollow>
    <!-- Important, car ce div est dans un div.fr-grid-row -->
    <div class="fr-col-12">
      <DsfrNewsLetter
        v-model:email="email"
        :title="title"
        :description="description"
        :label-email="labelEmail"
        :input-title="inputTitle"
        :placeholder="placeholder"
        :hint-text="hintText"
        :button-text="buttonText"
        :button-title="buttonTitle"
      />
    </div>
  </DsfrFollow>
</template>
