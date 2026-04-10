# Adaptateur Copilot - Instructions VueDsfr

Source de vérité commune :

- `docs/ai/README.md`
- `docs/ai/instructions.md`
- `docs/ai/tasks.md`
- `docs/ai/commit-message.md`

Chargement contextuel (obligatoire) :

- Appliquer les règles de `AGENTS.md` pour détecter le contexte et charger les fichiers requis.
- Toujours charger `docs/ai/instructions.md`.
- Pour code/tests/doc : charger aussi `docs/ai/tasks.md`.
- Pour commit/PR title : charger `docs/ai/commit-message.md`.

## Agent-only (Copilot)
- Raison : aucun besoin spécifique documenté à ce jour.
- Impact : Copilot applique uniquement les consignes communes.
- Fallback : suivre `docs/ai/*`.
