<script lang="ts" setup>
import { ref } from 'vue'

import DsfrButton from '../DsfrButton.vue'
import DsfrButtonGroup from '../DsfrButtonGroup.vue'

const nb1 = ref(0)
const nb2 = ref(0)

const buttons = [
  {
    label: 'Bouton du premier groupe',
    onclick: () => {
      nb1.value++
    },
  },
  {
    label: 'Bouton secondaire du premier groupe',
    secondary: true,
    onclick: () => {
      nb2.value++
    },
  },
]
</script>

<template>
  <div class="fr-container fr-my-2w">
    <div>
      <p class="fr-text--lg">
        Premier groupe, 2 petits boutons avec utilisation de la prop `buttons`
      </p>
      <DsfrButtonGroup
        size="sm"
        :buttons="buttons"
      />
      <p class="fr-text--sm">
        Bouton primaire cliqué {{ nb1 }} fois
      </p>
      <p class="fr-text--sm">
        Bouton secondaire cliqué {{ nb2 }} fois
      </p>
    </div>
    <div>
      <p class="fr-text--lg">
        Deuxième groupe, avec utilisation du slot
      </p>
      <DsfrButtonGroup
        equisized
        inline-layout-when="always"
      >
        <li>
          <DsfrButton
            label="1re"
            primary
          />
        </li>
        <li>
          <DsfrButton
            label="2re"
            secondary
          />
        </li>
        <li>
          <DsfrButton
            label="3re"
            tertiary
          />
        </li>
        <li>
          <DsfrButton
            label="3re ss bord"
            tertiary
            no-outline
          />
        </li>
      </DsfrButtonGroup>
    </div>
  </div>
</template>
