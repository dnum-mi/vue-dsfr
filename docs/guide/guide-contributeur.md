# Guide du contributeur

## Comment contribuer

::: info NOTE

Ceci est le **guide du contributeur** pour contribuer au projet de cette bibliothèque.
Si vous cherchez à **utiliser** cette bibliothèque, veuillez vous référer au
[Guide d'utilisation](./pour-commencer.md).

:::

### TL;DR

- Tous les textes doivent être en français (commits, discussions GitHub, commentaires...) ;
- chaque commit doit expliquer son contexte et/ou sa raison d’être en premier
- chaque commit doit respecter les **[Commits Conventionnels](https://www.conventionalcommits.org/fr/v1.0.0/)** ;
- une PR doit être faite avec une branche **à jour avec la branche `develop` en `rebase` (et sans `merge`) avant demande de fusion** ;
- et **la fusion doit être demandée dans `develop`** ;
- le nom de la branche doit être préfixé par le numéro de l’issue GitHub correspondante.

Un commit qui répond à l’ajout d’une fonctionnalité doit contenir (à la fin, généralement) le mot-clé `closes` suivi de l’issue GitHub correspondante.

Exemple entier :

sur la branche **`1170-radio-button-set-rich`**, ajouter un commit comme suit :

```text
feat(DsfrRadioButtonSet): ✨ ajoute la propriété rich pour les boutons radio enrichis

- Permet d'utiliser des boutons radio "riches" avec du contenu enrichi dans `DsfrRadioButtonSet`
- Améliore les possibilités de mise en forme des options de boutons radio
- Répond au besoin d'avoir des boutons radio avec du contenu plus riche que du simple texte

- Ajout de la propriété optionnelle `rich?: boolean` dans `DsfrRadioButtonSetProps`
- Transmission de la prop `rich` au composant `DsfrRadioButton` enfant

closes #1170
```

Un commit qui répond à l’ajout d’une fonctionnalité doit contenir (à la fin, généralement) le mot-clé `closes` suivi de l’issue GitHub correspondante.

Exemple :

sur la branche **`1170-radio-button-prop-types`**, ajouter un commit :

```text
fix(DsfrRadioButton): 🐛 corrige le type des props

- `DsfrRadioButtonProps`
- Améliore les possibilités de mise en forme des options de boutons radio
- Répond au besoin d'avoir des boutons radio avec du contenu plus riche que du simple texte

- Ajout de la propriété optionnelle `rich?: boolean` dans `DsfrRadioButtonSetProps`
- Transmission de la prop `rich` au composant `DsfrRadioButton` enfant

fixes #1080
```

::: tip Astuce

Demander à copilot de créer le commit.

En effet, le projet contient des instructions qui sont normalement automatiquement par copilot et qui écriront des messages de commit formattés selon les conventions du projet.

:::

### Langue et communication

Il s’agit d’un projet franco-français dédié aux sites officiels français. Ce dépôt ne sera donc lu que par des français.

Ainsi, **tout le contenu de ce projet doit être rédigé en français**, y compris :

- Messages de commits
- Commentaires dans le code
- Documentation
- Échanges sur GitHub (issues, pull requests, discussions)
- Noms de fichiers lorsque c'est pertinent

**Seules exceptions autorisées et même recommandées :**

- **Noms de branches** : en anglais pour qu'ils soient plus courts et standardisés (ex: `180-button-component`, `123-accessibility-issue-on-dsfr-tab`)
- **Noms de variables et fonctions** : en anglais selon les conventions de développement (ex: `handleClick`, `isVisible`, `userConfig`)

Cette approche permet de maintenir la cohérence du projet tout en respectant les bonnes pratiques de développement internationales.

### Cloner le projet

```shell
git clone https://github.com/dnum-mi/vue-dsfr
```

### Pré-requis

- pnpm : version 10.2.1
- Node.js : version 22 minimum

#### Installation des pré-requis (testé sous Ubuntu 24.04)

##### Installation de Node.js

###### Ubuntu

Suivez la procédure suivante en lançant les commandes détaillées ci-dessous :

1. Mise à jour des dépôts :

    ```shell
    wget -qO- https://deb.nodesource.com/setup_22.x | sudo -E bash -
    ```

2. Installer `Node.js` :

    ```shell
    sudo apt install -y nodejs
    ```

##### Windows

Suivre les indications du [site officiel](https://nodejs.org/fr/download)

##### macOS

Suivre les indications du [site officiel](https://nodejs.org/fr/download)

##### Installation par `volta`

Optionnel et fortement recommandé, installer `volta` pour gérer les version de Node.js :

1. Avec la commande curl :

    ```shell
    curl https://get.volta.sh | bash
    ```

2. Fermer et rouvrir un terminal, ou bien taper la commande suivante dans tous les terminaux déjà ouverts :

    ```shell
    source ~/.bashrc
    ```

3. Vérifier la version de Volta installée :

    ```shell
    volta --version
    ```

4. La bonne version de node sera utilisée automatiquement (indiquée dans la propriété `volta.node` du `package.json`)

    Dans le dossier `vue-dsfr`, si vous lancez la commande suivante :

    ```shell
    node --version
    ```

    Vous devriez voir 22.x.x

##### Installation de pnpm

Une fois Node.js installé, installez pnpm avec Corepack (méthode recommandée) :

```shell
# Activer Corepack
corepack enable

# Utiliser la version spécifiée dans package.json
corepack use pnpm@10.2.1

# Ou installer pnpm globalement
npm install -g pnpm
```

### Commandes de développement

Une fois le projet cloné et les dépendances installées :

```shell
# Installation des dépendances
pnpm install

# Démarrer Storybook (développement composants)
pnpm dev

# Démarrer l'app de démonstration
pnpm demo

# Démarrer la documentation
pnpm docs:dev

# Lancer les tests
pnpm test

# Lancer le linting
pnpm lint

# Builder le projet
pnpm build
```

### Comment contribuer au projet

- Cloner le projet et créer des [pull-request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- Indiquer les bugs dans des [issues](https://github.com/dnum-mi/vue-dsfr/issues)
- Faire des demandes dans [discussions](https://github.com/dnum-mi/vue-dsfr/discussions)
- Rejoindre le [server Discord](https://discord.gg/cCS5MGWZ)

### À propos des pull-requests

Les commits doivent suivre la spécification des **[Commits Conventionnels](https://www.conventionalcommits.org/fr/v1.0.0/)** afin que
l’outil de release automatique détecte les nouvelles fonctionnalités, les corrections d’anomalies, et les modifications des documentations.

Les branches doivent être le plus possible **à jour avec la branche `develop` en `rebase` (et sans `merge`) avant demande de fusion**,
et **la fusion doit être demandée dans `develop`.**

### Structure du projet

```
vue-dsfr/
├── src/
│   ├── components/        # Composants DSFR (DsfrButton/, DsfrCard/, etc.)
│   ├── composables/       # Composables Vue (useScheme, useTabs, etc.)
│   ├── utils/             # Fonctions utilitaires
│   └── index.ts           # Point d'entrée principal
├── demo-app/              # Application de démonstration
├── docs/                  # Documentation VitePress
├── tests/unit             # Tests unitaires et utilitaires
├── meta/                  # Outils de build et résolveurs
├── meta-dts/              # Déclarations TypeScript des fichiers du dossier `meta`
└── types/                 # Déclarations TypeScript
```

### Standards de développement

#### TypeScript

- **Utiliser `<script setup lang="ts">`** pour tous les composants
- **Props typées** : `defineProps<PropsInterface>()` obligatoire
- **Pas de `any`** : utiliser `unknown` si nécessaire
- **Types explicites** pour les interfaces publiques

#### Vue.js

- **Composition API** uniquement (`<script setup lang="ts">`)
- **Ref et computed** pour la réactivité
- **Composables** pour la logique partagée dans `src/composables/`
- **Nommage** : composants en PascalCase, props en camelCase

#### Tests

- **Vitest** pour les tests unitaires (`*.spec.ts`)
- **Colocalisation** : tests, documentation (`.md`) est stories (`.stories.ts`) à côté des composants
- **Couverture** obligatoire pour les nouvelles fonctionnalités

#### Documentation

- **Storybook** : stories obligatoires pour les nouveaux composants (`*.stories.ts`)
- **Fichier .md** : documentation en français pour chaque composant
- **Démos** : exemples d'usage dans `docs-demo/` pour la documentation VitePress

### Résolution des problèmes courants

#### Problèmes de build

```shell
# Nettoyer et réinstaller
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Vérifier les versions
node --version  # >= 22.0.0
pnpm --version  # 10.2.1
```

#### Tests qui échouent

```shell
# Lancer les tests en mode watch
pnpm test --watch
```

#### Problèmes de linting

```shell
# Fix automatique
pnpm format

# Vérifier le format et les règles de lint
pnpm lint
```
