# 🎯 Conventions Git & Commits

Ce fichier contient les instructions pour créer des messages de commit respectant les conventions du projet.

## Format des commits

Le projet utilise le format conventional commit avec des gitmojis.

## Structure des messages de commit

```text
type(scope): gitmoji description courte

## Pourquoi les changements ont été faits :
- Explication du contexte et des raisons
- Problème résolu ou besoin adressé

## Quelles modifications ont été apportées :
- Description détaillée des modifications
- Impact sur l'architecture/fonctionnalités

closes #1234
```

Pas de majuscule au début de la description courte.

Utilise la troisième personne du singulier au présent de l'indicatif pour la description courte.

Si le commit ne concerne qu’un composant, le scope doit être le nom de ce composant.
Exemple: si un commit ne touche qu’à

- src/components/DsfrCheckbox/DsfrCheckbox.vue
- et/ou src/components/DsfrCheckbox/DsfrCheckbox.stories.ts
- et/ou src/components/DsfrCheckbox/DsfrCheckbox.md
- et/ou src/components/DsfrCheckbox/docs-demo/**.*
- et/ou src/components/DsfrCheckbox/DsfrCheckbox.spec.ts
- et/ou src/components/DsfrCheckbox/DsfrCheckbox.types.ts

alors le scope du titre du commit doit être `DsfrCheckbox`.

Exemple :

```text
feat(DsfrRadioButtonSet): ✨ ajoute la propriété rich pour les boutons radio enrichis

- Permet d'utiliser des boutons radio "rich" avec du contenu enrichi dans DsfrRadioButtonSet
- Améliore les possibilités de mise en forme des options de boutons radio
- Répond au besoin d'avoir des boutons radio avec du contenu plus riche que du simple texte

- Ajout de la propriété optionnelle `rich?: boolean` dans `DsfrRadioButtonSetProps`
- Transmission de la prop `rich` au composant `DsfrRadioButton` enfant

closes #1170
```

### Gitmojis et types de commits principaux (à utiliser en priorité)

Ces Gitmojis couvrent 90% des cas d'usage courants dans le projet.

#### Règles liées au contexte

1. Si le changement corrige un comportement observé incorrect (bug), alors le type est `fix`.
2. Cette règle prime sur toutes les autres intentions (même si le changement ressemble à `feat`, `style` ou `chore`).
3. Utiliser `feat` uniquement si le comportement ajouté n’existait pas auparavant et n’est pas la correction d’un bug.
4. En cas de doute entre `fix` et un autre type, choisir `fix`.

Test rapide :

- "Avant le changement, quelque chose fonctionnait mal ?" → `fix`
- "Avant le changement, tout fonctionnait, on ajoute une capacité ?" → type non-`fix` (souvent `feat`)

#### 🔄 **Développement quotidien**

| Intention | code gitmoji | gitmoji | type (conventional commits) |
| --- | --- | --- | --- |
| Nouvelles fonctionnalités | `:sparkles:` | ✨ | `feat` |
| Corrections de bugs | `:bug:` | 🐛 | `fix` |
| Refactoring (ni feat ni fix) | `:recycle:` | ♻️ | `refactor` |
| Formatage, style (pas de changement de logique) | `:lipstick:` | 💄 | `style` |

#### 📚 **Documentation et maintenance**

| Intention | code gitmoji | gitmoji | type (conventional commits) |
| --- | --- | --- | --- |
| Documentation | `:memo:` | 📝 | `docs` |
| Ajout/modification de tests | `:white_check_mark:` | ✅ | `test` |
| Maintenance, configuration, dépendances | `:wrench:` | 🔧 | `chore` |

#### 🚀 **Build et déploiement**

| Intention | code gitmoji | gitmoji | type (conventional commits) |
| --- | --- | --- | --- |
| Changements qui affectent le système de build ou dépendances externes | `:package:` | 📦️ | `build` |
| CI/CD, GitHub Actions | `:construction_worker:` | 👷 | `ci` |

#### 🚨 **Urgences**

| Intention | code gitmoji | gitmoji | type (conventional commits) |
| --- | --- | --- | --- |
| Corrections critiques en urgence | `:ambulance:` | 🚑️ | `fix` |
| Améliorations de performance | `:zap:` | ⚡ | `perf` |

### Types de commits spécialisés (usage occasionnel)

Ces types sont à utiliser dans des cas spécifiques :

#### 🩹 **Corrections spéciales**

| Intention | code gitmoji | gitmoji | type (conventional commits) |
| --- | --- | --- | --- |
| Annulation de commit | `:rewind:` | ⏪ | `revert` |
| Changements incompatibles (breaking changes) | `:boom:` | 💥 | `feat` ou `fix` avec `!` dans l’en-tête |
| Corrections de sécurité | `:lock:` | 🔒️ | `fix` |
| Correction de fautes de frappe | `:pencil2:` | ✏️ | `docs` |
| Correction des warnings du linter/compilateur | `:rotating_light:` | 🚨 | `style` |

⚠️ pour les breaking changes 💥 ajouter obligatoirement un footer à la description du commit `BREAKING CHANGE:` ... avec impact + migration

#### 🏗️ **Structure et architecture**

| Intention | code gitmoji | gitmoji | type (conventional commits) |
| --- | --- | --- | --- |
| Déplacement ou renommage de fichiers | `:truck:` | 🚚 | `refactor` |
| Suppression de code ou fichiers | `:fire:` | 🔥 | `refactor` |
| Fusion de branches | `:twisted_rightwards_arrows:` | 🔀 | `chore` |

#### 📦 **Dépendances**

| Intention | code gitmoji | gitmoji | type (conventional commits) |
| --- | --- | --- | --- |
| Ajout d'une dépendance | `:heavy_plus_sign:` | ➕ | `build` |
| Mise à jour des dépendances | `:arrow_up:` | ⬆️ | `build` |
| Suppression d'une dépendance | `:heavy_minus_sign:` | ➖ | `build` |

#### 🎨 **Interface utilisateur**

| Intention | code gitmoji | gitmoji | type (conventional commits) |
| --- | --- | --- | --- |
| Interface utilisateur et fichiers de style | `:art:` | 🎨 | `style` ou `fix` selon le contexte |
| Améliorations d'accessibilité | `:wheelchair:` | ♿ | `feat` ou `fix` selon le contexte |
| Design responsive | `:iphone:` | 📱 | `style` ou `fix` selon le contexte |

#### 🔧 **Développement**

| Intention | code gitmoji | gitmoji | type (conventional commits) |
| --- | --- | --- | --- |
| Types TypeScript | `:label:` | 🏷️ | `refactor` |
| Fichiers de configuration | `:wrench:` | 🔧 | `chore` ou `fix` selon le contexte |
| Travail en cours (Work In Progress) | `:construction:` | 🚧 | `chore` |

## 📝 Exemples pratiques par contexte

### 🎯 **Développement de composants (cas les plus fréquents)**

```text
feat(DsfrButton): ✨ ajoute la variante ghost

## Pourquoi les changements ont été faits :
- Besoin d'une variante de bouton moins visible pour les actions secondaires
- Améliore la hiérarchie visuelle dans les interfaces

## Quelles modifications ont été apportées :
- Ajout de la prop `variant="ghost"` dans DsfrButtonProps
- Nouveau style CSS pour la variante ghost
- Tests et stories mis à jour

closes #1098
```

```text
fix(DsfrModal): 🐛 corrige la fermeture au clic extérieur

## Pourquoi les changements ont été faits :
- La modale ne se fermait pas quand on cliquait sur l'overlay
- Problème d'expérience utilisateur signalé dans l'issue #123

## Quelles modifications ont été apportées :
- Ajout d'un écouteur d'événement click sur l'overlay
- Vérification que le clic ne vient pas de l'intérieur de la modale

closes #987
```

```text
refactor(DsfrTabs): ♻️ simplifie la logique de gestion des onglets actifs

## Pourquoi les changements ont été faits :
- Code complexe et difficile à maintenir
- Améliore la lisibilité pour les futures contributions

## Quelles modifications ont été apportées :
- Remplacement de la logique complexe par un computed plus simple
- Suppression de code redondant
- Même comportement utilisateur maintenu

closes #455
```

### 📚 **Documentation et tests**

```text
docs(DsfrCard): 📝 ajoute des exemples d'utilisation avancée

## Pourquoi les changements ont été faits :
- Les développeurs demandaient plus d'exemples concrets
- Améliore l'adoption du composant

## Quelles modifications ont été apportées :
- Nouveaux exemples dans DsfrCard.md
- Stories Storybook enrichies avec cas d'usage métier

closes #1234
```

```text
test(DsfrInput): ✅ ajoute tests pour la validation des erreurs

## Pourquoi les changements ont été faits :
- Couverture de test insuffisante sur la gestion d'erreurs
- Prévient les régressions sur cette fonctionnalité critique

## Quelles modifications ont été apportées :
- Tests unitaires pour tous les cas d'erreur
- Tests d'interaction utilisateur avec des erreurs

fixes #1045
```

### 🚀 **Build et infrastructure**

```text
ci: 👷 ajoute vérification des liens dans la documentation

## Pourquoi les changements ont été faits :
- Éviter les liens cassés dans la documentation déployée
- Améliore la qualité de la documentation

## Quelles modifications ont été apportées :
- Nouveau job GitHub Actions pour vérifier les liens
- Configuration avec exclusions pour les liens externes temporaires

closes #623
```

```text
chore: 🔧 met à jour la configuration ESLint pour Vue 3.4

## Pourquoi les changements ont été faits :
- Nouvelle version de Vue apporte de nouvelles règles recommandées
- Maintient la qualité du code selon les standards actuels

## Quelles modifications ont été apportées :
- Mise à jour des règles ESLint
- Configuration adaptée aux nouvelles fonctionnalités Vue

closes #678
```

### 🎨 **Styles et interface**

```text
style(global): 💄 harmonise les espacements selon DSFR 1.11

## Pourquoi les changements ont été faits :
- Mise en conformité avec la nouvelle version du DSFR
- Assure la cohérence visuelle avec le système de design

## Quelles modifications ont été apportées :
- Variables CSS mises à jour
- Composants utilisant les nouveaux tokens d'espacement

closes #789
```

### 🎯 **Scopes appropriés pour ce projet**

- **Composant unique** : `DsfrButton`, `DsfrModal`, `DsfrCard`, etc.
- **Groupe de composants** : `DsfrTabs` (quand ça touche TabItem + TabContent + Tabs)
- **Système** : `build`, `ci`, `types`, `docs`
- **Global** : `global`, `core`, `utils` (si ça impacte plusieurs composants)

### ⚠️ **Anti-patterns à éviter**

```text
❌ feat: ajoute un bouton
✅ feat(DsfrButton): ✨ ajoute la propriété disabled

❌ fix: Bug dans la modale
✅ fix(DsfrModal): 🐛 corrige la fermeture au clic extérieur

❌ update: Change des trucs
✅ refactor(DsfrCard): ♻️ simplifie la structure des slots

❌ feat(DsfrButton): Ajoute disabled prop
✅ feat(DsfrButton): ✨ ajoute la propriété disabled
```
