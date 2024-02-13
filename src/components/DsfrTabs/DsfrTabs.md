# Onglets - `DsfrTabs`

## 🌟 Introduction

Bonjour les artistes du code ! Voici `DsfrTabs`, le composant d'onglets Vue qui va révolutionner votre façon de présenter des contenus séparés mais cohérents. Avec sa gestion dynamique des onglets et son contenu personnalisable, vous êtes sur le point de donner à vos utilisateurs une expérience de navigation intuitive et élégante. Préparez-vous à plonger dans un monde où chaque onglet raconte sa propre histoire !

## 🛠️ Les props

| Nom                  | Type                      | Défaut       | Obligatoire | Description                                                |
|----------------------|---------------------------|--------------|-------------|------------------------------------------------------------|
| tabContents          | `string[]`                   | `[]`   |             | Contenus des onglets.                                      |
| initialSelectedIndex | `number`                  | `0`          |             | Index de l'onglet sélectionné au chargement.               |
| tabTitles            | `string[]`                   | `[]`   |             | Titres des onglets avec les id des panneaux et onglets associés. |

## 📡 Les Événements

|  nom                   |   donnée (*payload*) | détail de la donnée
| ---------------------- |  ---------            | --- |
| `'select-tab '` |       *`string`*       | Émis lorsqu'un onglet est sélectionné. Envoyant l'index de l'onglet sélectionné. |

## 🧩 Les slots

| Nom          | Description                                                        |
|--------------|--------------------------------------------------------------------|
| tab-items    | Slot nommé pour insérer des titres d’onglets personnalisés. Si rempli, la prop `tabTitles` n’a aucun effet. |
| default      | Slot par défaut pour le contenu des onglets.                       |

## Les méthodes exposées

- `DsfrTabs#renderTabs()`: permet de forcer le recalcul de la hauteur de l’onglet
- `DsfrTabs#selectIndex()`: permet d’indiquer quel onglet doit être sélectionné (commence à 0)
- `DsfrTabs#selectFirst` : permet de sélectionner le premier onglet (raccourci de `selectIndex(0)`)
- `DsfrTabs#selectLast` : permet de sélectionner le dernier onglet (raccourci de `selectIndex(tabs.length - 1)`)

## 📝 Exemples

1. **Onglets Simples :**

::: code-group

<Story data-title="Démo" min-h="160px">
  <DsfrTabsDemoSimple />
</Story>

<<< docs-demo/DsfrTabsDemoSimple.vue [Code de la démo]

:::

2. **Onglets Complexes :**

::: code-group

<Story data-title="Démo" min-h="260px">
  <DsfrTabsDemoComplex />
</Story>

<<< docs-demo/DsfrTabsDemoComplex.vue [Code de la démo]

:::

## ⚙️ Code source des composants

::: code-group
<<< DsfrTabs.vue
<<< DsfrTabContent.vue
<<< DsfrTabItem.vue
<<< DsfrTabs.types.ts
:::

<script setup lang="ts">
import DsfrTabsDemoSimple from './docs-demo/DsfrTabsDemoSimple.vue'
import DsfrTabsDemoComplex from './docs-demo/DsfrTabsDemoComplex.vue'
</script>
