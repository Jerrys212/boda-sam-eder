# CLAUDE.md

Landing pages en Next.js (App Router + TypeScript). El contenido y el idioma
del sitio son español de México.

## Comandos
IMPORTANT: el gestor de paquetes es **pnpm**. Nunca uses npm, npx ni yarn
(usa `pnpm add`, `pnpm dlx`, `pnpm create`). No debe existir
`package-lock.json` ni `yarn.lock`, solo `pnpm-lock.yaml`.
- `pnpm dev` — servidor local en http://localhost:3000
- `pnpm build` — debe pasar sin errores antes de dar algo por terminado
- `pnpm lint` — correr después de una serie de cambios

## Estructura
- Todo el texto y los datos editables viven en `lib/` (p. ej. `lib/wedding.ts`).
  Los componentes NO llevan texto hardcodeado: leen de ahí.
- Un componente por sección en `components/`. Las secciones son Server
  Components por defecto; usa `"use client"` solo donde haya interacción,
  animación o APIs del navegador.
- Imágenes y fuentes en `public/`. Fuentes con `next/font/local`.
- Estilos globales en `app/globals.css`. No agregues Tailwind ni librerías
  de UI si el proyecto no las usa ya.

## Reglas de diseño
- IMPORTANT: si el proyecto parte de una plantilla, conserva su diseño
  (tipografías, colores, espaciados, animaciones). Cambia contenido, no estilo,
  salvo que se pida explícitamente.
- Mobile first: la mayoría de los invitados abre el link desde el celular.
  Revisa siempre a 375px de ancho: sin scroll horizontal, texto legible,
  botones de al menos 44px de alto.
- Respeta `prefers-reduced-motion`.
- Imágenes con `alt` descriptivo en español; usa `next/image` cuando no rompa
  efectos (parallax, máscaras).
- Links externos (mapas, mesa de regalos) con `target="_blank" rel="noopener"`.

## Contenido
- Español de México, tono cálido y cercano. Horas como "2:00 p.m.".
- Nada de texto en inglés que haya quedado de la plantilla.
- Datos que aún no son reales (cuentas, CLABE, teléfonos) van marcados con
  `// TODO: dato real` en `lib/` para encontrarlos fácil.
- Conserva el crédito del autor de la plantilla en el footer si la licencia
  lo pide.

## Gotchas
- Cualquier cosa que dependa de la fecha u hora actual (cuenta regresiva) se
  calcula solo en el cliente dentro de `useEffect`, para evitar errores de
  hidratación.
- Limpia listeners, observers y `requestAnimationFrame` al desmontar.
- Metadata (título, descripción, Open Graph con imagen) en `app/layout.tsx`:
  la vista previa al compartir por WhatsApp importa.

## Verificación
Antes de decir que terminaste:
1. `pnpm build` sin errores.
2. Abre la página (Playwright MCP o navegador) y toma capturas a 375px y a
   1440px. Revisa las capturas y corrige lo que se vea mal.
3. Muestra la evidencia (salida del build y capturas), no solo "listo".

## Modo aprendizaje de Git
Estoy aprendiendo Git. Trabaja de forma que yo vea y entienda cada paso.

**Bitácora.** Mantén `GIT_APRENDIZAJE.md` en la raíz (está en `.gitignore`).
Cada vez que corras un comando de git, agrega una entrada:
- el comando exacto
- qué hace, en palabras simples
- por qué lo usaste en ese momento
- qué salió (un resumen, no la salida completa)
Al final de cada sesión agrega un resumen de lo aprendido y un diagrama de
`git log --oneline --graph --all`.

**Ramas.**
- Si la carpeta no es repo, empieza con `git init` y un primer commit en `main`.
- `main` siempre debe funcionar. Cada tarea va en su propia rama, por ejemplo
  `feat/migracion-next`, `feat/itinerario`, `feat/ubicaciones`, `fix/...`.
- Commits pequeños, uno por cambio lógico, con mensajes en español en formato
  `tipo: descripción` (feat, fix, style, docs, chore).
- Antes de cada comando de git, dime en una línea qué vas a hacer y por qué.

**Fusiones.**
- Al terminar una rama, fusiónala a `main` con `git merge --no-ff` para que
  la historia muestre la rama, y luego muéstrame `git log --oneline --graph`.
- Cuando tenga sentido, enséñame a pasar cambios entre ramas: traer `main` a
  una rama con `git merge main`, y copiar un commit con `git cherry-pick`.
- Si hay un conflicto, NO lo resuelvas solo: explícame qué chocó, muéstrame
  las dos versiones y resolvámoslo juntos.
- Los Pull Requests son de GitHub, no de git. Si el repo está en GitHub y
  `gh` está instalado, usa `gh pr create` / `gh pr merge` y explícame la
  diferencia con un merge local. Si no, haz el merge local.

**Seguridad.** IMPORTANT: pídeme confirmación antes de cualquier comando que
pueda borrar trabajo (`reset --hard`, `push --force`, `branch -D`, `clean`,
`rebase` sobre ramas ya subidas).
