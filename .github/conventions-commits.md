# 🎯 Conventions Git & Commits

## Format des commits

Utilise **TOUJOURS** le format : `type(scope): gitmoji description`

**Exemple** : `feat(auth): ✨ ajoute la fonctionnalité de connexion OAuth2`

## Types de commits conventionnels

- `feat`: ✨ Nouvelles fonctionnalités
- `fix`: 🐛 Corrections de bugs
- `docs`: 📚 Documentation
- `style`: 💄 Formatage, style (pas de changement de logique)
- `refactor`: ♻️ Refactoring (ni feat ni fix)
- `perf`: ⚡ Améliorations de performance
- `test`: ✅ Ajout/modification de tests
- `chore`: 🔧 Maintenance, configuration, dépendances
- `ci`: 👷 CI/CD, GitHub Actions
- `revert`: ⏪ Annulation de commit

## Gitmojis recommandés

- ✨ `:sparkles:` - Nouvelle fonctionnalité
- 🐛 `:bug:` - Correction de bug
- 📝 `:memo:` - Documentation
- 💄 `:lipstick:` - UI/UX, styles
- ♻️ `:recycle:` - Refactoring
- ⚡ `:zap:` - Performance
- ✅ `:white_check_mark:` - Tests
- 🔧 `:wrench:` - Configuration
- 🚀 `:rocket:` - Déploiement
- 🎨 `:art:` - Structure/format du code
- 🔒 `:lock:` - Sécurité
- 🌐 `:globe_with_meridians:` - Internationalisation
- 💾 `:floppy_disk:` - Base de données
- 🔄 `:arrows_counterclockwise:` - Réactivité, WebSockets

## Structure des messages de commit

```text
type(scope): gitmoji description courte

## Pourquoi les changements ont été faits :
- Explication du contexte et des raisons
- Problème résolu ou besoin adressé

## Quelles modifications ont été apportées :
- Description détaillée des modifications
- Impact sur l'architecture/fonctionnalités
```

Pas de majuscule au début de la description courte.
Utilise la troisième personne du singulier au présent de l'indicatif pour la description courte.
