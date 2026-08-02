# Tâches IA

## 🧭 Objectif

Ce fichier organise les tâches utiles à utiliser avec des agents IA conversationnels selon les **skills** du projet.

Chaque skill dispose de sa propre liste de tâches :
- **Code Implementation** → [`skills/code-implementation/tasks.md`](skills/code-implementation/tasks.md)
- **Test Writing** → [`skills/test-writing/tasks.md`](skills/test-writing/tasks.md)
- **Documentation** → [`skills/documentation/tasks.md`](skills/documentation/tasks.md)
- **Commit Conventions** → [`skills/commit-conventions/tasks.md`](skills/commit-conventions/tasks.md)

Toutes les tâches respectent les conventions définies dans [`instructions.md`](instructions.md).

---

## 🔄 Tâches Transversales (non liées à un skill spécifique)

Ces tâches concernent plusieurs domaines ou l'ensemble du projet.

### 🧩 Analyse de la base de code

**Objectif :** Obtenir une vue d'ensemble du projet.

> Analyse l'ensemble du code dans `src/` et produis un résumé technique clair :
>
> - Stack utilisée (frameworks, outils, librairies)
> - Organisation des modules
> - Points forts / points faibles (clarté, duplication, typage)
> - Recommandations de refactorisation
> - Fichiers critiques à surveiller

*Fréquence recommandée : hebdomadaire.*

---

### 🧩 Génération de types

> À partir de ce JSON ou de cette API, génère des types TypeScript précis et commentés.
> Respecte nos conventions (`PascalCase` pour les interfaces, readonly si possible).

---

### 💡 Migration / Modernisation

> Propose un plan de migration de ce code vers une approche plus moderne (ESM, Composition API, TypeScript strict).
> Indique les risques et bénéfices.

---

### 🧰 Audit des dépendances

**Objectif :** Surveiller les dépendances obsolètes ou à risque.

> Lis le `package.json` et vérifie :
>
> - Les versions non à jour
> - Les dépendances à sécurité faible (d'après `npm audit`)
> - Les doublons ou packages inutilisés
> - Les dépendances ESM manquantes
>
> Génère un résumé clair et propose les mises à jour prioritaires.

*Fréquence recommandée : mensuelle.*

---

### 🧠 Revue IA du code récent

**Objectif :** Vérifier automatiquement les nouveaux commits.

> Pour les fichiers modifiés depuis le dernier commit, fais une revue :
>
> - Cohérence de style et typage
> - Respect des conventions
> - Qualité des noms et de la structure
> - Tests associés présents ou manquants
>
> Génère un rapport Markdown dans `.ai-review.md`.

*Fréquence recommandée : à chaque commit sur `main` ou `develop`.*
