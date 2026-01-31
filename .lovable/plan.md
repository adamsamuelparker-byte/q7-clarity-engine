
# Complete Visual Redesign - Final Unified Plan

This plan implements all visual changes plus standardises "and" to "&" across all product cards.

---

## Part 1: Standardise "and" to "&" in Product Cards

**Files to update:**

### `src/pages/Index.tsx`

| Line | Current | New |
|------|---------|-----|
| 45 | `"Leasing and Rental"` | `"Leasing & Rental"` |
| 57 | `"Tracking and Protection"` | `"Tracking & Protection"` |
| 63 | `"Banking and Accounting"` | `"Banking & Accounting"` |

### `src/data/solutionPages.ts`

| Current Name | New Name |
|--------------|----------|
| `"Leasing and Rental"` | `"Leasing & Rental"` |
| `"Tracking and Protection"` | `"Tracking & Protection"` |
| `"Banking and Accounting"` | `"Banking & Accounting"` |

Also update parent references in `subServicePages.ts`:
- `"Leasing and Rental"` → `"Leasing & Rental"`
- etc.

**Note:** Only changing titles/names displayed in cards. Body copy in descriptions will keep natural "and" usage.

---

## Part 2: Colour System - Visible Contrast

**File: `src/index.css`**

| Token | Current | New |
|-------|---------|-----|
| `--primary` | `222 47% 18%` | `222 47% 25%` |
| `--text-heading` | `222 47% 18%` | `222 47% 25%` |
| `--accent` | `184 32% 38%` | `180 50% 32%` |
| `--accent-hover` | `184 32% 32%` | `180 50% 26%` |
| `--card` | `220 20% 99%` | `215 30% 97%` |
| `--section-alt` | `215 16% 95%` | `215 25% 93%` |
| `--card-border` | `215 20% 85%` | `215 25% 80%` |

---

## Part 3: Product Cards - Clearly Elevated

**File: `src/components/ProductTile.tsx`**

| Element | Current | New |
|---------|---------|-----|
| Background | `bg-card` | Explicit `bg-[hsl(215,30%,97%)]` |
| Border | `border-card-border` | `border-[hsl(215,25%,88%)]` (softer) |
| Shadow | Hover only | Base shadow `shadow-[0_2px_8px_rgba(0,0,0,0.04)]` |
| Padding | `p-5 md:p-6 lg:p-8` | `p-6 md:p-7 lg:p-9` |
| Title colour | `text-heading` | Explicit `text-[hsl(222,47%,25%)]` |
| Title weight | `font-semibold` | `font-bold` |
| Title spacing | `mb-2` | `mb-3` |
| CTA colour | `text-accent` | Explicit `text-[hsl(180,50%,32%)]` |

**Hover state:**
```
hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
hover:border-[hsl(222,47%,25%,0.2)]
hover:-translate-y-1.5
```

---

## Part 4: CTA Buttons - Visually Dominant

**File: `src/components/ui/button.tsx`**

Update `accent` and `hero` variants:

| Element | Current | New |
|---------|---------|-----|
| Background | `bg-accent` | `bg-[hsl(180,50%,32%)]` |
| Hover | `hover:bg-accent-hover` | `hover:bg-[hsl(180,50%,26%)]` |
| Text | `text-accent-foreground` | `text-white font-semibold` |
| Shadow | None | `shadow-md` |

---

## Part 5: Trusted Lenders Carousel - Logo Image

**File: `src/components/TrustedLendersCarousel.tsx`**

Revert to using the original `lender-logos.png` image in a sliding marquee with:
- Visible grey background band (`bg-[#f0f2f5]`)
- Top and bottom borders for clear separation
- Fade edges for smooth visual

```tsx
import lenderLogos from "@/assets/lenders/lender-logos.png";

// Display as single scrolling image strip
<img src={lenderLogos} alt="Trusted funding partners" className="h-12 md:h-14 w-auto" />
```

---

## Part 6: Section Headings - Force Royal Blue

**File: `src/pages/Index.tsx`**
```tsx
<h2 className="text-[hsl(222,47%,25%)] font-bold mb-2">
  Our Solutions
</h2>
```

**File: `src/components/SolutionPageLayout.tsx`**

Force royal blue on all section headings:
- "What this covers"
- "How Q7 helps"
- "Who this is for"
- "What happens next"

**File: `src/components/CapabilityBubbles.tsx`**

Royal blue text with teal hover for capability names.

---

## Part 7: Floating CTA - Bolder

**File: `src/components/FloatingCTA.tsx`**

| Element | Current | New |
|---------|---------|-----|
| Container shadow | `shadow-xl` | `shadow-2xl` |
| Container padding | `p-5` | `p-6` |
| Background | `bg-primary/95` | `bg-[hsl(222,47%,22%)]` (solid) |

---

## Part 8: Card Component Base

**File: `src/components/ui/card.tsx`**

Update base styling with visible off-white background and soft shadow.

---

## Complete File Summary

| # | File | Changes |
|---|------|---------|
| 1 | `src/index.css` | Update 7 CSS variables for more visible colours |
| 2 | `src/pages/Index.tsx` | Standardise "and" → "&", force royal blue heading |
| 3 | `src/data/solutionPages.ts` | Standardise "and" → "&" in solution names |
| 4 | `src/data/subServicePages.ts` | Standardise parent name references |
| 5 | `src/components/ProductTile.tsx` | Explicit colours, stronger shadow, more padding, bold titles |
| 6 | `src/components/ui/button.tsx` | Explicit teal for accent/hero variants |
| 7 | `src/components/TrustedLendersCarousel.tsx` | Use logo image, visible grey band |
| 8 | `src/components/SolutionPageLayout.tsx` | Force royal blue on all headings |
| 9 | `src/components/CapabilityBubbles.tsx` | Royal blue text with teal hover |
| 10 | `src/components/FloatingCTA.tsx` | Larger, bolder styling |
| 11 | `src/components/ui/card.tsx` | Visible off-white background, soft shadow |

**Total: 11 files modified**

---

## Visual Impact Summary

After implementation:

| Element | Before | After |
|---------|--------|-------|
| Card titles | "Leasing and Rental" | "Leasing & Rental" |
| Headings | Dark grey | Clearly royal blue |
| Cards | Barely visible | Off-white with shadow, elevated |
| CTAs | Muted teal | Saturated teal, stands out |
| Lender section | Text bubbles | Logo image in grey band |

**Colour Hierarchy:**
- **Royal Blue** = Authority (headings, emphasis)
- **Teal** = Action (CTAs only)
- **Slate Grey** = Structure (borders, icons, dividers)
