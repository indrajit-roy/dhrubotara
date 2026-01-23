# Dhrubotara - Agent Guide

## 🎯 Quick Reference (Start Here!)

### Business Constants
- **Contact Phone:** `+91 98315 74424` (used site-wide)
- **WhatsApp Link:** `https://wa.me/919831574424`
- **Admin Phone (Mock Mode):** Any number accepted
- **Admin OTP (Mock Mode):** `123456`

### Essential Commands
```bash
bun install              # Install dependencies
bun dev                  # Start dev server (localhost:3000)
bun run lint            # Lint check (run after EVERY change)
bun run tsc             # Type check (run after EVERY change)
bun run build           # Build check (run before commits)
```

### Verification Checklist (Before marking ANY task complete)
✅ Run `bun run lint` - Must pass with no errors/warnings
✅ Run `bun run tsc` - Must pass with no output
✅ Test in browser - Visual check for regressions
✅ Run `bun run build` - Final verification before commits

---

## 🚨 Critical Constraints (MUST FOLLOW)

### Images (BREAKING if violated)
- **NEVER use `<img>`** - Always use Next.js `<Image>` or `<FadeInImage>`
- All remote image hostnames MUST be configured in `next.config.ts`:
  ```typescript
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
    ],
  }
  ```
- `FadeInImage` component requires: `fill={true}` + `sizes="..."` props
- **Restart dev server** after changing `next.config.ts`

### React/Next.js Patterns (BREAKING if violated)
- **Side effects MUST be in `useEffect`**, NOT during render:
  ```typescript
  // ❌ WRONG - Causes "Cannot update component while rendering" error
  if (user) router.push('/dashboard');

  // ✅ CORRECT
  useEffect(() => {
    if (user) router.push('/dashboard');
  }, [user, router]);
  ```
- **Interactive components MUST have `"use client";`** directive at top
- **Browser APIs** (`window`, `localStorage`) - Check `typeof window !== 'undefined'` or use in `useEffect`
- **Navigation:** Use `import Link from 'next/link'` with `href` prop, NOT `react-router-dom`
- **Env Vars:** Use `process.env.NEXT_PUBLIC_...`, NOT `import.meta.env`

### TypeScript (Coding Standards)
- **NEVER use `as any`** - Use Zod validation or proper type guards
- **Avoid `any` type** - Use `unknown` if absolutely necessary
- All error handling must validate error types before accessing properties

---

## 1. Project Overview

**Dhrubotara** is a showcase website for an artisanal brand selling homely goods (Coconut Oil, Pickles, Remedies).

### Key Details
- **Vibe:** "Artisanal Luxury", "Homely", "Authentic"
- **Goal:** Display products and testimonials, allowing the owner ("Mom") to update content via a mobile-friendly Admin CMS
- **Business Model:** No payment gateway yet - orders via WhatsApp
- **Priority:** Mobile-first design

### User Flows
1. **Public:** Browse products → View details → WhatsApp order
2. **Admin:** Phone auth → Dashboard → Manage products/testimonials

---

## 2. Tech Stack

- **Runtime:** Bun
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (configured via PostCSS in `src/app/globals.css`)
- **Animation:** Framer Motion
- **Backend/Auth:**
  - Auth: Firebase Authentication (Phone Auth)
  - DB: Firebase Firestore
  - Storage: Firebase Storage
  - API: Next.js API Routes (`src/app/api/...`)
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 3. Architecture & Patterns

### Directory Structure (`src/`)
```
app/
├── layout.tsx              # Root layout (Fonts, Global CSS, AuthProvider)
├── (public)/               # Route group: Public pages
│   ├── page.tsx           # Home page
│   └── product/[id]/      # Product detail pages
├── admin/                  # Route group: Admin CMS
│   ├── page.tsx           # Admin login (Phone OTP)
│   └── dashboard/         # Admin dashboard
└── api/                    # Backend API routes

components/
├── ui/                     # Base UI components
│   ├── FadeInImage.tsx    # Custom Next.js Image wrapper
│   └── Skeleton.tsx       # Loading skeleton
├── About.tsx              # About section
├── Hero.tsx               # Hero section
├── Navbar.tsx             # Navigation
├── ProductCard.tsx        # Product grid item
└── Testimonials.tsx       # Testimonials section

lib/
├── firebase.ts            # Firebase initialization
├── useProducts.ts         # Product data fetching hook
└── useTestimonials.ts     # Testimonial data fetching hook

context/
└── AuthContext.tsx        # Auth state management

data/
└── mockData.ts            # Fallback data for Mock Mode
```

