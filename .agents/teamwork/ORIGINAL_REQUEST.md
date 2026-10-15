# Original User Request

## 2026-10-15T11:20:26Z

This is a single self-contained fix; keep it small and focused.

Working directory: g:/portfolio
Branch: test-new-feature
Integrity mode: development

Optimize the floating navigation bar with scroll-aware hide/show mechanics, and streamline the contact section and multi-step inquiry form for mobile viewport efficiency.

## Requirements

### R1. Smart Floating Navbar
- Ensure the navbar uses fixed positioning so it floats over the viewport without pushing or displacing page content.
- Implement smooth hide on scroll down (translate-y / fade out) and instant reveal on scroll up.
- Preserve smooth scrolling navigation links, Lenis integration, and active section indicator dot/pill.

### R2. Compact Section & Hero Header
- Tighten vertical spacing across the contact section so the form starts higher on mobile screens.
- Hide any horizontal divider line (`<hr>`) on mobile viewports using responsive utility classes (`hidden sm:block`).
- Keep the section header and subtitle concise to minimize vertical footprint above the fold.

### R3. 2-Column Mobile Radio Grid
- Render the options grid on mobile as two columns (`grid-cols-2`) to cut the vertical height in half.
- If there are 5 options, style the 5th option to span full width on mobile (`col-span-2 sm:col-span-1`) so all options and the action button comfortably fit above the fold without excessive scrolling.

### R4. Compact Card Header & Inline Step Counter
- In the inquiry form card, arrange "Get a free quote" and the step counter (e.g. "Step 1 of 3") on the exact same row.
- Place this row directly above the 3-segment progress bar.

### R5. Git Safety
- All modifications must be made and verified on the `test-new-feature` branch without touching or merging into `main`.

## Acceptance Criteria

### Navbar Functionality
- [ ] Navbar hides smoothly when user scrolls down and reappears immediately when user scrolls up.
- [ ] Clicking nav links smoothly scrolls to target sections without layout jumps.
- [ ] Active section dot/highlight reflects the current visible section accurately.

### Contact & Form Mobile Layout
- [ ] Contact section starts higher on mobile; `<hr>` divider is hidden on mobile (`hidden sm:block`).
- [ ] "Get a free quote" and the step counter display side-by-side on the same row directly above the 3-step progress bar.
- [ ] Option cards layout in 2 columns on mobile with the 5th card spanning across both columns (`col-span-2 sm:col-span-1`).
- [ ] Options and action button remain cleanly accessible above the mobile fold.

### Build & Integrity Verification
- [ ] `npm run build` passes with zero TypeScript, ESLint, or runtime errors.
- [ ] Git status confirms working branch is `test-new-feature`.
