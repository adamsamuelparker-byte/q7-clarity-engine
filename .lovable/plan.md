

# Complete Site Redesign and Updates Plan

This comprehensive plan covers all requested changes in a single implementation.

---

## Summary of All Changes

| Area | Change |
|------|--------|
| **Category Renames** | "Vehicles and Mobility" → "Vehicles & Fleet Solutions", "Payments and Merchant" → "Payments & Merchant Services" |
| **Image Updates** | Tracking (GPS trackers), Delivery (bike images), Fleet (van images) |
| **Floating CTA** | Bolder, bigger button and text |
| **Product Cards Position** | Move to top of solution pages, make compact and collapsible |
| **Design System Overhaul** | New premium colour palette, typography, and component styling |
| **Trusted Lenders Section** | New animated logo carousel below hero |

---

## Part 1: Design System Overhaul

### 1.1 New Colour Palette

**Current → New:**

| Token | Current (Charcoal) | New (Royal Blue) |
|-------|-------------------|------------------|
| `--primary` | `220 20% 14%` | `222 47% 22%` (Deep Royal Blue) |
| `--accent` | `174 35% 40%` (Teal) | `184 32% 40%` (Muted Teal-Blue) |
| `--border` | `220 12% 78%` | `215 20% 75%` (Soft Slate Blue-Grey) |

**New Colour Hierarchy (strict 3 colours + neutrals):**

1. **Primary - Deep Royal Blue** (`222 47% 22%`): Headings, navigation highlights, key emphasis
2. **Accent - Muted Teal-Blue** (`184 32% 40%`): CTAs only (Start Your Enquiry, WhatsApp, Submit)
3. **Support - Soft Slate Blue-Grey** (`215 20% 68%`): Borders, dividers, icons, secondary UI

### 1.2 Typography Updates

| Element | Current | New |
|---------|---------|-----|
| H1 | `font-semibold` | `font-bold` (stronger weight for confidence) |
| H2, H3 | `text-heading` (charcoal) | `text-heading` (royal blue) |
| Body | Grey | Neutral grey, comfortable line spacing |
| CTA Text | Mixed case | Sentence case, slight letter-spacing increase |

### 1.3 Files to Update

| File | Changes |
|------|---------|
| `src/index.css` | Complete CSS variable overhaul for new colour system |
| `tailwind.config.ts` | Update custom colour definitions |

---

## Part 2: Product Card Redesign

### 2.1 Premium Card Styling

| Element | Current | New |
|---------|---------|-----|
| Background | Pure white (`card`) | Off-white (`--card: 220 20% 99%`) |
| Border | Light grey | Soft slate blue-grey, low opacity |
| Shadow | Minimal | Soft depth shadow |
| Padding | `p-4 md:p-5 lg:p-6` | `p-5 md:p-6 lg:p-8` (more breathing room) |
| Title colour | Charcoal | Royal blue |
| CTA style | Text with chevron | Text "Learn more →" in teal, arrow animates on hover |

### 2.2 Hover Behaviour

- Gentle lift upward (`-translate-y-1`)
- Slightly stronger shadow
- Subtle royal blue border at low opacity
- Slow, refined transition (`duration-300`)

### 2.3 File to Update

| File | Changes |
|------|---------|
| `src/components/ProductTile.tsx` | Update styling, animation, hover states |

---

## Part 3: Primary CTA Button Updates

### 3.1 Button Styling

| Element | Current | New |
|---------|---------|-----|
| Background | Teal | Muted teal-blue (accent colour) |
| Text | White | White, medium-bold weight |
| Corners | `rounded-md` | `rounded-lg` (rounded but not pill) |
| Effects | Shadow, hover glow | No gradients, no glow, simple hover darken |

### 3.2 CTA Reassurance Text

Add supporting text beneath CTAs where appropriate:
> "No obligation. Speak directly with our team."

### 3.3 Files to Update

| File | Changes |
|------|---------|
| `src/components/ui/button.tsx` | Update accent/hero variants, add letter-spacing |
| `src/components/CTASection.tsx` | Ensure reassurance text present |
| `src/components/FloatingCTA.tsx` | Make bolder/bigger (already planned) |

---

## Part 4: Floating CTA Enhancement

### Current → New

| Element | Current | New |
|---------|---------|-----|
| Container padding | `p-4` | `p-5` |
| Container shadow | `shadow-lg` | `shadow-xl` |
| Container gap | `gap-3` | `gap-4` |
| Button size | `default` (h-10) | `lg` (h-12) |
| Button text | `text-sm` | `text-base` |
| WhatsApp text | `text-xs` | `text-sm` |

### File to Update

| File | Changes |
|------|---------|
| `src/components/FloatingCTA.tsx` | Update sizing and prominence |

---

## Part 5: Solution Page Layout - Products at Top

### 5.1 New Layout Order

1. Hero section
2. **Sub Products Grid (NEW POSITION)** - compact, collapsible
3. What This Covers
4. How Q7 Helps
5. Who This Is For
6. What Happens Next
7. CTA Section

### 5.2 Collapsible Implementation

- Import `Collapsible`, `CollapsibleContent`, `CollapsibleTrigger` from Radix UI
- Default state: expanded (cards visible)
- Toggle header with chevron icon that rotates
- Compact grid: `grid-cols-2 lg:grid-cols-4` with `gap-3`
- Reduced section padding: `py-6 md:py-8`

