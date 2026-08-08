# Guide des Agents IA

Guide central agnostique pour tous les agents IA contribuant au projet VueDsfr.

## Lecture obligatoire

Avant toute action, lire dans cet ordre :

1. `AGENTS.md`
2. `.agents/README.md`
3. `.agents/instructions.md`
4. la ou les skills pertinentes dans `.agents/skills/*/SKILL.md`
5. les fichiers `tasks.md` ou conventions référencés par ces skills

## Gouvernance

Pour les principes généraux et la hiérarchie des documents, voir `.agents/README.md`.

## Découverte des Skills et commandes custom

Les agents doivent sélectionner les **Skills** et commandes custom appropriées en fonction du contexte. Chaque skill est décrite et découvrable par son `SKILL.md`, et chaque commande custom est décrite dans `agent-instructions/*`.

### Skills du projet

| Domain | Skill | Docs associées |
|--------|-------|---|
| Implémentation & Refactoring | `.agents/skills/code-implementation/` | `.agents/instructions.md` + `.agents/tasks.md` |
| Tests | `.agents/skills/test-writing/` | `.agents/instructions.md` + `.agents/tasks.md` |
| Documentation | `.agents/skills/documentation/` | `.agents/instructions.md` + `.agents/tasks.md` |
| Commits & PR | `.agents/skills/commit-conventions/` | `.agents/commit-message.md` |

**Localisation** : `.agents/skills/<name>/SKILL.md`

## Commandes custom

Les workflows de commandes communs vivent dans `agent-instructions/*`.

| Commande | Source |
|----------|--------|
| `commit-staged` | `agent-instructions/commit-staged.md` |
| `create-branch` | `agent-instructions/create-branch.md` |
| `create-issue` | `agent-instructions/create-issue.md` |
| `create-pr` | `agent-instructions/create-pr.md` |

### Adaptateurs Codex

Les wrappers Codex dans `.codex/skills/*` restent volontairement courts. Ils ne doivent contenir que le frontmatter, une description d'usage, et un renvoi vers la skill commune correspondante dans `.agents/skills/*`.

Les commandes custom Codex dans `.codex/commands/*` doivent aussi rester de simples adaptateurs vers `agent-instructions/*` ou vers les consignes communes existantes.

### Adaptateurs de commandes custom

Les commandes custom doivent pouvoir être lancées depuis plusieurs agents sans dupliquer leur logique.

| Agent | Adaptateur |
|-------|------------|
| Codex | `.codex/commands/*.md` |
| Claude Code | `.claude/commands/*.md` |
| GitHub Copilot | `.github/prompts/*.prompt.md` |

La source de vérité reste toujours `agent-instructions/*`.

### Principes de chargement

1. **Contexte détecté** → lire la skill correspondante selon sa description.
2. **Multiples contextes** → lire l'union des skills (ex. refactoring + tests → 2 skills).
3. **Priorité absolue** : `commit-conventions` prime pour tout commit/PR.
4. **Fallback** : si une skill est indisponible, consulter `.agents/*`.

## Règles opérationnelles

- Préserver les changements utilisateur existants. Ne pas réinitialiser le worktree sans demande explicite.
- Avant de modifier un composant, inspecter un composant voisin comparable dans `src/components/`.
- Ne pas modifier les artefacts générés (`dist/`, `lib/`, `types/`, `meta-dts/`, `storybook-static/`) sauf demande explicite de build ou de release.
- Utiliser `pnpm`, pas `npm` ni `yarn`.
- Vérifier avec la commande la plus ciblée possible, puis élargir si nécessaire : `pnpm test:unit`, `pnpm lint`, `pnpm check-exports`, `pnpm build`.

## Pour les adaptateurs agent spécifiques

Certains agents peuvent avoir des besoins spécifiques documentés dans :
- `.github/copilot-instructions.md` — Extensions Copilot
- `.github/prompts/*` — Commandes custom GitHub Copilot
- `CLAUDE.md` — Extensions Claude
- `.claude/commands/*` — Commandes custom Claude Code
- `.codex/skills/*` — Entrées Codex vers les skills communes
- `.codex/commands/*` — Commandes custom Codex

**Format obligatoire** pour toute extension spécifique :

```markdown
## Agent-only (NomAgent)
- Raison : ...
- Impact : ...
- Fallback : ...
```

## Contexte icônes Iconify SSR/SSG

Lors d’un test Nuxt SSG avec VueDsfr, `VIcon` + prop `ssr` n’a pas rendu le SVG Iconify dans le HTML généré. Le composant a rendu un placeholder côté serveur, puis l’icône après hydratation. `VIcon` sans `ssr` a rendu vide côté SSG.

La solution robuste testée est d’utiliser `@iconify/vue/offline` avec les données d’icônes locales générées par `vue-dsfr-icons`, puis de passer directement l’objet `IconifyIcon` au composant `Icon`.

Piste bibliothèque :
- fournir un composant type `VIconOffline` / `VIconStatic` ;
- recevoir les collections via injection/plugin, sans importer un fichier applicatif ;
- exposer un helper du type `createVueDsfrIconPlugin(collections)` ;
- documenter l’usage Nuxt avec un plugin applicatif.

Exemple API envisagée :

```ts
app.use(createVueDsfrIconPlugin(collections))
```

```vue
<VIconOffline name="ri:flag-line" />
```

Important : la bibliothèque ne doit pas importer `~/icon-collections`, car ce fichier appartient à l’application.
