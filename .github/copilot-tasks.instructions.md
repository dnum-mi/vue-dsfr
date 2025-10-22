# copilot-tasks.md

## 🧭 Objectif

Ce fichier définit des requêtes utiles et bien formulées à utiliser avec Copilot Chat.
Elles respectent les conventions définies dans `copilot-instructions.md`, `frontend.instructions.md` (et bientôt `api.instructions.md`).

---

## 🧩 Général

### 🔍 Analyser le code

> Analyse ce fichier et résume sa structure et sa logique principale.
> Indique les parties complexes ou redondantes, et propose des simplifications.

### 🧠 Explication pédagogique

> Explique ce code comme si tu parlais à un développeur junior TypeScript.
> Précise les concepts clés (types, inférences, hooks Vue, schémas Fastify, etc.).

### ✏️ Refactorisation

> Refactorise ce code selon nos conventions (TypeScript strict, composition API, fonctions pures, etc.).
> Garde la même logique métier.

---

## 🎨 Frontend (Vue 3)

### 🧱 Nouveau composant

> Crée un composant Vue 3 `<script setup lang="ts">` avec props typées et un template minimal.
> Suis les conventions du projet : Composition API, noms explicites, code clair et typé.

### 🔄 Migration Options → Composition API

> Convertis ce composant Options API en Composition API avec `<script setup lang="ts">`.
> Préserve les types et les comportements.

### 🧩 Créer un composable

> Crée un composable Vue (`useXxx.ts`) pour factoriser cette logique.
> Typage strict, aucun `any`, code clair et réutilisable.

### 🧪 Tests de composant

> Écris un test Vitest pour ce composant.
> Vérifie le rendu, les événements émis, et les comportements principaux

---

## ⚙️ Backend (Fastify)

### 🧰 Nouvelle route

> Crée une route Fastify avec validation via Zod (`@fastify/type-provider-zod`)
> Typage strict des requêtes et réponses, séparation handler / service.
> Suis la structure `src/api/routes/` et `src/api/services/`.

### 🧾 Test de route

> Génère un test Vitest pour cette route Fastify en utilisant `app.inject()`.
> Vérifie le code de réponse, la validation et le format des données.

### 🧩 Refactor service

> Sépare la logique métier de ce handler dans un service (`src/api/services/`).
> Garde la signature et les types stricts.

---

## 🧪 Qualité & documentation

### Vérifier la liste des composants

> Analyse le fichier docs/composants.md et vérifie que tous les composants Vue dans `src/components/` y sont listés ici.
> Indique ceux qui manquent et propose une version mise à jour du fichier.
> Inversement, indique les composants listés qui n'existent plus dans le code source.

### Doc vitepress

> Génère une documentation VitePress claire et complète pour ce composant/fonction.
> Inclue exemples d’utilisation, props/params avec types, et notes d’intégration.
> Respecte le style DSFR et les conventions du projet.
> Fournis le contenu en markdown.
> Suit toujours la structure des autres docs dans `docs/composants/`
> Utilise toujours le même plan, dans le même ordre, et avec les mêmes émojis dans les titres.
> Dans le tableau des props, utilise toujours le même formatage (italique pour les types, backticks pour les valeurs par défaut, coche pour les props obligatoires), et mets les props obligatoires au début du tableau.

### 📄 Ajouter JSDoc

> Ajoute une doc JSDoc claire et concise à chaque fonction publique.
> Explique le rôle, les paramètres, les types et le retour.

### 🧰 Vérification des types

> Analyse ce fichier et indique les zones où le typage est faible ou implicite.
> Propose une version plus robuste sans `any`.

### 🔧 Revue de code

> Fais une revue technique de ce fichier : lisibilité, typage, conventions, complexité, cohérence.
> Donne des recommandations concrètes.

---

## 🧠 IA avancée (bonus)

### 📚 Résumé de projet

> Analyse la base de code et produis un résumé technique clair : stack, conventions, patterns, modules principaux, dépendances critiques.

### 🧩 Génération de types

> À partir de ce JSON ou de cette API, génère des types TypeScript précis et commentés.
> Respecte nos conventions (`PascalCase` pour les interfaces, readonly si possible).

### 💡 Migration / modernisation

> Propose un plan de migration de ce code vers une approche plus moderne (ESM, Composition API, TypeScript strict).
> Indique les risques et bénéfices.

---

## ⚙️ Tâches automatiques (Copilot Agent)

Ces tâches sont destinées à être déclenchées automatiquement par Copilot Agent ou par un script dédié.
Elles servent à surveiller la qualité du code, détecter les points d’amélioration et générer des rapports de veille technique.

---

### 🧩 Analyse de la base de code

**Objectif :** Obtenir une vue d’ensemble du projet.

