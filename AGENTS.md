# Dhrubotara - Project Context for Agents

## 1. Project Overview
**Dhrubotara** is a showcase website for an artisanal brand selling homely goods (Coconut Oil, Pickles, Remedies). 
*   **Vibe:** "Artisanal Luxury", "Homely", "Authentic".
*   **Goal:** Display products and testimonials, and allow the owner ("Mom") to easily update content via a simple mobile-friendly CMS.
*   **Constraints:** No payment gateway yet (orders via Phone/Email/WhatsApp). Mobile-first priority.

## 2. Tech Stack
*   **Runtime:** Bun
*   **Framework:** React (Vite + TypeScript)
*   **Styling:** Tailwind CSS v4 (configured via CSS `@theme` variables, no `tailwind.config.js`).
*   **Animation:** Framer Motion.
*   **Routing:** React Router DOM (v7).
*   **Backend / Auth:** Google Firebase (Auth, Firestore, Storage).
*   **Icons:** Lucide React.

## 3. Current Architecture

### CMS & Data Abstraction
The app is designed to work in two modes: **Mock Mode** (Default) and **Production Mode**.
*   **Hooks:** `useProducts` (`src/lib/useProducts.ts`) and `useTestimonials` (`src/lib/useTestimonials.ts`) abstract the data source.
    *   *If Firebase keys are missing:* Uses `localStorage` + `src/data/*.ts` (static files) for persistence during the session.
    *   *If Firebase keys exist:* Automatically switches to Firestore.
*   **Auth:** `AuthContext` (`src/context/AuthContext.tsx`) manages login.
    *   Uses Firebase Phone Auth.
    *   Restricts Admin access to numbers listed in `AUTHORIZED_NUMBERS`.
    *   In Mock Mode, allows login with any number and OTP `123456`.

### Key Directories
*   `src/components`: UI blocks (Navbar, Hero, ProductCard, Testimonials).
*   `src/pages`: 
    *   Public: `Home`, `ProductDetailPage`.
    *   Admin: `AdminLogin`, `AdminDashboard`.
*   `src/data`: Static fallback data (`products.ts`, `testimonials.ts`).
*   `src/lib`: Firebase init (`firebase.ts`), Hooks, Utils.
*   `docs/`: Contains the **Go live checklist.md**.

## 4. Operational Status
*   **Responsiveness:** Fully optimized for mobile (hero text scaling, grid adjustments, touch targets).
*   **Horizontal Scroll:** Fixed via `overflow-x-hidden` on body and specific section clipping.
*   **Admin UI:** 
    *   Located at `/admin`.
    *   Features: Add/Edit/Delete Products and Testimonials.
    *   Image Upload: Simulates upload in Mock Mode; uses Firebase Storage in Prod.

## 5. Design System & Styling Guidelines
To maintain the "Artisanal Luxury" aesthetic, strictly adhere to these rules:

### A. Color Palette
*   **Backgrounds:** Use `bg-stone-50` (Warm White) for the main page background to avoid clinical stark white. Use `bg-white` for cards to create subtle depth.
*   **Primary Text:** `text-emerald-950` (Deep Forest Green) is used instead of pure black for Headings.
*   **Body Text:** `text-stone-600` (Warm Grey) for readability and softness.
*   **Accents:** `text-emerald-900` or `bg-emerald-900` for buttons and active states.
*   **Selection:** `selection:bg-emerald-200 selection:text-emerald-950`.

### B. Typography
*   **Headings:** **Serif** (*Playfair Display*). Used for Section Titles, Product Names, and Hero text.
    *   *Example:* `font-serif text-4xl md:text-5xl`
*   **Body/UI:** **Sans-serif** (*Inter*). Used for descriptions, navigation, buttons, and tags.
    *   *Labels:* Often Uppercase + Tracking Widest (e.g., `font-sans text-xs tracking-[0.2em] uppercase`).

### C. Components & shapes
*   **Border Radius:** **Sharp/Minimal**. Use `rounded-sm` or `rounded-none`. Avoid large rounded corners (`rounded-xl` or `rounded-full`) unless it's a specific badge or decorative circle. Sharp edges convey "Premium/Classic".
*   **Buttons:** Uppercase text, `tracking-wide`, `rounded-sm`, solid `bg-emerald-900`.
*   **Images:** High quality, often treated with `grayscale` that transitions to color on hover (in About section) or slight scale animations.

### D. Motion (Framer Motion)
*   **Vibe:** Slow, heavy, elegant.
*   **Standard Transition:** `duration: 0.8`, `ease: "easeOut"`.
*   **Entry:** Elements typically fade in and float up (`y: 20` -> `y: 0`).

## 6. How to Resume Work
1.  **Install:** `bun install`
2.  **Run:** `bun dev`
3.  **Build:** `bun run build`

### Critical Next Steps (User Responsibility)
The user ("Mom") needs to go live. The agent should assist with:
1.  **Firebase Setup:** Following `docs/Go live checklist.md` to create the project and get API keys.
2.  **Environment Variables:** creating the `.env` file with those keys.
3.  **Deployment:** Deploying the `dist` folder to a host (Vercel/Netlify) and configuring CORS/Auth domains.

## 7. Known "Hacks" / Shortcuts
*   **Mock Login:** The Admin Login page accepts OTP `123456` if Firebase is not detected. This is intentional for demo purposes.
*   **Tailwind v4:** Note that `@tailwindcss/vite` is used. Configuration is in `src/index.css`, not a config file.

## 8. Future Ideas
*   **WhatsApp Integration:** Change the "Order Now" button to open a pre-filled WhatsApp message.
*   **Search/Filter:** Add filtering by product category (Oil, Pickle, etc.).