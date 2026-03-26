# Design System Document

## 1. Overview & Creative North Star: "The Kinetic Monolith"

This design system is built to evoke the feeling of "The Kinetic Monolith." It represents the intersection of infinite human creativity and the precision of AI automation. We move away from the "template" look of modern SaaS by embracing a high-end, editorial aesthetic that prioritizes atmospheric depth over structural rigidity.

**The Creative North Star** dictates that every layout should feel like a custom-designed gallery piece. We achieve this through:
- **Intentional Asymmetry:** Breaking the 12-column grid to allow content to "breathe" in unexpected ways.
- **Tonal Submersion:** Using a dark-mode-first approach where elements aren't "placed on" a background, but rather emerge from it.
- **High-Impact Brutalism:** Utilizing massive typography scales juxtaposed against hyper-minimalist UI components.

## 2. Colors & The Surface Philosophy

The color palette is anchored by a deep, ink-like `surface` and electrified by a vibrant red (`primary`) and a tech-forward lime (`secondary`). 

### The "No-Line" Rule
To maintain a premium, editorial feel, **1px solid borders are strictly prohibited for sectioning.** Conventional lines feel "cheap" and structural. Instead, define boundaries through:
1.  **Tonal Shifts:** Transitioning from `surface_container_low` to `surface_container`.
2.  **Negative Space:** Using the `24` (8.5rem) or `20` (7rem) spacing tokens to create mental breaks between content.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following hierarchy to create "nested" depth without shadows:
*   **Base Layer:** `surface` (#131313) - The infinite canvas.
*   **Secondary Sections:** `surface_container_low` (#1b1b1c) - Subtle grouping.
*   **Interactive Cards:** `surface_container` (#202020) - Prominent elements.
*   **Floating Elements:** `surface_bright` (#393939) - High-priority callouts.

### The "Glass & Gradient" Rule
To reflect "infinite potential," use Glassmorphism for floating navigation and overlay cards. Apply a `backdrop-blur` of 20px-40px to `surface_variant` at 40% opacity. 

**Signature Texture:** For primary CTAs, do not use a flat fill. Use a subtle linear gradient from `primary` (#ffb4a8) to `primary_container` (#ff5540) at a 45-degree angle to provide a "glowing" energy that feels powered by AI.

## 3. Typography: The Editorial Voice

We utilize two distinct voices: **Space Grotesk** for high-impact, technical authority and **Manrope** for human-centric readability.

*   **Display (Space Grotesk):** Massive, aggressive, and tight-tracked. Use `display-lg` (3.5rem) for hero statements. This font represents the "Infinite" scale of the agency.
*   **Headline (Space Grotesk):** Used for service titles and section starts. It should feel architectural.
*   **Body (Manrope):** Set at `body-lg` (1rem). It provides a sophisticated, readable contrast to the brutalist headlines.
*   **Labels (Space Grotesk):** All-caps, tracked out (10-15%). Used for AI data points and technical metadata.

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are replaced with **Ambient Glows** and **Tonal Stacking.**

*   **The Layering Principle:** Place a `surface_container_lowest` (#0e0e0e) card inside a `surface_container_high` (#2a2a2a) section to create a "recessed" effect. This mimics the look of high-end physical hardware.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, use a blur of 60px with a color derived from `on_surface` at 5% opacity. It should feel like a soft atmospheric occlusion, not a "drop shadow."
*   **The Ghost Border:** For high-density data visualizations where containment is mandatory, use `outline_variant` (#603e39) at **15% opacity**. This creates a "suggestion" of a line that only appears upon close inspection.

## 5. Components

### Large Hero Sections
*   **Layout:** Asymmetric. Use `display-lg` typography left-aligned, with a `primary` (#FF0000) accent element or AI visualization bleeding off the right edge of the screen.
*   **Motion:** Typography should utilize staggered entrance reveals.

### Sleek Service Cards
*   **Structure:** No borders. Background: `surface_container`.
*   **Interaction:** On hover, the background transitions to `surface_container_highest` and the `secondary` (#afed30) accent icon should "glow" using a soft 20px outer-glow effect.
*   **Content:** Avoid dividers. Use `Spacing 6` (2rem) between the title and description.

### Sophisticated AI Visualization Elements
*   **Style:** Use the `secondary` (#afed30) and `tertiary` (#c6c6c7) tokens to create data plots.
*   **Visuals:** Thin, 1px lines (the only exception to the "No-Line" rule) representing nodes and neural pathways, using `outline_variant` at 30% opacity.

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`). `xl` roundedness (0.75rem). Text: `label-md` bold, all-caps.
*   **Secondary:** Ghost style. No fill, `Ghost Border` (15% opacity). On hover, fill with `surface_bright`.
*   **Tertiary:** Text-only with a 2px `primary` underline that expands from center on hover.

### Inputs & Fields
*   **Style:** `surface_container_lowest` background. No border.
*   **States:** On focus, a subtle glow of `primary` (10% opacity) should emanate from the container.

## 6. Do’s and Don'ts

### Do:
*   **Do** use extreme scale. If a headline is big, make it *massive*.
*   **Do** embrace "Empty Space." Use the `24` (8.5rem) spacing token to separate major service offerings.
*   **Do** use `secondary` (#afed30) sparingly as a technical highlight (e.g., "AI Status: Active").

### Don't:
*   **Don't** use 100% white (#FFFFFF) for body text. Use `on_surface` (#e5e2e1) to reduce eye strain on the dark background.
*   **Don't** use standard 12px or 16px border radii. Stick to the roundedness scale (`xl` for buttons, `sm` for small UI elements).
*   **Don't** use dividers or "HR" lines to separate content. Use background color shifts.
*   **Don't** use heavy, opaque shadows. If you can clearly see where the shadow starts, it's too dark.
