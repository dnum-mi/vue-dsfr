# Information contextuelle et Infobulle - `DsfrTooltip`

## 🌟 Introduction

Le `DsfrTooltip` est un composant Vue versatile, conçu pour fournir des infobulles contextuelles. Il supporte le déclenchement au survol ou au clic, et s'adapte automatiquement à la position de l'élément source pour une visibilité optimale. Ce composant est idéal pour ajouter des explications ou des informations supplémentaires sans encombrer l'interface utilisateur.

## 🛠️ Props

| Nom        | Type      | Défaut               | Obligatoire | Description                                                 |
|------------|-----------|----------------------|:-----------:|-------------------------------------------------------------|
| `content`  | `string`  |                      | ✅          | Le texte à afficher dans l'infobulle.                       |
| `onHover`  | `boolean` | `false`              |             | Si `true`, l'infobulle s'affiche au survol.                 |
| `id`       | `string`  | `useRandomId('tooltip')` |         | Identifiant unique pour l'infobulle. Utilisé pour l'accessibilité. |

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