### Key Abstractions

#### Hybrid Data Fetching
- **Current:** Client-side fetching via custom hooks (`useProducts`, `useTestimonials`)
- **Why:** Simplifies Mock Mode fallback (localStorage + static data)
- **Future:** Can migrate to Server Components for SEO-critical sections

#### Mock Mode
- **Trigger:** When Firebase env vars are missing (`.env` not configured)
- **Behavior:**
  - Data hooks fallback to `localStorage` + static data from `data/mockData.ts`
  - Admin login accepts any phone number + OTP `123456`
  - `isFirebaseConfigured` flag in `lib/firebase.ts` controls this

#### Authentication Flow
- **Provider:** `AuthContext` wraps app in `layout.tsx`
- **Hook:** `useAuth()` exposes `{ user, loading }` state
- **Protected Routes:** Check `user` in `useEffect`, redirect if null

---

## 4. Data Schemas

### Product
```typescript
{
  id: string;              // Firestore doc ID
  name: string;            // "Coconut Oil"
  description: string;     // Multi-line description
  image: string;           // Firebase Storage URL or public path
  tag: string;             // "NEW" | "BEST SELLER" | "SPECIALTY"
  price?: string;          // Optional: "Rs. 350"
  weight?: string;         // Optional: "500ml"
  sortPriority?: number;   // Lower = appears first (default: 999)
}
```

### Testimonial
```typescript
{
  id: string;              // Firestore doc ID
  name: string;            // Customer name
  text: string;            // Review text
  image?: string;          // Optional: Customer photo URL
  role?: string;           // Optional: "Verified Buyer"
}
```

---

## 5. Design System (Artisanal Luxury)

### Typography
- **Headings:** Serif font (*Playfair Display* via `next/font`) - Use `font-serif` class
- **Body:** Sans-serif (*Inter* via `next/font`) - Use `font-sans` class

### Colors
```css
/* Backgrounds */
bg-stone-50        /* Page background (Warm White) */
bg-stone-100       /* Card/Section backgrounds */
bg-white           /* Elevated surfaces */

/* Text */
text-emerald-950   /* Headings (Dark Green) */
text-stone-600     /* Body text (Gray) */
text-stone-500     /* Secondary text */

/* Brand/Actions */
bg-emerald-900     /* Primary buttons/CTAs */
bg-emerald-800     /* Hover state */
text-emerald-700   /* Links */
```

### Shapes & Spacing
- **Border Radius:** `rounded-sm` (Sharp/Minimal) - Avoid large radii like `rounded-lg`
- **Shadows:** `shadow-sm`, `shadow-xl` sparingly
- **Spacing:** Generous padding - `py-16 md:py-32` for sections

