# Les Couleurs du DSFR

Vous trouverez ici toutes les couleurs et leur nom de variables CSS (CSS custom properties) ci-dessous.

D’abord toutes celles du thème clair, puis toutes celles du thème sombre.

## Couleurs du thème clair

<div class="light">
  <AppColors :colors="colors.colors" theme="light" />
</div>

## Couleurs du thème sombre

<div class="dark">
  <AppColors :colors="colors.darkColors" theme="dark" />
</div>

<script setup>
import colors from './colors.json' with { type: 'json' }
</script>

<style scoped>
.light {
  background-color: #fff;
  color: #161616;
}
.dark {
  background-color: #242424;
  color: #fff;
}
</style>
