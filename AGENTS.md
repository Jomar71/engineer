# AGENTS.md

## Overview
- Dependency-free static SPA: `index.html` is the shell, `app.js` contains all data/state/rendering, `styles.css` contains all styling.
- There is no `package.json`, build, lint, typecheck, or test runner. Do not invent npm scripts or add a bundler unless asked.
- `app.js` loads as a classic script; keep it runnable directly in the browser (no imports/build step).

## Verify changes
- No committed test suite exists. Serve the folder over HTTP and open `index.html`; use HTTP rather than `file://` when testing persistence.
- Smoke-check: 44 week cards, 4 trimester groups, 20 English blocks, search + 3 filters, toggles/hour fields survive reload, and no horizontal overflow at 320/768/1440 px.
- External course URLs are product content: validate any changed link resolves (HTTP 200 or redirect success).

## Data and state
- `SEED` (`app.js:2`) is the 44-week source of truth. `TRIMESTRES` supplies group headers, `RECURSOS` maps week id to `[label, url]`, and `INGLES` defines inclusive English ranges 1–4, 13–20, and 25–32.
- Month is derived as `Math.ceil(id / 4)` (11 months); do not add a month field to `SEED`.
- `RECURSOS[id]` replaces `SEED.link`; the fallback link is used only when a week has no `RECURSOS` entry.
- Progress lives in localStorage under `ai-engineer-tracker`. Each week has `completada`, `notas`, `horasReales`, `inglesCompletada`, and `horasIngles`.
- When adding a state field, update both `ESTADO_INICIAL` and `normalizarEstado`: normalization rebuilds each week object and drops unknown fields.

## Rendering and wiring
- `renderSemanas()` rebuilds all of `#weeks-list`, then reattaches listeners. Add new week controls there (or use delegated events), or they will stop working after the next search/filter.
- Search and filters are read directly in `renderSemanas()` from `#search-input`, `#filter-trimester`, `#filter-month`, and `#filter-status`. Search is accent/case-insensitive and indexes materia, tema, entregable, notes, technical resources, and English content via `textoSemana()`; add new searchable fields there.
- `renderDashboard()` assumes these IDs exist: `progress-pct`, `weeks-done`, `hours-total`, `streak`, `english-weeks-done`, `english-hours-total`. Add matching HTML before reading new dashboard values.
- Pass every dynamic string in template literals through `escapeHtml`; notes are user-controlled.
- If the number of weeks changes, update hardcoded UI counts/ranges in `index.html` (“44 semanas”, “0 / 44”, trimester ranges, month options). Update `0 / 20` if English ranges change; runtime totals derive from `SEED` and `INGLES`.

## Content and UI
- Visible copy and ARIA labels are Spanish; keep new user-facing text in Spanish.
- Preserve the existing responsive breakpoints at the end of `styles.css` (max 560, min 768, max 380) and the 960px container. Verify no overflow down to 320px.

## Memoria - Al empezar, lee `MEMORY.md` para conocer el estado del proyecto y las decisiones tomadas. - Al terminar una tarea, actualízalo: estado actual, decisiones importantes (con su porqué) y errores a evitar. - Mantenlo breve (máximo ~50 líneas): resume o elimina lo que ya no aporte. - Si algo se convierte en una regla permanente, propón moverlo a `AGENTS.md` en lugar de dejarlo en la memoria. - No guardes nunca datos sensibles (claves, tokens, datos personales).