### Tailwind v4 Configuration
- **Location:** `src/app/globals.css` using `@theme` directive
- **DO NOT look for `tailwind.config.js`** (doesn't exist in v4)

---

## 6. Common Code Patterns

### FadeInImage Component
```tsx
import { FadeInImage } from '@/components/ui/FadeInImage';

// Pattern 1: Fill parent container (most common)
<div className="aspect-square relative">
  <FadeInImage
    src={product.image}
    alt={product.name}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    containerClassName="w-full h-full"
    className="object-cover"
  />
</div>

// Pattern 2: Fixed dimensions
<FadeInImage
  src="/logo.png"
  alt="Logo"
  width={200}
  height={100}
  className="object-contain"
/>
```

### Contact Information (Site-wide Standard)
```tsx
// Phone number (clickable)
<a href="tel:+919831574424">+91 98315 74424</a>

// WhatsApp link
<a href="https://wa.me/919831574424" target="_blank" rel="noopener">
  Order on WhatsApp
</a>
```

### Animation Patterns (Framer Motion)
```tsx
// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {content}
</motion.div>

// Hover scale effect
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  {card}
</motion.div>
```

### Data Fetching Pattern
```tsx
'use client';
import { useProducts } from '@/lib/useProducts';

export default function ProductList() {
  const { products, loading } = useProducts();

  if (loading) return <Skeleton />;

  return products.map(product => (
    <ProductCard key={product.id} {...product} />
  ));
}
```

---

## 7. Verification Workflow

### When to Verify
✅ **After EVERY code change** (before claiming task is done)
✅ **Before creating git commits**
✅ **After updating dependencies** (`package.json` changes)
✅ **After changing config files** (`next.config.ts`, `tsconfig.json`)

### Verification Steps (Run in order)

#### 1. Lint Check
```bash
bun run lint
```
- **Catches:** Next.js violations (`<img>` instead of `<Image>`, wrong imports, etc.)
- **Expected:** "No issues found" or exit code 0
- **If fails:** Fix all errors/warnings before proceeding

#### 2. Type Check
```bash
bun run tsc
```
- **Catches:** TypeScript errors, type mismatches, missing props
- **Expected:** No output + exit code 0
- **If fails:** Fix type errors (no `as any` hacks!)

#### 3. Visual Browser Check
- Open `localhost:3000` in browser
- Check affected pages visually
- Test interactions (clicks, hovers, navigation)
- **Mobile responsive:** Test with browser DevTools mobile view

#### 4. Build Check (Final step)
```bash
bun run build
```
- **Catches:** Static generation errors, API route issues, missing dependencies
- **Expected:** Successful build output
- **If fails:** Check error logs, fix issues, re-run

### DON'T SKIP VERIFICATION
These checks catch 90% of issues before runtime. Never assume generated code works without verification.

---

## 8. Common Pitfalls & Solutions

### ❌ Problem: "Cannot update component while rendering"
```tsx
// ❌ WRONG
if (user) router.push('/dashboard');

// ✅ CORRECT
useEffect(() => {
  if (user) router.push('/dashboard');
}, [user, router]);
```

### ❌ Problem: "window is not defined"
```tsx
// ❌ WRONG
const theme = localStorage.getItem('theme');

// ✅ CORRECT
useEffect(() => {
  const theme = localStorage.getItem('theme');
}, []);
```

### ❌ Problem: "You forgot to use 'use client'"
```tsx
// ❌ WRONG
import { useState } from 'react';
export function Counter() { ... }

// ✅ CORRECT
'use client';
import { useState } from 'react';
export function Counter() { ... }
```

### ❌ Problem: "Invalid src prop on next/image"
```tsx
// ❌ WRONG - Hostname not configured
<Image src="https://new-cdn.com/image.jpg" />

// ✅ CORRECT - Add to next.config.ts first
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'new-cdn.com', pathname: '/**' }
  ]
}
```

### ❌ Problem: "Module not found" for Tailwind classes
- **Cause:** Tailwind config issue or dev server cached
- **Fix:** Restart dev server (`Ctrl+C` then `bun dev`)

---

## 9. Known Issues & Workarounds

### Dev Server Restart Required
**When:** After editing `next.config.ts`, `tsconfig.json`, or installing packages
**Fix:** Stop (`Ctrl+C`) and restart (`bun dev`)

### Firebase Errors in Mock Mode (Expected)
**When:** Running without `.env` file configured
**Behavior:** Console shows Firebase init errors, but app works via fallback
**Status:** Normal - Mock Mode is working as designed

### Admin Dashboard Auth Redirect Loop
**Cause:** `router.push()` called during render instead of in `useEffect`
**Fix:** See "Common Pitfalls" section above

---

## 10. Deployment

### Platform
- **Target:** Vercel
- **Config:** `next.config.ts`

### Environment Variables (Vercel Settings)
Required for production (Firebase):
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```

### Pre-Deployment Checklist
✅ All environment variables set in Vercel dashboard
✅ `bun run build` passes locally
✅ Firebase rules configured (if using production Firebase)
✅ Image domains configured in `next.config.ts`

---

## 📚 Additional Resources

- [Next.js 16 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Firebase Web Docs](https://firebase.google.com/docs/web/setup)