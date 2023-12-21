# DsfrButton

🌟 **Introduction**

Le `DsfrButton` est un composant Vue élégant et réutilisable, conçu pour simplifier la création de boutons personnalisés. Il intègre des tailles ajustables, des icônes optionnelles et un gestionnaire de clics, tout en respectant le style de `DSFR`. Son utilisation est simple, avec une grande flexibilité pour s'adapter à différents contextes.

## 🛠️ Les props

| Nom         | Type                       | Défaut     | Obligatoire | Description                                           |
|-------------|----------------------------|------------|:-----------:|-------------------------------------------------------|
| `size`      | `'sm' \| 'md' \| 'lg'`     | `'md'`     |             | Taille du bouton. Peut être 'sm', 'md', ou 'lg'.      |
| `icon`      | `string \| object`         | `undefined`|             | Icône à afficher dans le bouton. Peut être un nom ou une configuration d'icône. |
| `label`     | `string`                   | `undefined`|             | Étiquette textuelle du bouton.                        |
| `onClick`   | `Function`                 | `() => {}` |             | Fonction appelée lors du clic sur le bouton.          |

## 📡 Les événements

- `click` : Émis lorsque le bouton est cliqué.

## 🧩 Les slots

- `default` : Emplacement pour le contenu personnalisé du bouton. Inséré dans `<button class="fr-btn"><span">`.

## 📝 Des exemples

```vue
<DsfrButton
  size="lg"
  icon="fr-icon-home-4-fill"
  label="Accueil"
  @click="handleClick()"
/>

Un bouton large avec une icône 'maison' et le texte 'Accueil'. L'événement de clic est géré par la méthode `handleClick()`.

```vue
<DsfrButton
  size="sm"
  label="Petit Bouton"
  @click="handleClick()"
>
  Contenu supplémentaire
</DsfrButton>
```

Un petit bouton avec le texte 'Petit Bouton' et du contenu supplémentaire dans le slot par défaut. L'événement de clic est géré par la méthode `handleClick()`.

## 📝 (Presque) toutes les variantes 🌈 de boutons

::: code-group

<Story data-title="Démo" min-h="1200px">
  <DsfrButtonDemo />
</Story>

<<< docs-demo/DsfrButtonExample.vue [Code de la démo]

<<< DsfrButton.vue
:::

Et voilà ! Notre DsfrButton est prêt à illuminer votre interface avec style et fonctionnalité. N'oubliez pas d'appuyer sur ces boutons avec panache ! 🚀

<script setup lang="ts">
import DsfrButtonDemo from './docs-demo/DsfrButtonExample.vue'
</script>
