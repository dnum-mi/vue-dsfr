<script lang="ts" setup>
import DsfrShare from '../DsfrShare.vue'

const title = 'Partages'
const copyLabel = 'Copier dans le presse-papier'
const mail = {
  to: 'mailto:user@example.com?subject=Sujet&body=Corps du courriel',
  label: 'Envoyer un mail',
}
const networks = [
  {
    name: 'facebook',
    label: 'Partager sur Facebook',
    url: 'https://www.facebook.com/sharer.php?u=[À MODIFIER - url de la page]',
  },
  {
    name: 'twitter-x',
    label: 'Partager sur X (anciennement Twitter)',
    url: 'https://twitter.com/intent/tweet?url=[À MODIFIER - url de la page]&text=[À MODIFIER - titre ou texte descriptif de la page]&via=[À MODIFIER - via]&hashtags=[À MODIFIER - hashtags]',
  },
  {
    name: 'linkedin',
    label: 'Partager sur LinkedIn',
    url: 'https://www.linkedin.com/shareArticle?url=[À MODIFIER - url de la page]&title=[À MODIFIER - titre ou texte descriptif de la page]',
  },
]
</script>

<template>
  <div class="w-90">
    <DsfrShare
      :title="title"
      :copy-label="copyLabel"
      :networks="networks"
      :mail="mail"
    />
  </div>
</template>
