# Les Couleurs du DSFR

Vous trouverez ici toutes les couleurs et leur nom de variables CSS (CSS custom properties) ci-dessous.

D’abord toutes celles du thème clair, puis toutes celles du thème sombre.

## Couleurs du thème clair

<AppColors :colors="colors.colors" />

## Couleurs du thème sombre

<div class="dark">
<AppColors :colors="colors.darkColors" />
</div>

<script setup>
import colors from './colors.json' with { type: 'json' }
</script>

<style scoped>
.dark {
  background-color: #242424;
  color: #fff;
}
</style>
