# Information contextuelle et Infobulle - DsfrTooltip

## 🌟 Introduction

Le `DsfrTooltip` est un composant Vue versatile, conçu pour fournir des infobulles contextuelles. Il supporte le déclenchement au survol ou au clic, et s'adapte automatiquement à la position de l'élément source pour une visibilité optimale. Ce composant est idéal pour ajouter des explications ou des informations supplémentaires sans encombrer l'interface utilisateur.

## 🛠️ Les props

| Nom        | Type      | Défaut               | Obligatoire | Description                                                 |
|------------|-----------|----------------------|:-----------:|-------------------------------------------------------------|
| `content`  | `string`  |                      | ✅          | Le texte à afficher dans l'infobulle.                       |
| `onHover`  | `boolean` | `false`              |             | Si `true`, l'infobulle s'affiche au survol.                 |
| `id`       | `string`  | `getRandomId('tooltip')` |         | Identifiant unique pour l'infobulle. Utilisé pour l'accessibilité. |

## 📡 Événements

- Aucun événement personnalisé n'est émis par ce composant.

## 🧩 Les slots

- `default` : Contenu personnalisé pour l'élément déclencheur de l'infobulle (peut être un lien ou un bouton selon `onHover`).

## 📝 Exemples

```vue
<DsfrTooltip content="Voici une infobulle">
  Survolez-moi
</DsfrTooltip>
```

## 📝 Toutes les variantes 🌈 d’info-bulles

::: code-group

<Story data-title="Démo" min-h="300px">
  <DsfrTooltipExample />
</Story>

<<< docs-demo/DsfrTooltipExample.vue [Code de la démo]

<<< DsfrTooltip.vue
:::

Avec DsfrTooltip, révélez des informations cachées comme un magicien sort un lapin de son chapeau ! 🎩🐇✨

<script setup lang="ts">
import DsfrTooltipExample from './docs-demo/DsfrTooltipExample.vue'
</script>
