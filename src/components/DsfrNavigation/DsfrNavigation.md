# Navigation principale - `DsfrNavigation`

## 🌟 Introduction

Le composant `DsfrNavigation`, est le système central de navigation au sein d’un site. Elle permet d’orienter aisément l’usager à travers l'application voire même jusqu'aux confins de la galaxie !

## 🛠️Props

| Nom             | Type          | Défaut                  | Obligatoire   | Description                                                                                                 |
|-----------------|---------------|-------------------------|---------------|-------------------------------------------------------------------------------------------------------------|
| `id`            | `string`      | `() => useRandomId(...)`|               | Identifiant unique pour la nav. Si non spécifié, un ID aléatoire est généré.                                |
| `label`         | `string`      | `Menu principal`        |               | Nom associé à la navigation. Utile pour l'accessibilité.                                                    |
| `navItems`      | `array`       | `() => []`              | ✅            | Tableau contenant les liens ou sous menus accessibles depuis la navigation.                                 |

## 📡Événements

| Nom                 | Description                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------------|
| `click`             | Événement émis au clic qui déclence l'ouverture ou la fermeture d'un menu.                      |
| `keydown`           | Événement émis en appuyant sur la touche "Echap" qui déclence lla fermeture d'un menu ouvert.   |

---

## 🧩 Slots

| Nom              | Description                                                                                                |
|------------------|------------------------------------------------------------------------------------------------------------|
| `default`        | Slot par défaut pour le contenu de la navigation, il se trouve dans la balise `<ul class="fr-nav__list">`. |

---

## 📝 Exemples

Exemple simple d'utilisation de `DsfrNavigation` :

::: code-group
<Story data-title="Démo" minH="500px">
  <DsfrNavigationDemo />
</Story>

<<< docs-demo/DsfrNavigationDemo.vue [Code de la démo]
:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrNavigation.vue
<<< DsfrNavigation.types.ts

:::

<script setup>
import DsfrNavigationDemo from './docs-demo/DsfrNavigationDemo.vue'
</script>

Avec `DsfrNavigation`, toute destination est à portée de clic, Bon voyage !
