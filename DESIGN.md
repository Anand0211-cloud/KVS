# Design System Strategy: KVS Universal Solutions

## 1. Overview & Creative North Star
**The Creative North Star: "The Kinetic Prism"**

This design system moves beyond the traditional, static "box-and-line" logistics interface. In an industry defined by movement, we adopt a philosophy of **Kinetic Sophistication**. We treat the B2B logistics experience not as a series of spreadsheets, but as a fluid, high-velocity stream of data. 

The system breaks the "template" look by using **intentional asymmetry** and **tonal layering**. We bypass rigid grids in favor of a "Prism Flow" layout—where elements appear to float and overlap, creating a sense of depth and momentum. By utilizing sophisticated Glassmorphism and high-contrast editorial typography, we transform "tracking and freight" into a premium, authoritative digital experience.

---

## 2. Colors & Tonal Depth

The palette is anchored in the vibrant energy of the peacock—symbolizing vision and integrity. We utilize a sophisticated "Spectral Tiering" system to manage information density.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly on a `surface` background to create a "soft-edge" transition.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use the Material surface tiers to define importance:
*   **Base Layer:** `surface` (#f8fafb) for the global canvas.
*   **Sectioning:** `surface-container-low` (#f2f4f5) for large organizational blocks.
*   **Active Elements:** `surface-container-lowest` (#ffffff) for high-priority interactive cards, creating a "lifted" effect.

### The "Glass & Gradient" Rule
To capture the "Prism Flow" aesthetic:
*   **Hero Areas:** Use a linear gradient from `primary` (#006071) to `primary-container` (#007b8f) at a 135-degree angle.
*   **Floating Navigation:** Use `surface-container-lowest` with a 70% opacity and a `24px` backdrop-blur to allow the vibrant brand colors to bleed through subtly.

### Color Tokens
| Token | Hex | Role |
| :--- | :--- | :--- |
| `primary` | #006071 | Brand authority, primary actions, and navigational anchors. |
| `secondary` | #466800 | The "Peacock Eye"—used for high-conversion CTAs and success states. |
| `tertiary` | #2f5b80 | Analytical data, secondary metrics, and deep-tech accents. |
| `surface` | #f8fafb | The clean, expansive white space of modern logistics. |

---

## 3. Typography: Editorial Authority

We use a dual-font system to balance "High-Tech" with "High-Touch."

*   **Display & Headlines (Manrope):** We use Manrope for its geometric precision. It feels engineered yet approachable. Large scales (`display-lg` at 3.5rem) should be used with tight letter-spacing (-0.02em) to create an authoritative, editorial feel.
*   **Body & Utility (Inter):** Inter is our workhorse. Its tall x-height ensures maximum readability for complex logistics data.

**Hierarchy Strategy:** 
Use `display-md` for key data points (e.g., "In Transit") and pair it with `label-md` in `on-surface-variant` for metadata. This "Big/Small" contrast creates an immediate visual hook for the user.

---

## 4. Elevation & Depth: The Layering Principle

Forget drop shadows that look like "dirty glows." We achieve depth through **Ambient Light Physics.**

*   **Tonal Layering:** Place a `surface-container-highest` card inside a `surface-container-low` parent. The difference in hex value creates a "natural" elevation that feels integrated, not pasted.
*   **Ambient Shadows:** For floating modals, use a multi-layered shadow: `0px 4px 20px rgba(0, 31, 38, 0.06)` (a tint of our `on-primary-fixed` color).
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline-variant` (#bec8cc) at **15% opacity**. It should be a hint of a line, not a wall.
*   **Signature Interaction:** When hovering over a card, transition the background from `surface-container-lowest` to a subtle gradient of `surface-container-lowest` to `primary-fixed` (at 5% opacity).

---

## 5. Components

### Buttons: The "Prism" CTA
*   **Primary:** High-gloss. Background: `primary`. On-hover: `primary-container`. Corner radius: `xl` (1.5rem) for a modern, pill-shaped feel.
*   **Secondary:** Glass-style. Background: `outline-variant` at 10% opacity with a `12px` backdrop blur.

### Cards & Lists: Fluid Containers
*   **No Dividers:** Prohibit the use of horizontal rules. Use `1.5rem` (xl) vertical spacing or a shift to `surface-container-low` to separate items.
*   **Visual Rhythm:** Logistics data should be grouped in cards with `xl` (1.5rem) rounded corners.

### Input Fields: Minimalist Tech
*   **Style:** No bottom line. Use a `surface-container-highest` background with a `sm` (0.25rem) radius. 
*   **Focus State:** Instead of a thick border, use a `2px` glow of `primary_fixed` to indicate activity.

### Additional Component: "The Velocity Tracker"
A custom progress bar using a gradient from `secondary` (#466800) to `primary` (#006071) with a "pulse" animation. This reinforces the "Kinetic Prism" theme.

---

## 6. Do's and Don'ts

### Do
*   **DO** use overlapping elements. A map or image can slightly "bleed" into the section below to break the grid.
*   **DO** use `secondary` (Green/Yellow) sparingly—it is a laser-focused accent meant to guide the eye to the most important "Action" on the screen.
*   **DO** embrace white space. If the layout feels "crowded," double the padding.

### Don't
*   **DON'T** use black text on white. Use `on-surface` (#191c1d) for better optical comfort.
*   **DON'T** use 90-degree sharp corners. Everything in this system should feel "honed" and approachable (minimum `DEFAULT` 0.5rem radius).
*   **DON'T** use standard "Select" dropdowns. Design custom, floating glass menus that appear to "lift" off the surface.