> Analyse l’ensemble du code dans `src/` et produis un résumé technique clair :
>
> - Stack utilisée (frameworks, outils, librairies)
> - Organisation des modules
> - Points forts / points faibles (clarté, duplication, typage)
> - Recommandations de refactorisation
> - Fichiers critiques à surveiller

*Fréquence recommandée : hebdomadaire.*

---

### 🧱 Vérification des conventions

**Objectif :** S’assurer que le code suit les conventions du projet.

> Parcours le code et identifie les fichiers qui ne respectent pas les règles de `copilot-instructions.md` :
>
> - Absence de typage strict
> - Usage de `any`
> - Options API dans des composants Vue
> - Handlers Fastify non typés
> - Tests manquants pour les fonctions critiques
>
> Génère un rapport markdown indiquant les fichiers à corriger et les actions recommandées.

*Fréquence recommandée : quotidienne ou avant merge.*

---

### 🧪 Vérification de la couverture de tests

**Objectif :** Identifier les zones non testées.

> Analyse les fichiers `.spec.ts` ou `tests/` et croise-les avec les modules du projet.
> Liste les fichiers non couverts par des tests ou les fonctions critiques non testées.
> Propose un plan de tests à créer.

*Fréquence recommandée : hebdomadaire ou avant release.*

---

### 🧾 Audit des dépendances

**Objectif :** Surveiller les dépendances obsolètes ou à risque.

> Lis le `package.json` et vérifie :
>
> - Les versions non à jour
> - Les dépendances à sécurité faible (d’après `npm audit`)
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
> Génère un rapport Markdown dans `docs/ai-review.md`.

*Fréquence recommandée : à chaque commit sur `main` ou `develop`.*

---

### 🧰 Détection de code mort / redondant

**Objectif :** Garder la base de code propre.

> Analyse `src/` et identifie :
>
> - Les fonctions jamais importées
> - Les composants Vue inutilisés
> - Les services ou utilitaires redondants
> - Les doublons de logique entre modules
>
> Suggère les fichiers à supprimer ou fusionner.

*Fréquence recommandée : mensuelle.*

---

### 📚 Synthèse de veille technique

**Objectif :** Rester à jour sur les dépendances et outils utilisés.

> Génère une courte note de veille technique à partir des dépendances du projet :
>
> - Changements récents dans Vue, Vite, Fastify, Vitest, Zod, Pinia
> - Nouveaux outils compatibles TypeScript ou ESM
> - Pratiques émergentes (composition patterns, typage avancé, etc.)
>
> Résume les tendances pertinentes et leurs impacts potentiels sur le projet.

*Fréquence recommandée : mensuelle.*

---

### 🧩 Suggestion d'améliorations IA

**Objectif :** Laisser Copilot proposer lui-même des améliorations.

> Analyse le code existant et propose :
>
> - Des fonctions candidates à la génération automatique (helpers, schemas, tests)
> - Des endroits où les types pourraient être dérivés automatiquement
> - Des exemples de tâches IA à automatiser dans `copilot-tasks.md`
>
> Fournis la suggestion sous forme de PR interne ou de message de log.

*Fréquence recommandée : libre / à la demande.*

---

### Storybook

**Objectif :** Générer des stories pour les composants Vue.

> Analyse les composants Vue et crée des stories correspondantes dans Storybook.
> Assure-toi que chaque état et variation du composant est couvert.

*Fréquence recommandée : à chaque ajout ou modification de composant.*

#### Remanier (refactor) les stories existantes

> Il faut s’assurer que les stories sont au format attendu par Storybook 9, CSF3, et qu’elles utilisent les bonnes pratiques du projet.
> Utilise les conventions de nommage et d’organisation du projet.
> Génère des exemples d’utilisation clairs et typés.
> Garde les règles typographiques françaises comme les apostrophes françaises `’` et les espaces insécables ` ` devant `:` et les espaces fines insécables ` ` devant les autres ponctuations doubles `; ! ?` dans tes refactorisations.
> Les apostrophes françaises `’` ne posent pas de problème dans le code TypeScript ou les fichiers stories et doivent être utilisées partout où c’est pertinent, et laissées inchangées lors de la refactorisation.
> Prends exemple sur les stories de DsfrAlert.stories.ts
> Il faut s’assurer que les stories sont au format attendu par Storybook 9.
> Il faut aussi remanier le fichier Vue correspondant (il porte le même nom que la story, mais avec l’extension .vue au lieu de .stories.ts) pour qu’il utilise defineSlots au lieu du commentaire HTML pour documenter les slots : `<!-- @slotName Ici la description -->`
> Dans le commit, si les fichiers remaniés ne concernent qu’un seul composant (par exemple DsfrAlert.vue et DsfrAlert.stories.ts), indique le nom du composant en entier dans le scope du message de commit : `refactor(DsfrAlert): remanie les stories et ajoute defineSlots`

---
