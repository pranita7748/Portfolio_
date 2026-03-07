# Project File Structure

This document explains **every file and folder** in the recruiter-ready portfolio (frontend + backend).

---

## Root

| File / Folder | Purpose |
|---------------|---------|
| **`package.json`** | Root npm config: scripts (`dev`, `dev:client`, `dev:server`, `build`, etc.), frontend dependencies (React, Vite, Tailwind, shadcn, etc.), devDependencies (TypeScript, ESLint, Vitest, concurrently). |
| **`package-lock.json`** | Lockfile for npm install. |
| **`bun.lockb`** | Lockfile if using Bun. |
| **`vite.config.ts`** | Vite config: React plugin, `@` → `src/` alias, dev server port 8080, **proxy `/api` → backend** (localhost:3001). |
| **`tailwind.config.ts`** | Tailwind: content paths, theme (colors from CSS vars, fonts, keyframes, animations), `tailwindcss-animate` plugin. |
| **`postcss.config.js`** | PostCSS: `tailwindcss` and `autoprefixer`. Used by Vite to process CSS. |
| **`tsconfig.json`** | Root TypeScript config; references `tsconfig.app.json` and `tsconfig.node.json`. |
| **`tsconfig.app.json`** | TS config for `src/` (React app). |
| **`tsconfig.node.json`** | TS config for Vite config and other Node tooling. |
| **`index.html`** | HTML entry; has `<div id="root">` and `<script type="module" src="/src/main.tsx">`. |
| **`components.json`** | shadcn-ui config: style, paths, Tailwind integration. |
| **`eslint.config.js`** | ESLint config. |
| **`vitest.config.ts`** | Vitest config for unit tests. |
| **`.env.example`** | Example env: optional `VITE_API_URL` for production API base URL. |
| **`.gitignore`** | Ignores `node_modules`, `dist`, logs, `server/data/submissions.json`, etc. |
| **`README.md`** | Project overview, setup, run instructions, tech stack, backend API notes. |
| **`FILE-STRUCTURE.md`** | This file. |

---

## `public/`

Static assets served at the site root.

| File | Purpose |
|------|---------|
| **`logo.png`** | Site logo. |
| **`DSCN3473.JPG`** | Image asset (e.g. photo). |
| **`robots.txt`** | Crawler instructions. |

---

## `src/` (Frontend)

### Entry & app shell

| File | Purpose |
|------|---------|
| **`main.tsx`** | App entry: creates React root, renders `<App />`, imports **`index.css`** (global styles). |
| **`App.tsx`** | Root layout: `QueryClientProvider` → `TooltipProvider` → `Toaster` + `Sonner` → `BrowserRouter` with `/` → `Index`, `*` → `NotFound`. |
| **`App.css`** | Extra app-level CSS (if any). |
| **`index.css`** | **Global styles:** Tailwind `@tailwind base/components/utilities`, Google Fonts (Inter, JetBrains Mono), CSS variables (colors, radius, typography), `@layer base` (reset, body, selection), `@layer components` (e.g. `.text-gradient`, `.glow`, `.grid-background`, `.section-padding`, `.container-narrow`), `@layer utilities`, keyframes (float, typing, blink), `.typing-effect`. |
| **`vite-env.d.ts`** | Vite client types + `VITE_API_URL` for `import.meta.env`. |

### `src/pages/`

| File | Purpose |
|------|---------|
| **`Index.tsx`** | Main portfolio page: `Navigation` → `Hero` → `About` → `Skills` → `Projects` → `Certifications` → `Leadership` → `Contact` → `Footer`. |
| **`NotFound.tsx`** | 404 page for unknown routes. |

### `src/components/`

Portfolio sections and shared UI.

| File | Purpose |
|------|---------|
| **`Navigation.tsx`** | Top nav / header. |
| **`NavLink.tsx`** | Nav link component. |
| **`Hero.tsx`** | Hero section. |
| **`About.tsx`** | About section. |
| **`Skills.tsx`** | Skills section. |
| **`Projects.tsx`** | Projects section. |
| **`Certifications.tsx`** | Certifications section. |
| **`Leadership.tsx`** | Leadership section. |
| **`Contact.tsx`** | Contact section: form (name, email, message) wired to **backend** via `postContact`, React Hook Form + Zod, Sonner toasts. |
| **`Footer.tsx`** | Footer. |
| **`AnimatedSection.tsx`** | Wrapper for scroll/section animations (e.g. Framer Motion). |

### `src/components/ui/`

shadcn-style UI primitives (Radix-based). Used across the app.

