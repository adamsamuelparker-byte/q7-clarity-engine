

# Fix Lender Carousel & Product Card Visibility

## Problems Identified

Looking at the current site, I can see:

1. **Lender Carousel**: The grey background band IS visible, and logos ARE showing, but:
   - Logos appear very small (h-12 = 48px height)
   - The marquee animation may not be smooth due to incorrect width configuration
   - Need more visual separation from the hero above

2. **Product Cards**: The off-white color is being applied (`hsl(215, 30%, 97%)`) but:
   - 97% lightness is almost pure white - barely distinguishable
   - The section background (`section-alt` at 93% lightness) is too similar
   - Cards don't stand out enough from the page

---

## Part 1: Fix Lender Carousel

**File: `src/components/TrustedLendersCarousel.tsx`**

Make the following changes:

| Element | Current | New |
|---------|---------|-----|
| Logo height | `h-12 md:h-14` | `h-16 md:h-20` (64px/80px - much more visible) |
| Background | `#f0f2f5` | `#e8eaef` (slightly darker grey for more contrast) |
| Container padding | `py-6 md:py-8` | `py-8 md:py-10` |
| Top border | `border-y` | `border-t-4 border-b` with accent color hint |
| Animation setup | Single flex container | Ensure proper width for seamless loop |

**Updated component structure:**
```tsx
<section 
  className="py-8 md:py-10"
  style={{ 
    backgroundColor: '#e8eaef',
    borderTop: '3px solid hsl(215, 25%, 85%)',
    borderBottom: '1px solid hsl(215, 25%, 85%)'
  }}
>
```

---

## Part 2: Fix Product Card Backgrounds

The current off-white (`hsl(215, 30%, 97%)`) is too close to white. Need to make cards visually distinct.

**File: `src/components/ProductTile.tsx`**

| Element | Current | New |
|---------|---------|-----|
| Background | `hsl(215, 30%, 97%)` | `hsl(215, 35%, 95%)` (more visible blue-tint) |
| Border | `hsl(215, 25%, 88%)` | `hsl(215, 30%, 85%)` (slightly more visible) |
| Shadow | `0 2px 8px rgba(0,0,0,0.04)` | `0 2px 12px rgba(0,0,0,0.06)` (stronger) |

**Updated style:**
```tsx
style={{
  backgroundColor: 'hsl(215, 35%, 95%)',
  border: '1px solid hsl(215, 30%, 85%)',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
}}
```

---

## Part 3: Fix CapabilityBubbles Cards (WHAT WE CAN HELP WITH section)

These cards also use `bg-card` which may not be applying correctly.

**File: `src/components/CapabilityBubbles.tsx`**

Change from CSS variable to explicit styling:
```tsx
<Link
  className="group block rounded-lg px-3 py-3 md:px-4 md:py-4 ..."
  style={{ 
    backgroundColor: 'hsl(215, 35%, 95%)',
    border: '1px solid hsl(215, 30%, 85%)'
  }}
>
```

---

## Part 4: Update section-alt Background for More Contrast

**File: `src/index.css`**

Make the alternating section background lighter so cards stand out more:

| Token | Current | New |
|-------|---------|-----|
| `--section-alt` | `215 25% 93%` | `215 20% 96%` (lighter, so cards contrast better) |
| `--card` | `215 30% 97%` | `215 35% 93%` (darker, more visible) |

This creates more separation: section background at 96%, cards at 93%.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/TrustedLendersCarousel.tsx` | Larger logos, darker grey background, thicker top border |
| `src/components/ProductTile.tsx` | More visible off-white background, stronger border and shadow |
| `src/components/CapabilityBubbles.tsx` | Explicit background color instead of CSS variable |
| `src/index.css` | Adjust `--section-alt` and `--card` for better contrast |

---

## Visual Impact

After these changes:

| Element | Before | After |
|---------|--------|-------|
| Lender logos | 48-56px tall, static-looking | 64-80px tall, clearly animated |
| Lender section | Barely visible grey | Clear grey band with top accent |
| Product cards | Nearly white, blend in | Visible off-white with blue tint, elevated |
| Capability cards | White, blend in | Visible off-white with clear border |

The goal is for these elements to be **obviously different** from the page background at first glance.

