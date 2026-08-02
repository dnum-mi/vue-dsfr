---
name: code-implementation
description: 'Code implementation, refactoring, and bugfixes. USE FOR: implementing features; refactoring code; fixing bugs; modifying existing code. DO NOT USE FOR: writing tests (separate skill); documentation (separate skill); commit conventions (separate skill).'
---

# Implémentation et Refactoring

## Procédure

1. Lire `../../instructions.md`, puis `tasks.md`.
2. Inspecter les fichiers voisins avant de modifier un composant, composable ou utilitaire.
3. Préserver l'API publique sauf demande explicite de changement incompatible.
4. Mettre à jour les exports (`src/components/index.ts`, `src/index.ts`) quand la surface publique change.
5. Ne pas modifier les artefacts générés (`dist/`, `lib/`, `types/`, `meta-dts/`, `storybook-static/`) sauf demande explicite.
6. Vérifier avec les commandes ciblées pertinentes : `pnpm test:unit`, `pnpm lint`, `pnpm check-exports`, `pnpm build`.

## Documentation associée

- [`../../instructions.md`](../../instructions.md) — règles de codage communes
- [`tasks.md`](tasks.md) — tâches courantes pour l'implémentation
