# Bandeau d'information importante - Notice - `DsfrNotice`

Le bandeau d’information importante permet aux utilisateurs de voir ou d’accéder à une information importante et temporaire.

Il est affiché sur l’ensemble des pages en desktop et en mobile. Il affiche une information importante et urgente (un usage trop fréquent risque de faire “disparaitre” ce bandeau).

La documentation sur l’alerte sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bandeau-d-information-importante)

La story sur l’alerte sur le storybook de [VueDsfr](https://vue-dsfr.netlify.app/?path=/docs/composants-dsfrnotice--docs)

## Structure

La notice est composée des éléments suivants :

- un titre (prop `title`, de type `string`) :
    - optionnel avec une valeur par défault `''`
- Une icône d'information
- une croix de fermeture si la prop `closeable` est à `true`

Slot(s) disponible(s):
- Le slot par défaut permet d'enrichir le contenu du paragraphe représentant le titre de la notice (tag `p` avec la classe `fr-notice__title`).
  - Ceci permet par exemple d'avoir un titre contenant un lien au fil du texte (tag `a`).

## Les props

|  nom                   |   type      |  défaut         | obligatoire |
| ----------------------- | ---------   | ---------------- | -------- |
| `title`                 | *`string`*  |      `''`        |  |
| `closeable`             | *`boolean`* | `false`          | |

## Les événements

`DsfrNotice` déclenche l’événement `'close'` lors du clic sur la croix de fermeture pour fermer la notice.

|  nom                   |   donnée (*payload*) |
| ---------------------- |  ---------            |
| `'close'` |       *aucune*       |

## Les slots

`DsfrNotice` dispose d'un slot par défaut permettant de définir le contenu du titre dans le cas où celui-ci est plus complexe qu'une chaîne de caractères (utilisation de la props `title`).

| nom         | contenu |
|-------------|---------|
| `'default'` | *aucun* |


## Toutes les variantes de Notices

::: code-group

<Story data-title="Démo" min-h="250px">
  <DsfrNoticeExample />
</Story>

<<< docs-demo/DsfrNoticeExample.vue [Code de la démo]

<<< DsfrNotice.vue
:::

<script setup lang="ts">
import DsfrNoticeExample from './docs-demo/DsfrNoticeExample.vue'
</script>
