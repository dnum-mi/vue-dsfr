# Tâches - Conventions de Commit et PR

## Format obligatoire du commit

```
type(scope): gitmoji description courte en français

## Pourquoi :
- Explication du contexte et des raisons
- Problème résolu ou besoin adressé

## Quoi :
- Description détaillée des modifications
- Impact sur l'architecture/fonctionnalités

closes #1234
```

**Types autorisés** :

- `feat` ✨ — nouvelle fonctionnalité
- `fix` 🐛 — correction de bug
- `refactor` ♻️ — refactorisation (sans changement de comportement)
- `style` 💄 — ajustements de style, formatage
- `test` ✅ — ajout ou correction de tests
- `docs` 📝 — documentation, commentaires
- `chore` 🔧 — configuration, tooling, dépendances

**Scope** (exemples) :

- Nom du composant : `feat(DsfrButton) : …`
- Système applicatif : `refactor(composables) : …`
- Global : `chore(project) : …`
- Types : `feat(types) : …`
- Tests : `test(components) : …`

**Directives appliquées** :

- ✅ **Tous les textes en français** (description, sections, explications)
- ✅ **Typographie française** : apostrophes courbes `'` (U+2019), espaces insécables ` ` avant `:;!?`, guillemets « »
- ✅ **Troisième personne du singulier présent** pour la description courte (ex : « ajoute », « corrige », « améliore »)
- ✅ **Pas de majuscule** au début de la description courte
- ✅ **Gitmoji obligatoire** correspondant au type (voir liste ci-dessus)
- ✅ **Section "Pourquoi"** pour expliquer le contexte
- ✅ **Section "Quoi"** pour décrire l'impact technique
- ✅ **Footer d'issue** : `closes #1234` ou `fixes #1234`
- ✅ **Rebase avant merge** : aucun commit de merge dans l'historique
- ✅ **Branche** : `numéro-issu-description-kebab-case` (ex : `1337-add-tooltip-accessibility`)

### Exemple complet

```
feat(DsfrButton): ✨ ajoute support du mode sombre au bouton

## Pourquoi :
- Les boutons DSFR doivent s'adapter au schéma de couleur sombre
- L'utilisateur utilisant le mode sombre doit voir des boutons lisibles

## Quoi :
- Ajoute la propriété `scheme` au composant Button
- Intègre la composition Vue `useScheme()` pour détecter le mode actif
- Met à jour les variables CSS de couleur selon le schéma
- Ajoute tests d'intégration pour les deux schémas

closes #1337
```

---

## ✍️ Créer un message de commit

> Propose un message de commit conforme au standard du projet à partir des fichiers modifiés.
> Respecte le format Conventional Commit + gitmoji et choisis un scope pertinent.
> Si le changement ne concerne qu'un composant, utilise le nom complet du composant comme scope.
>
> **Obligatoire** : Intègre la typographie française (apostrophes `'`, espaces insécables ` `) dans toutes les sections textuelles. Tous les textes doivent être en français.

## ✅ Vérifier un message de commit

> Vérifie qu'un message de commit respecte les conventions du projet :
>
> - Type Conventional Commit valide (`feat`, `fix`, `refactor`, `style`, `test`, `docs`, `chore`)
> - Gitmoji cohérent avec l'intention
> - Description courte au bon format (troisième personne, pas de majuscule initiale)
> - Scope correct (composant, système, global)
> - Sections "Pourquoi" et "Quoi" présentes et significatives
> - **Typographie française appliquée** : apostrophes courbes, espaces insécables, guillemets
> - **Textes en français** (sauf noms de variables, branches, URLs)
> - Footer d'issue (`closes #...` / `fixes #...`) si applicable
>
> Si le message n'est pas conforme, propose une version corrigée complète avec tous les éléments manquants.

## 🌿 Vérifier le nom de branche

> Vérifie que la branche respecte les conventions du projet :
>
> - Préfixe par le numéro d'issue GitHub
> - Suffixe en anglais et en kebab-case
> - Pas d'indentation, tirets au lieu d'underscores
>
> Propose un nom de branche corrigé si nécessaire.

## 🔁 Assurer rebase avec develop

> Contrôle que la branche est à jour avec `develop` via `rebase` (sans commit de merge).
> Si ce n'est pas le cas, propose les commandes Git à exécuter :
>
> ```bash
> git fetch origin develop
> git rebase origin/develop
> ```
>
> Confirme que l'historique ne contient pas de commits de merge.

## 🧾 Rédiger un titre de Pull Request

> Propose un titre de Pull Request aligné avec le commit principal.
> Assure la cohérence entre le type, le scope, la description courte.
> Format conseillé: `type(scope): description courte` (reprend le commit principal).

## 🎯 Vérifier la cible de Pull Request

> Vérifie que la Pull Request cible bien `develop` (jamais `main` ni d'autres branches).
> Si la cible est incorrecte, indique la correction à appliquer.

## 🧭 Arbitrer le type de commit

> En cas d'hésitation entre plusieurs types (`fix`, `feat`, `refactor`, `docs`, etc.),
> applique les règles de priorité du projet et justifie brièvement le choix.
>
> **Règles** :

> - `feat` : toute fonctionnalité nouvelle (même petit)
> - `fix` : correction de bug identifié
> - `refactor` : changement technique sans impact comportemental
> - `test` : ajout de tests, amélioration de couverture
> - `docs` : documentation uniquement
> - `style` : formatage, cosmétique (rare)
> - `chore` : configuration, dépendances, tooling
