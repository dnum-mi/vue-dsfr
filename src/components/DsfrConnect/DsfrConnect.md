# Bouton FranceConnect / ProConnect - `DsfrConnect`

## 🌟 Introduction

Le composant `DsfrConnect` regroupe les boutons d’authentification déléguée du service public : **FranceConnect**, **FranceConnect+** et **ProConnect**.

- **FranceConnect** permet aux citoyens de se connecter à des services publics en ligne via leurs identifiants existants (impots.gouv.fr, ameli.fr, etc.).
- **FranceConnect+** est la version renforcée de FranceConnect, pour les actes nécessitant un niveau de garantie d’identité élevé (eIDAS substantiel ou élevé).
- **ProConnect** est le service d’authentification pour les agents et professionnels.

Les fournisseurs d’identités supportés incluent : impots.gouv.fr, ameli.fr, l’Identité Numérique La Poste, MobileConnect et moi, msa.fr et France Identité.

Le fonctionnement en détail : <https://franceconnect.gouv.fr/partenaires>

🏅 La documentation sur le bouton FranceConnect sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-franceconnect)

<VIcon name="vi-file-type-storybook" /> La story sur le bouton FranceConnect sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrconnect--docs)

## 📐 Structure

- Un bouton pour la connexion, dont l’apparence varie selon la prop `variant`.
- Un lien d’aide « Qu’est-ce que… » pointant vers le site du service concerné, avec le texte et l’URL adaptés à la variante et à la langue.

## 🛠️ Props

| Propriété  | Type                                    | Défaut      | Description                                                                                                                          |
|------------|-----------------------------------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `variant`  | `'plus' \| 'pro'`                       | `undefined` | Variante du bouton : `'plus'` pour FranceConnect+, `'pro'` pour ProConnect. Sans valeur, affiche FranceConnect standard.             |
| `lang`     | `'fr' \| 'en' \| 'es' \| 'de'`          | `'fr'`      | Langue utilisée pour le texte du lien d'aide. Toute valeur non reconnue revient à `'fr'`.                                            |
| `id`       | `string`                                | `undefined` | Identifiant HTML du composant.                                                                                                       |

### Variantes et URLs associées

| `variant`     | Bouton affiché   | URL du lien d’aide                                          |
|---------------|------------------|-------------------------------------------------------------|
| undefined     | FranceConnect    | `https://franceconnect.gouv.fr/`                            |
| `'plus'`      | FranceConnect+   | `https://franceconnect.gouv.fr/france-connect-plus`         |
| `'pro'`       | ProConnect       | `https://franceconnect.gouv.fr/france-connect-pro`          |

## 📡 Événements

Ce composant ne déclenche pas d’événements spécifiques.

## 🧩 Slots

Pas de slot.

## 📝 Exemples

### FranceConnect (défaut)

```vue
<DsfrConnect />
```

### FranceConnect+

```vue
<DsfrConnect variant="plus" />
```

### ProConnect

```vue
<DsfrConnect variant="pro" />
```

### Avec une langue différente

```vue
<DsfrConnect lang="en" />

<DsfrConnect variant="pro" lang="de" />
```

### Démo interactive

::: code-group

<Story data-title="Démo" min-h="520px">
  <DsfrConnectDemo />
</Story>

<<< docs-demo/DsfrConnectDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrConnect.vue
<<< DsfrConnect.types.ts
<<< DsfrConnect.i18n.ts

:::

`DsfrConnect` est conçu pour être simple et direct, permettant une intégration facile dans toute application nécessitant une fonctionnalité de connexion FranceConnect ou ProConnect.

Il offre très peu de personnalisation, et cela est voulu (cf. les sections [« À ne pas faire » de la documentation officielle DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-franceconnect/)).

<script setup lang="ts">
import DsfrConnectDemo from './docs-demo/DsfrConnectDemo.vue'
</script>
