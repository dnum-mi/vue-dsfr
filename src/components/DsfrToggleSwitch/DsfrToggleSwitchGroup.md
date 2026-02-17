# Groupe d'interrupteurs - `DsfrToggleSwitchGroup`

## 🌟 Introduction

Le groupe d'interrupteurs est utilisé pour constituer une liste d’actions de même nature.
Les interrupteurs du groupe auront un comportement uniforme pour la bordure basse et pour le texte à afficher sous l'interrupteur lorsqu'il est activé ou désactivé.
Le Statut d'erreur est commun pour l'ensemble du groupe

## 🛠️ Props

Aucune prop n’est obligatoire

| Nom              | Type                          | Défaut             | Description                                                               |
|------------------|-------------------------------|--------------------|---------------------------------------------------------------------------|
| id               | string                        |                    | Identifiant unique pour le groupe. Utilisé pour l'accessibilité.          |
| legend           | string                        |                    | Légende pour l'ensemble des éléments                                      |
| toggleSwitches   | DsfrToggleSwitchProps[]       |                    | Tableau d'interrupteurs à afficher. Chaque interrupteur est un objet [DsfrToggleSwitch](/composants/DsfrToggleSwitch) `borderBottom`, `activeText`, `inactiveText`, `noText` sont gérés au niveau du groupe et sont inutiles |
| borders          | boolean                       |                    | Affiche une bordure sous chaque interrupteur et label.                    |
| activeText       | string                        |                    | Texte à afficher sous le groupe d'interrupteurs lorsqu'il est activé      |
| inactiveText     | string                        |                    | Texte à afficher sous le groupe d'interrupteurs  lorsqu'il est désactivé  |
| noText           | boolean                       |                    | Désactive l'affichage de activeText et inactiveText                       |
| status           | undefined / 'valid' / 'error' |                    | statut du message du groupe d'interrupteurs                               |
| validMessage     | string                        |                    | Message de validité du groupe d'interrupteurs                             |
| errorMessage     | string                        |                    | Message d'erreur du groupe d'interrupteurs                                |

## 📝 Exemples

### Groupe d'interrupteurs simple

::: code-group

<Story data-title="Démo" min-h="308px">
  <DsfrToggleSwitchGroupDemo />
</Story>

<<< docs-demo/DsfrToggleSwitchGroupDemo.vue [Code de la démo]

:::

### Groupe d'interrupteurs désactivé

::: code-group

<Story data-title="Démo" min-h="308px">
  <DsfrToggleSwitchGroupDemoDisabled />
</Story>

<<< docs-demo/DsfrToggleSwitchGroupDemoDisabled.vue [Code de la démo]

:::

### Groupe d'interrupteurs en erreur

::: code-group

<Story data-title="Démo" min-h="308px">
  <DsfrToggleSwitchGroupDemoErrorStatus />
</Story>

<<< docs-demo/DsfrToggleSwitchGroupDemoErrorStatus.vue [Code de la démo]

:::

## ⚙️Code source du composant

::: code-group

<<< DsfrToggleSwitchGroup.vue

<<< DsfrToggleSwitch.types.ts
:::

Et voilà ! Vous êtes prêt à ajouter une touche de sophistication à votre interface avec DsfrToggleSwitchGroup. Bonne création ! 🎨✨

<script setup lang="ts">
import DsfrToggleSwitchGroupDemo from './docs-demo/DsfrToggleSwitchGroupDemo.vue'
import DsfrToggleSwitchGroupDemoDisabled from './docs-demo/DsfrToggleSwitchGroupDemoDisabled.vue'
import DsfrToggleSwitchGroupDemoErrorStatus from './docs-demo/DsfrToggleSwitchGroupDemoErrorStatus.vue'

</script>
