# Dhrubotara - Project Context for Agents

## 1. Project Overview
**Dhrubotara** is a showcase website for an artisanal brand selling homely goods (Coconut Oil, Pickles, Remedies).
*   **Vibe:** "Artisanal Luxury", "Homely", "Authentic".
*   **Goal:** Display products and testimonials, allowing the owner ("Mom") to update content via a mobile-friendly Admin CMS.
*   **Constraints:** No payment gateway yet (orders via WhatsApp). Mobile-first priority.

## 2. Tech Stack
*   **Runtime:** Bun
*   **Framework:** Next.js 16 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4 (configured via PostCSS).
*   **Animation:** Framer Motion.
*   **Backend / Auth:**
    *   **Auth:** Firebase Authentication (Phone Auth).
    *   **DB:** Firebase Firestore.
    *   **Storage:** Firebase Storage.
    *   **API:** Next.js API Routes (`src/app/api/...`).
*   **Icons:** Lucide React.
*   **Deployment:** Vercel (Target).

## 3. Architecture & Patterns

### Directory Structure (`src/`)
*   **`app/`**: Next.js App Router root.
    *   `layout.tsx`: Root layout (Fonts, Global CSS, AuthProvider).
    *   `(public)/`: Route Group for public facing pages (Home, Product Detail).
    *   `admin/`: Route Group for authenticated Admin CMS.
    *   `api/`: Backend API routes.
*   **`components/`**: Reusable UI components.
    *   **Note:** Interactive components (using hooks/state) must start with `"use client";`.
*   **`lib/`**: Business logic & Infrastructure.
    *   `firebase.ts`: Firebase initialization (uses `NEXT_PUBLIC_` env vars).
    *   `useProducts.ts` / `useTestimonials.ts`: Data fetching hooks (Client-side fetching).
*   **`data/`**: Static fallback data (used when Firebase is not configured).

### Key Abstractions
*   **Hybrid Data Fetching:**
    *   Current implementation uses **Client-Side Fetching** via custom hooks (`useProducts`) to support the "Mock Mode" fallback easily.
    *   *Future:* Can be migrated to Server Components for SEO critical sections.
*   **Mock Mode:**
    *   If Firebase keys (`.env`) are missing, hooks fallback to `localStorage` + Static Data.
    *   Admin Login accepts OTP `123456` in Mock Mode.

## 4. Design System (Artisanal Luxury)

### Visuals
*   **Typography:**
    *   Headings: **Serif** (*Playfair Display* via `next/font`).
    *   Body: **Sans-serif** (*Inter* via `next/font`).
*   **Colors:**
    *   Background: `bg-stone-50` (Warm White).
    *   Text: `text-emerald-950` (Headings), `text-stone-600` (Body).
    *   Primary Action: `bg-emerald-900`.
*   **Shapes:** Sharp/Minimal (`rounded-sm`). Avoid large radii.

### Tailwind v4
*   Configuration is in `src/app/globals.css` using the `@theme` directive.
*   **Do not** look for `tailwind.config.js`.

## 5. Agent Workflow & Verification

### A. Development
1.  **Install:** `bun install`
2.  **Dev Server:** `bun dev` (Runs on `localhost:3000`)

### B. Verification (CRITICAL)
Before considering a task complete, **you must verify your work** using these commands. Do not assume code works just because it was generated.

1.  **Type Check:**
    ```bash
    bun run tsc
    ```
    *   *Why:* Ensures no TypeScript errors, especially with stricter Next.js types.
    *   *Expectation:* Exit code 0, no output.

2.  **Linting:**
    ```bash
    bun run lint
    ```
    *   *Why:* Checks for Next.js specific issues (e.g., using `<img>` instead of `<Image>`, incorrect `Link` usage).
    *   *Expectation:* "No issues found" or successful exit.

3.  **Build Check (Final Polish):**
    ```bash
    bun run build
    ```
    *   *Why:* Verifies that pages can be statically generated and API routes compile.

### C. Common Pitfalls to Avoid
*   **`window` is undefined:** Remember Next.js renders on the server first. Check `typeof window !== 'undefined'` or use `useEffect` for browser-only logic.
*   **"use client":** Forget this and hooks (`useState`, `useRouter`) will break your build.
*   **Links:** Use `import Link from 'next/link'` (Prop: `href`), **NOT** `react-router-dom`.
*   **Env Vars:** Use `process.env.NEXT_PUBLIC_...`, **NOT** `import.meta.env`.

## 6. Deployment
*   **Platform:** Vercel.
*   **Config:** `next.config.ts`.
*   **Env:** Ensure all `NEXT_PUBLIC_FIREBASE_*` keys are set in the Vercel project settings.