# Champ de saisie - `DsfrInput`

## 🌟 Introduction

Le composant `DsfrInput`, outil essentiel dans l'arsenal de tout développeur Vue ! Que ce soit pour saisir votre nom de fromage préféré ou la date de votre dernière visite à la Tour Eiffel, `DsfrInput` est là pour rendre la saisie de données aussi douce qu'un croissant frais le matin 🥐 (oui, on aime bien les croissants par ici).

## 🛠️ Props

| Nom             | Type          | Défaut                  | Obligatoire   | Description                                                                                                 |
|-----------------|---------------|-------------------------|---------------|-------------------------------------------------------------------------------------------------------------|
| `id`            | `Function`    | `() => getRandomId(...)`|               | Identifiant unique pour l'input. Si non spécifié, un ID aléatoire est généré.                               |
| `descriptionId` | `string`      | `undefined`             |               | ID pour la description associée à l'input. Utile pour l'accessibilité.                                      |
| `hint`          | `string`      | `''`                    |               | Texte d'indice pour guider l'utilisateur.                                                                   |
| `label`         | `string`      | `''`                    |               | Le libellé de l'input.                                                                                      |
| `labelClass`    | `string`      | `''`                    |               | Classe personnalisée pour le style du libellé.                                                              |
| `modelValue`    | `string`      | `''`                    |               | La valeur liée au modèle de l'input.                                                                        |
| `wrapperClass`  | `string`      | `''`                    |               | Classe personnalisée pour le style du conteneur de l'input.                                                 |

---

## 📡 Events

| Nom                 | Description                                                                  |
|---------------------|------------------------------------------------------------------------------|
| `update:modelValue` | Événement émis lors de la mise à jour de la valeur de l'input.               |

---

## 🧩 Slots

| Nom              | Description                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| `label`          | Slot pour personnaliser le contenu de la balise `<label>`.                                        |
| `required-tip`   | Slot pour indiquer si le champ est obligatoire. Par défaut, affiche une astérisque si requis.     |

---

## 📝 Exemples

Exemple simple d'utilisation de `DsfrInput` :

::: code-group
<Story data-title="Démo" minH="500px">
  <DsfrInputDemo />
</Story>

<<< docs-demo/DsfrInputDemo.vue [Code de la démo]
:::

<script setup>
import DsfrInputDemo from './docs-demo/DsfrInputDemo.vue'
</script>

Avec `DsfrInput`, la saisie de données devient aussi élégante que la promenade dans un vignoble en automne. 🍇 Bonne programmation !
