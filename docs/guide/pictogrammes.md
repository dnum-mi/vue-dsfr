# Pictogrammes Du DSFR

Ci-dessous sont listés les pictogrammes standards du DSFR.
librairie d‘images au fomat SVG sont accèssibles dans la librairie DSFR dans le dossier dist/artwork/pictograms

[Site officiel](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/pictogramme)

Vous pouvez une copier du code d'import en cliquant sur le pictogramme.

*Par exemple en cliquant sur `city-hall` vous aurez `import svgCityHall from '@gouvfr/dsfr/dist/artwork/pictograms/buildings/city-hall.svg'` dans le presse-papier*

## Les pictogrammes par section

  <AppPictograms :pictograms/>


<script setup>
import pictograms from './pictograms.json' with { type: 'json' }
</script>