### File to Update

| File | Changes |
|------|---------|
| `src/components/SolutionPageLayout.tsx` | Reorganise layout, add collapsible wrapper |

---

## Part 6: Trusted Lenders Section (New Component)

### 6.1 Design Specifications

- **Position**: Directly below hero on homepage and business-funding page
- **Purpose**: Trust and reassurance only
- **Background**: Soft light grey/off-white band
- **Heading** (optional): "Trusted funding partners" or "Access to a wide panel of UK lenders"

### 6.2 Logo Carousel

**Lenders from image (17 logos):**
1. 365 Finance
2. YouLend
3. Funding Circle
4. iwoca
5. Capital On Tap
6. Triver
7. ReCap
8. Capify
9. Sigma Lending
10. Swiftfund
11. Got Capital
12. MixCap
13. Bizcap
14. MCL Finance
15. Cube Funder
16. Multifi
17. Swish Fund

**Layout:**
- All logos inline on single horizontal row
- Evenly spaced, vertically centred
- No individual white bubble cards
- Smooth conveyor belt animation (right to left)
- Slow, constant, non-distracting movement

**Animation:**
- CSS keyframe animation for continuous scroll
- Duplicated logo set for seamless loop
- Speed: ~30-40 seconds for full cycle

**No interactive controls:**
- No arrows
- No pagination dots
- No manual scrolling
- No hover zoom

### 6.3 Implementation

**New files to create:**
| File | Purpose |
|------|---------|
| `src/components/TrustedLendersCarousel.tsx` | New component with animated logo carousel |
| `src/assets/lenders/` | Directory for lender logo images (extracted from user image) |

**Files to update:**
| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Import and add TrustedLendersCarousel after hero |
| `src/components/SolutionPageLayout.tsx` | Optionally add to business-funding page |
| `src/index.css` | Add marquee animation keyframes |

---

## Part 7: Category Name Changes

### 7.1 Text Updates

| Current | New |
|---------|-----|
| "Vehicles and Mobility" | "Vehicles & Fleet Solutions" |
| "Payments and Merchant" | "Payments & Merchant Services" |

### 7.2 Files to Update

| File | Occurrences |
|------|-------------|
| `src/pages/Index.tsx` | 2 product titles |
| `src/components/CapabilityBubbles.tsx` | 2 capability names |
| `src/components/IntentSelector.tsx` | 2 service names |
| `src/components/EnquiryForm.tsx` | Category names |
| `src/components/Header.tsx` | Navigation links |
| `src/data/solutionPages.ts` | Solution names, headlines, navigation |
| `src/data/subServicePages.ts` | ~15 parentName updates |

---

## Part 8: Image Updates

### 8.1 Tracking and Protection

- Update heroImage to show GPS trackers / fleet tracking devices
- Suggested: GPS device on dashboard, fleet tracking map interface

### 8.2 Delivery and Courier Vehicles

- Custom heroImage override showing electric cargo/delivery bikes
- Just Eat / Deliveroo style bike imagery

### 8.3 Fleet Vehicles

- Custom heroImage showing business fleet vehicles
- Row of branded vans, delivery fleet

### Files to Update

| File | Changes |
|------|---------|
| `src/data/solutionPages.ts` | Update tracking-protection heroImage |
| `src/data/subServicePages.ts` | Add custom heroImage overrides for delivery-courier-vehicles and fleet-vehicles |

---

## Complete File Change Summary

| File | Changes |
|------|---------|
| `src/index.css` | Complete colour system overhaul, new CSS variables, marquee animation |
| `tailwind.config.ts` | Update custom colour definitions for royal blue palette |
| `src/components/ui/button.tsx` | Update accent/hero variants, letter-spacing for CTAs |
| `src/components/ProductTile.tsx` | Premium card styling, hover effects, royal blue titles |
| `src/components/FloatingCTA.tsx` | Bigger, bolder sizing |
| `src/components/SolutionPageLayout.tsx` | Move products to top, add collapsible, add lenders section |
| `src/components/TrustedLendersCarousel.tsx` | **NEW** - Animated lender logo carousel |
| `src/pages/Index.tsx` | Category renames, add TrustedLendersCarousel |
| `src/components/CapabilityBubbles.tsx` | Category renames |
| `src/components/IntentSelector.tsx` | Category renames |
| `src/components/EnquiryForm.tsx` | Category renames |
| `src/components/Header.tsx` | Navigation category renames |
| `src/data/solutionPages.ts` | Category renames, image updates |
| `src/data/subServicePages.ts` | Category renames (~15), image overrides (3) |
| `src/assets/lenders/` | **NEW** - Lender logo images |

**Total: 14 files modified, 2 new files/directories created**

---

## Technical Notes

### Lender Logo Handling
- Logos will be copied from the user-uploaded reference image
- Individual logo files will be saved to `src/assets/lenders/`
- Original logo colours and proportions will be preserved
- No modifications to logo designs

### Animation Performance
- CSS-only marquee animation (no JavaScript)
- Uses `translateX` for GPU acceleration
- Duplicated logo set ensures seamless infinite loop
- `will-change: transform` for smooth rendering

### Colour Accessibility
- Royal blue provides strong contrast against white/off-white backgrounds
- Muted teal-blue accent meets WCAG AA for button text
- Body text grey ensures comfortable reading

