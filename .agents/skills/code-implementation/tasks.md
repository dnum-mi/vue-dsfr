# Tâches - Implémentation et Refactoring

## 🔍 Analyser le code

> Analyse ce fichier et résume sa structure et sa logique principale.
> Indique les parties complexes ou redondantes, et propose des simplifications.

## 🧠 Explication pédagogique

> Explique ce code comme si tu parlais à un développeur junior TypeScript.
> Précise les concepts clés (types, inférences, hooks Vue, schémas Fastify, etc.).

## 🧱 Nouveau composant

> Crée un composant Vue 3 `<script setup lang="ts">` avec props typées et un template minimal.
> Suis les conventions du projet : Composition API, noms explicites, code clair et typé.

## 🔄 Migration Options → Composition API

> Convertis ce composant Options API en Composition API avec `<script setup lang="ts">`.
> Préserve les types et les comportements.

## 🧩 Créer un composable

> Crée un composable Vue (`useXxx.ts`) pour factoriser cette logique.
> Typage strict, aucun `any`, code clair et réutilisable.

## ✏️ Refactorisation générale

> Refactorise ce code selon nos conventions (TypeScript strict, composition API, fonctions pures, etc.).
> Garde la même logique métier.
> Garde les règles typographiques françaises comme les apostrophes françaises `'` et les espaces insécables ` ` devant `:` et les espaces fines insécables ` ` devant les autres ponctuations doubles `; ! ?`.

## 🧰 Nouvelle route (Fastify)

> Crée une route Fastify avec validation via Zod (`@fastify/type-provider-zod`)
> Typage strict des requêtes et réponses, séparation handler / service.
> Suis la structure `src/api/routes/` et `src/api/services/`.

## 🧩 Refactor service

> Sépare la logique métier de ce handler dans un service (`src/api/services/`).
> Garde la signature et les types stricts.

## 🙏 Revue de code

> Fais une revue technique de ce fichier : lisibilité, typage, conventions, complexité, cohérence.
> Donne des recommandations concrètes.

## 🧰 Vérification des types

> Analyse ce fichier et indique les zones où le typage est faible ou implicite.
> Propose une version plus robuste sans `any`.

## 📚 Résumé de projet

> Analyse la base de code et produis un résumé technique clair : stack, conventions, patterns, modules principaux, dépendances critiques.

## 🧰 Détection de code mort / redondant

> Analyse `src/` et identifie :
>
> - Les fonctions jamais importées
> - Les composants Vue inutilisés
> - Les services ou utilitaires redondants
> - Les doublons de logique entre modules
>
> Suggère les fichiers à supprimer ou fusionner.

*Fréquence recommandée : mensuelle.*

## 🧩 Suggestion d'améliorations IA

> Analyse le code existant et propose :
>
> - Des fonctions candidates à la génération automatique (helpers, schemas, tests)
> - Des endroits où les types pourraient être dérivés automatiquement
> - Des exemples de tâches IA à automatiser
>
> Fournis la suggestion sous forme de PR interne ou de message de log.

*Fréquence recommandée : libre / à la demande.*
