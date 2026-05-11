# Pictogrammes du DSFR

Ci-dessous sont listés les pictogrammes standards du DSFR.
La librairie d’images au format SVG est accessible dans la librairie DSFR, dans le dossier `dist/artwork/pictograms`.

[Site officiel](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/pictogramme)

Vous pouvez copier le code d'import en cliquant sur le pictogramme.

*Par exemple, en cliquant sur `city-hall`, vous copierez `import svgCityHall from '@gouvfr/dsfr/dist/artwork/pictograms/buildings/city-hall.svg'` dans le presse-papiers.*

## Les pictogrammes par section

  <AppPictograms :pictograms/>


<script setup>
import pictograms from './pictograms.json' with { type: 'json' }
</script>
