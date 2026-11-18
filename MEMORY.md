# MEMORY.md

## Estado actual
- App estática funcionando: 44 semanas, 4 trimestres, 20 bloques de inglés, búsqueda y 3 filtros operativos.
- Persistencia en localStorage (`ai-engineer-tracker`) con toggles/horas/notas por semana.
- Sin build, sin tests; verificación manual vía HTTP (no `file://`).
- Responsive verificado sin overflow ni solapes en 320/360/375/414/768/1024/1440/1920 px.
- Auditoría funcional completa vía HTTP + CDP: 59/59 comprobaciones (toggles, horas, notas, inglés, búsqueda, Escape, limpiar, 3 filtros, tema, persistencia) sin excepciones.
- Rediseño académico aplicado: cabecera con monograma serif, cinta de 44 segmentos como índice discreto, semanas como índice reglado con `S##`, sin tarjetas ni píldoras; tono de ficha universitaria.
- Selector de tema Claro/Oscuro en la cabecera; persiste en `ai-engineer-tema` y respeta `prefers-color-scheme` si no hay elección guardada.
- Copia de seguridad en el pie: "Descargar copia" / "Restaurar copia" (JSON con `estado` + `tema`). 19/19 comprobaciones de backup sin excepciones.
- Barra de búsqueda/filtros fija al desplazarse (`position: sticky`) con acabado de instrumento: regla superior, divisor de filtros, etiquetas mono y separadores; 20/20 comprobaciones específicas sin excepciones.

## Decisiones importantes
- **Sin dependencias ni bundler**: se mantiene SPA de un solo `index.html` + `app.js` clásico + `styles.css`. Evita tooling innecesario.
- **`SEED` como única fuente de verdad** de las 44 semanas; mes derivado con `Math.ceil(id / 4)`, no se almacena campo `mes`.
- **`RECURSOS[id]` sobrescribe** `SEED.link`; el fallback solo aplica si no hay entrada.
- **`normalizarEstado` reconstruye** cada semana y descarta campos desconocidos: al añadir estado hay que tocar `ESTADO_INICIAL` y `normalizarEstado`.
- **`renderSemanas()` rehace todo `#weeks-list`** y reengancha listeners: controles nuevos van ahí o por delegación de eventos.
- **`textoSemana()`** centraliza campos indexables de búsqueda (acentos/mayúsculas insensibles); añadir campos ahí.
- **`escapeHtml` obligatorio** en strings dinámicos (notas son input de usuario).
- **Totales de UI hardcodeados** ("44 semanas", "0 / 20", rangos de trimestre, opciones de mes) deben actualizarse si cambian `SEED` o `INGLES`.
- **Tipografía**: Newsreader (títulos) + IBM Plex Sans (UI/cuerpo) + IBM Plex Mono (datos). Google Fonts validado; no es dependencia de build.
- **Cinta de progreso**: `construirRibbon()` crea los 44 segmentos una sola vez en `init()`; `renderDashboard()` solo alterna las clases `done`/`current`. No reconstruir el HTML en cada toggle (evita repetir transiciones).
- **Color por trimestre con significado** (azul verdoso → azul → violeta apagado → vino): la secuencia es información, no decoración. Inglés usa ocre apagado como vía paralela.
- **Temas**: tokens de light en `:root`, override en `:root[data-theme="dark"]`. Script inline en `<head>` fija el tema antes del primer paint (evita flash); `aplicarTema()` sincroniza botones, `aria-pressed`, `theme-color` y localStorage. El tema NO va dentro de `ai-engineer-tracker` para que `normalizarEstado` no lo descarte.
- **Móvil**: a ≤560 px la cabecera se apila (marca + acciones en filas separadas) para no comprimir el título. Objetivos táctiles: opción de tema 34 px, toggle 38 px, select 40 px, limpiar búsqueda 38 px.
- **Backup**: JSON `{ app, version, exportadoEn, tema, estado }`; export usa Blob + object URL (revocado). Import valida `estado` y `SEED.some(...)` antes de `normalizarEstado`; inválido/corrupto no sobrescribe progreso. Mensajes en `#backup-status` (`role="status"`).
- **Barra fija**: `.controls` usa `position: sticky; top: 0; z-index: 20`, fondo `var(--paper)`, regla superior de tinta y borde inferior; se fija dentro de `main`, la cabecera sigue scrolleando. El acabado es una tira plana, no una tarjeta.
- **Jerarquía académica**: `.run-panel` es una banda reglada, no un héroe; porcentaje 1.55rem, cinta 10px y métricas 0.98rem. El peso visual lo lleva el contenido, no el tablero.
- **Índice de semanas**: `.week-card` usa `data-id` para mostrar `S##` con `::before`; sin tarjetas, raíl ni píldoras. Campos con borde inferior y recursos como enlaces subrayados.

## Errores a evitar
- No añadir `package.json`, scripts npm, bundler ni imports ES.
- No usar `file://` para probar persistencia (sí sirve para smoke visual headless).
- No olvidar actualizar IDs del dashboard en `index.html` antes de leerlos en `renderDashboard()`.
- No romper breakpoints (max 560, min 768, max 380) ni contenedor de 960px.
- No introducir copy ni ARIA en inglés; todo en español.
- No dejar listeners fuera de `renderSemanas()`: se pierden tras filtro/búsqueda.
- No reconstruir la cinta en `renderDashboard()`: perdería el estado `current` y las transiciones.
- No usar ALL-CAPS en etiquetas ni eyebrows; la identidad es académica + instrumento, no SaaS genérico.
- No meter el tema en el estado de semanas ni usar `[data-theme]` sin prefijo en `querySelector` (también coincide con `<html>`); usar `.theme-option[data-theme="…"]`.
- No importar JSON sin validar contra `SEED`: `normalizarEstado` rellena las 44 semanas y puede convertir un archivo parcial en progreso falso.

## Pendientes / notas
- Validar URLs externas cambiadas (HTTP 200 o redirect OK) al modificar `RECURSOS`.
- Smoke-check tras cambios: 44 cards, 4 grupos, 20 bloques inglés, filtros, persistencia y overflow.
- Al repetir auditorías automatizadas, hacer `localStorage.clear()` y recargar antes de medir: el estado previo invierte los toggles y da falsos fallos.
