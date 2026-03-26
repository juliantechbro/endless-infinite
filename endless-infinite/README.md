# Endless Infinite - Miami Tech Agency Landing Page 🌴⚡️

Welcome to the Next.js repository for **Endless Infinite**, a high-end Miami-based agency specializing in immersive Web Experiences and Custom AI Automations. 

This environment perfectly merges our "Cyberpunk meets Miami luxury" aesthetic with modern React performance.

## 🚀 Tech Stack Highlights

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Vanilla CSS hybrid Design System
- **Components:** Shadcn
- **Icons:** Lucide-React
- **Animation:** Native CSS Keyframes + Pure WebGL Fragment Shaders

## 📦 Installation & Setup

1. **Verify Prerequisites:** Ensure you have Node.js 20+ installed.
2. **Navigate to the Source Directory:**
   ```bash
   cd /Users/julesservius/Projects/Stitch/endless-infinite
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Boot the Local Development Server:**
   ```bash
   npm run dev
   ```
5. **View the Site:** Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

All specific color palettes, fonts (`Manrope` & `Space Grotesk`), and structural layout dimensions are configured tightly within `src/app/globals.css`. 

Changing the overall theme color is as simple as tweaking the `:root` variables:
*   `--primary`: The core Electric Cyan `(#00f0ff)`
*   `--secondary`: The contrasting Hot Pink `(#ff0055)`
*   `--surface`: Deep Midnight Violet `(#0b0410)`

## 💨 The Spooky Smoke WebGL Background

The animated WebGL background relies on a custom fragment shader powered by React refs.
*   **Path:** `src/components/ui/spooky-smoke-animation.tsx`
*   **Opt-In Client Rendering:** As it taps the raw canvas element and window APIs, it operates purely as a Client Component (`"use client"`).
*   **Color Prop:** Pass any hex to `<SmokeBackground smokeColor="#hex" />` in `page.tsx` to instantly tint the atmosphere.

---
*Built autonomously by Antigravity for Endless Infinite.*
