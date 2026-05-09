---
name: Dark Tech Authority
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#bdc8cf'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#889298'
  outline-variant: '#3e484e'
  surface-tint: '#6bd3fd'
  primary: '#94ddff'
  on-primary: '#003546'
  primary-container: '#5ac4ee'
  on-primary-container: '#004f66'
  inverse-primary: '#006684'
  secondary: '#c7c6c4'
  on-secondary: '#303130'
  secondary-container: '#464746'
  on-secondary-container: '#b5b5b3'
  tertiary: '#cdd2f9'
  on-tertiary: '#292e4d'
  tertiary-container: '#b1b6dc'
  on-tertiary-container: '#414767'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#bde9ff'
  primary-fixed-dim: '#6bd3fd'
  on-primary-fixed: '#001f2a'
  on-primary-fixed-variant: '#004d64'
  secondary-fixed: '#e3e2e0'
  secondary-fixed-dim: '#c7c6c4'
  on-secondary-fixed: '#1b1c1b'
  on-secondary-fixed-variant: '#464746'
  tertiary-fixed: '#dee1ff'
  tertiary-fixed-dim: '#bfc4eb'
  on-tertiary-fixed: '#131937'
  on-tertiary-fixed-variant: '#3f4565'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 4rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Poppins
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Poppins
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-page: 64px
  section-padding: 120px
---

## Brand & Style

This design system establishes a visual language of "Cinematic Authority" for Accet. It bridges the gap between high-stakes legal institutionalism and cutting-edge connectivity technology. The aesthetic is intentionally dark and atmospheric, evoking the gravitas of a high-end legal war room combined with the precision of a modern data infrastructure.

The core philosophy relies on **Cinematic Minimalism**. By utilizing deep shadows, wide apertures of whitespace, and sharp luminous accents, the interface feels less like a tool and more like an elite command center. This design system communicates power through restraint, utilizing platinum glassmorphism to signify transparency and high-tech sophistication.

## Colors

The palette is anchored by **Deep Blue (#020624)**, providing a void-like depth that allows technical elements to pop. Contrast is achieved through **Platinum (#E5E4E2)** and pure **White**, used specifically for structural borders and high-priority information.

**Vivid Blue (#5AC4EE)** acts as the primary "energy" color, representing active connectivity and technical precision. To achieve the cinematic feel, the design system utilizes "Netflix-style" gradients—deep black (#000000) transitioning into transparency—to frame content and direct the eye toward the center of the viewport. Validation states do not use flat colors; instead, they utilize a "light-up" effect where borders and typography emit a soft neon glow against the dark background.

## Typography

This design system uses a dual-font strategy to balance technical innovation with institutional trust. 

- **Space Grotesk** is reserved for headlines and technical labels. Its geometric, slightly idiosyncratic letterforms suggest a future-facing, engineered environment.
- **Poppins** is the workhorse for body text and long-form legal documentation. Its geometric but soft construction provides high readability and a sense of modern institutional stability.

Emphasis should be placed on high-contrast hierarchy: large, bold technical headers paired with smaller, airy body text to maintain a luxury editorial feel.

## Layout & Spacing

The layout philosophy is built on **Industrial Precision**. It uses a 12-column fluid grid system with generous outer margins to create a "contained" feel, reminiscent of premium dashboard hardware. 

Purposeful whitespace is critical; sections are separated by significant vertical gaps to give each piece of legal data room to breathe. High-density information areas should be avoided in favor of clean, modular blocks that utilize the 8px grid for internal padding and component alignment.

## Elevation & Depth

Depth is conveyed through **Platinum Glassmorphism** and layered gradients rather than traditional shadows. 

1.  **Surfaces:** Background elements are Deep Blue. Primary containers use a semi-transparent Platinum tint with a high-strength `backdrop-filter: blur(20px)`.
2.  **Borders:** Elements are defined by 1px solid or semi-transparent Platinum strokes. This creates a "hard-surface" industrial look.
3.  **Vignettes:** Cinematic black-to-transparent linear gradients should be applied to the top and bottom of long-scrolling views to create a lens-like focus on the center content.
4.  **Active Depth:** When an element is focused, it should not lift; instead, it should "power on," increasing the opacity of its platinum border and adding a subtle Vivid Blue inner glow.

## Shapes

The shape language is **Soft Industrial**. By using a `roundedness: 1` (0.25rem), the system avoids the friendliness of consumer apps while softening the harshness of pure 90-degree angles. This subtle rounding suggests precision-milled metal or glass components. Larger containers and cards should scale up to `rounded-lg` (0.5rem) to maintain visual harmony with the inner elements.

## Components

### Buttons
Primary buttons are high-contrast: White or Platinum backgrounds with Deep Blue text. Hover states trigger a Vivid Blue outer glow ("light-up" effect). Secondary buttons are outlined in 1px Platinum with no background fill.

### Input Fields
Inputs are glassmorphic, using a dark translucent fill and a 1px Platinum border. On focus, the border transitions to Vivid Blue with a 4px soft outer glow. Labels use the `label-caps` Space Grotesk style.

### Cards & Modules
Legal connectivity modules are built as platinum glass tiles. They feature a sharp 1px border. For cinematic effect, cards at the edge of the screen should have a slight reduction in opacity to draw focus to the center.

### Validation & States
Validation does not use standard icons alone. Errors trigger a "Critical Alert" state: the component border glows red (#FF3B3B), and a subtle red vignette appears at the edges of the container. Success states utilize a "Power On" Vivid Blue or Success Green glow, signifying a successful data connection.

### Chips & Tags
Small, industrial-style tags with 1px borders. Use Space Grotesk for the text. Tags should feel like metadata identifiers etched into the interface.