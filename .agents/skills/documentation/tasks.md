# Tâches - Documentation

## 📚 Storybook - Générer des stories

**Objectif :** Générer des stories pour les composants Vue.

> Analyse les composants Vue et crée des stories correspondantes dans Storybook.
> Assure-toi que chaque état et variation du composant est couvert.
> Applique la typographie française (voir `.agents/instructions.md`) :

>   - Apostrophes françaises `'` (U+2019)
>   - Espaces insécables (U+00A0) avant `:`
>   - Exemples : `« Accepter »`, `Validation…`

*Fréquence recommandée : à chaque ajout ou modification de composant.*

## 🔄 Storybook - Remanier les stories existantes

> Il faut s'assurer que les stories sont au format attendu par Storybook 9, CSF3, et qu'elles utilisent les bonnes pratiques du projet.
> Utilise les conventions de nommage et d'organisation du projet.
> Génère des exemples d'utilisation clairs et typés.
> Applique la typographie française dans les stories et commentaires : apostrophe `'`, espace insécable ` ` avant `:`, espace fine insécable (U+202F) avant `;`, `!` et `?`.
> Conserve ces règles lors des refactorisations et ne remplace pas ces caractères par des équivalents ASCII.
> Prends exemple sur les stories de DsfrAlert.stories.ts
> Il faut aussi remanier le fichier Vue correspondant (il porte le même nom que la story, mais avec l'extension .vue au lieu de .stories.ts) pour qu'il utilise defineSlots au lieu du commentaire HTML pour documenter les slots : `<!-- @slotName Ici la description -->`
> Dans le commit, si les fichiers remaniés ne concernent qu'un seul composant (par exemple DsfrAlert.vue et DsfrAlert.stories.ts), indique le nom du composant en entier dans le scope du message de commit : `refactor(DsfrAlert): remanie les stories et ajoute defineSlots`

## 📄 Ajouter JSDoc

> Ajoute une doc JSDoc claire et concise à chaque fonction publique.
> Explique le rôle, les paramètres, les types et le retour.

## 📖 Doc VitePress

> Génère une documentation VitePress claire et complète pour ce composant/fonction.
> Inclue exemples d'utilisation, props/params avec types, et notes d'intégration.
> Respecte le style DSFR et les conventions du projet.
> Fournis le contenu en markdown.
> Suit toujours la structure des autres docs dans `docs/composants/`
> Utilise toujours le même plan, dans le même ordre, et avec les mêmes émojis dans les titres.
> Dans le tableau des props, utilise toujours le même formatage (italique pour les types, backticks pour les valeurs par défaut, coche pour les props obligatoires), et mets les props obligatoires au début du tableau.

## ✅ Vérifier la liste des composants

> Analyse le fichier docs/composants.md et vérifie que tous les composants Vue dans `src/components/` y sont listés ici.
> Indique ceux qui manquent et propose une version mise à jour du fichier.
> Inversement, indique les composants listés qui n'existent plus dans le code source.

## 📚 Synthèse de veille technique

**Objectif :** Rester à jour sur les dépendances et outils utilisés.

> Génère une courte note de veille technique à partir des dépendances du projet :
>
> - Changements récents dans Vue, Vite, Fastify, Vitest, Zod, Pinia
> - Nouveaux outils compatibles TypeScript ou ESM
> - Pratiques émergentes (composition patterns, typage avancé, etc.)
>
> Résume les tendances pertinentes et leurs impacts potentiels sur le projet.

*Fréquence recommandée : mensuelle.*