| File | Purpose |
|------|---------|
| **`button.tsx`** | Button. |
| **`input.tsx`** | Text input. |
| **`textarea.tsx`** | Textarea. |
| **`label.tsx`** | Label. |
| **`form.tsx`** | Form (FormProvider, FormField, FormItem, FormLabel, FormControl, FormMessage) + react-hook-form. |
| **`card.tsx`** | Card. |
| **`toast.tsx`** | Radix toast. |
| **`toaster.tsx`** | Toast container. |
| **`sonner.tsx`** | Sonner toaster; used for contact form toasts. |
| **`tooltip.tsx`** | Tooltip. |
| **`dialog.tsx`**, **`sheet.tsx`**, **`drawer.tsx`** | Overlays. |
| **`dropdown-menu.tsx`** | Dropdown menus. |
| **`accordion.tsx`**, **`tabs.tsx`**, **`collapsible.tsx`** | Layout primitives. |
| **`avatar.tsx`**, **`badge.tsx`**, **`separator.tsx`** | Misc UI. |
| **`scroll-area.tsx`**, **`skeleton.tsx`**, **`progress.tsx`** | Feedback. |
| **`checkbox.tsx`**, **`radio-group.tsx`**, **`switch.tsx`**, **`slider.tsx`** | Form controls. |
| **`select.tsx`**, **`popover.tsx`**, **`calendar.tsx`** | Pickers. |
| **`command.tsx`**, **`navigation-menu.tsx`**, **`menubar.tsx`**, etc. | Other shadcn components. |

### `src/hooks/`

| File | Purpose |
|------|---------|
| **`use-mobile.tsx`** | Detects mobile viewport. |
| **`use-toast.ts`** | Toast state + API for Radix toasts. |

### `src/lib/`

| File | Purpose |
|------|---------|
| **`utils.ts`** | Helpers, e.g. `cn()` for classnames (clsx + tailwind-merge). |
| **`api.ts`** | **`postContact(payload)`**: calls `POST /api/contact`, uses `VITE_API_URL` or relative `/api`; returns `{ success, id? }` or `{ success: false, error }`. |

### `src/test/`

| File | Purpose |
|------|---------|
| **`setup.ts`** | Vitest setup (e.g. jsdom). |
| **`example.test.ts`** | Sample unit test. |

---

## `server/` (Backend)

Express + TypeScript API for the portfolio.

### Root

| File | Purpose |
|------|---------|
| **`package.json`** | Backend deps: express, cors, zod; dev: tsx, types. Scripts: `dev` (tsx watch), `build`, `start`. |
| **`tsconfig.json`** | TS config for Node (ESM, `dist/` output). |
| **`README.md`** | Backend setup, scripts, endpoints. |

### `server/src/`

| File | Purpose |
|------|---------|
| **`index.ts`** | Express app: CORS, `express.json()`, `GET /api/health`, `POST /api/contact` via `contactRouter`. Listens on `PORT` (default 3001). |

### `server/src/routes/`

| File | Purpose |
|------|---------|
| **`contact.ts`** | `POST /` → validates body with Zod (`name`, `email`, `message`), appends via `appendSubmission`, returns `201 { success, id }` or `400`/`500` with `{ success: false, error }`. |

### `server/src/lib/`

| File | Purpose |
|------|---------|
| **`store.ts`** | Reads/writes **`server/data/submissions.json`**. `appendSubmission(name, email, message)` creates `{ id, name, email, message, createdAt }`, appends to array, saves file. |

### `server/data/`

| File | Purpose |
|------|---------|
| **`.gitkeep`** | Keeps `data/` in git. |
| **`submissions.json`** | Contact form submissions (created at runtime; **gitignored**). |

---

## `.vscode/`

| File | Purpose |
|------|---------|
| **`settings.json`** | `"css.lint.unknownAtRules": "ignore"` so the editor doesn’t warn about Tailwind’s `@tailwind` / `@apply` in **`index.css`**. |
| **`extensions.json`** | Recommended VS Code extensions (if present). |

---

## Data flow (high level)

1. **Build:** Vite uses `index.html` → `main.tsx` → `App.tsx` → Router → `Index` (portfolio sections).  
2. **Styles:** `index.css` is imported in `main.tsx`; Tailwind + PostCSS compile it.  
3. **Contact:** User submits form → `Contact` calls `postContact` → `fetch /api/contact` → Vite proxy (dev) or `VITE_API_URL` (prod) → **server** `POST /api/contact` → Zod validate → `store.appendSubmission` → `submissions.json` updated → JSON response → Sonner toast.

---

## Quick reference

- **Frontend dev:** `npm run dev` (runs client + server) or `npm run dev:client` (Vite only).  
- **Backend dev:** `npm run dev:server`.  
- **Frontend build:** `npm run build`.  
- **Global styles / theme:** `src/index.css` + `tailwind.config.ts`.  
- **API base:** Dev uses Vite proxy `/api` → `http://localhost:3001`; prod uses `VITE_API_URL`.
