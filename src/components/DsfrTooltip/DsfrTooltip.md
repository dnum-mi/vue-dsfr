# Information contextuelle et Infobulle - `DsfrTooltip`

## 🌟 Introduction

Le `DsfrTooltip` est un composant Vue versatile, conçu pour fournir des infobulles contextuelles. Il supporte le déclenchement au survol ou au clic, et s'adapte automatiquement à la position de l'élément source pour une visibilité optimale. Ce composant est idéal pour ajouter des explications ou des informations supplémentaires sans encombrer l'interface utilisateur.

## 🛠️ Props

| Nom        | Type      | Défaut               | Obligatoire | Description                                                 |
|------------|-----------|----------------------|:-----------:|-------------------------------------------------------------|
| `content`  | `string`  |                      | ✅          | Le texte à afficher dans l'infobulle.                       |
| `onHover`  | `boolean` | `false`              |             | Si `true`, l'infobulle s'affiche au survol.                 |
| `id`       | `string`  | `useRandomId('tooltip')` |         | Identifiant unique pour l'infobulle. Utilisé pour l'accessibilité. |

## 🎯 Comportement

- **Mode clic** (`onHover: false`, défaut) : l'infobulle s'affiche au clic ou au focus sur le déclencheur. Elle reste visible si le focus ou le clic se déplace sur l'infobulle elle-même, ce qui permet de **sélectionner son contenu**. Elle se ferme au clic en dehors ou via la touche `Échap`.
- **Mode survol** (`onHover: true`) : l'infobulle s'affiche au survol du déclencheur. Elle reste visible si la souris se déplace vers l'infobulle, permettant également la **sélection du texte**. Elle se ferme quand la souris quitte l'infobulle.

## 📡Évenements

- Aucun événement personnalisé n'est émis par ce composant.

## 🧩 Slots

- `default` : Contenu personnalisé pour l'élément déclencheur de l'infobulle (peut être un lien ou un bouton selon `onHover`).

## 📝 Exemples

```vue
<DsfrTooltip content="Voici une infobulle">
  Survolez-moi
</DsfrTooltip>
```

## 📝 Toutes les variantes 🌈 d’info-bulles

::: code-group

<Story data-title="Démo" min-h="1000px">
  <DsfrTooltipDemo />
</Story>

<<< docs-demo/DsfrTooltipDemo.vue [Code de la démo]

:::

Avec DsfrTooltip, révélez des informations cachées comme un magicien sort un lapin de son chapeau ! 🎩🐇✨

## ⚙️ Code source du composant

::: code-group

<<< DsfrTooltip.vue
<<< DsfrTooltip.types.ts

:::

<script setup lang="ts">
  import DsfrTooltipDemo from './docs-demo/DsfrTooltipDemo.vue'
</script>
