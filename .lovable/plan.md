

# Complete Quick PPC Landing Page Optimisation + Global Font Size Increase

## Overview
This plan consolidates all requested changes into a single implementation:
1. **Global font size increase** (site-wide)
2. Hero section refinements (headline, spacing, CTA styling)
3. Custom Q7 branded slider thumb
4. Form flow restructuring (turnover question, card percentage)

---

## Part 0: Global Font Size Increase

### File: `src/index.css`

The simplest and most effective way to increase all font sizes proportionally is to adjust the base `font-size` on the `html` element. All `rem` and `em` units throughout the site will scale automatically.

**Current state:**
No explicit font-size set on `html` (defaults to browser's 16px)

**Proposed change:**
Add `font-size: 106.25%` to the `html` rule (equivalent to 17px base instead of 16px)

This gives approximately a **6% increase** across all text without breaking any layouts.

| Text Type | Current (16px base) | New (17px base) |
|-----------|---------------------|-----------------|
| Body text (1rem) | 16px | 17px |
| Small text (0.875rem) | 14px | 14.9px |
| Large text (1.125rem) | 18px | 19.1px |
| H1 desktop (2.75rem) | 44px | 46.75px |
| H2 desktop (1.5rem) | 24px | 25.5px |

**Alternative options:**
- 112.5% = 18px base (~12% increase) - may be too large
- 110% = 17.6px base (~10% increase) - middle ground
- 106.25% = 17px base (~6% increase) - subtle but noticeable

**Implementation:**
```css
html {
  scroll-behavior: smooth;
  font-size: 106.25%; /* 17px base - 6% larger than default */
}
```

---

## Part 1: Hero Section Refinements

### File: `src/components/LoanSliderHero.tsx`

### 1.1 Headline Update

**Current:**
```
Explore your business loan options in minutes
```

**New (two-line structure with accent highlight):**
```
Looking for business funding?
Find out what options may be available in minutes
                                              ↑
                                    (teal accent on "minutes" only)
```

### 1.2 Spacing Reduction

| Element | Current | New |
|---------|---------|-----|
| Section top padding | `pt-6 sm:pt-8 md:pt-10` | `pt-3 sm:pt-4 md:pt-5` |
| Section bottom padding | `pb-10 sm:pb-12 md:pb-14` | `pb-6 sm:pb-8 md:pb-10` |
| Headline to supporting text | `mb-2` | `mb-1` |
| Supporting text to card | `mb-6` | `mb-4` |
| Card to CTA | `mb-5` | `mb-4` |

### 1.3 Plus/Minus Button Hover States

Add subtle darkening on hover:
```
hover:bg-[hsl(220,45%,14%)]
```

### 1.4 CTA Button Refinements

| Property | Current | New |
|----------|---------|-----|
| Text size | `text-base` | `text-lg` |
| Font weight | `font-semibold` | `font-bold` |
| Vertical padding | `py-6` | `py-4` |
| Arrow | Static | Animate right on hover |

---

## Part 2: Custom Q7 Slider Thumb

### File: `src/components/ui/slider.tsx`

Replace the plain white thumb with a branded Q7 symbol:

```
  ┌─────────┐
  │   Q7    │  ← Navy text, bold, ~10px
  │   ──    │  ← Navy underline bar
  └─────────┘
```

**Specifications:**
- Size: 32×32px (up from 24×24px)
- Background: White
- Border: 2px teal accent
- Q7 text: Navy bold
- Underline: Navy bar beneath

---

## Part 3: Form Flow Restructuring

### File: `src/components/QuickEnquiryForm.tsx`

### Current Flow (8 steps):
1. Purpose of loan
2. Accept card payments? (Yes/No)
3. Card volume per month (if Yes)
4. Residential status
5. Time trading
6. Business type
7. Your details
8. Contact details

### New Flow (9 steps):
1. Purpose of loan
2. **Monthly turnover** (new)
3. Accept card payments? (Yes/No)
4. **Card sales percentage** (if Yes)
5. Residential status
6. Time trading
7. Business type
8. Your details
9. Contact details

### New Data Options

**Monthly Turnover:**
- Under £5,000
- £5,000 - £10,000
- £10,000 - £25,000
- £25,000 - £50,000
- £50,000 - £100,000
- Over £100,000

**Card Sales Percentage:**
- 0-25%
- 25-50%
- 50-75%
- 75-100%

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Add `font-size: 106.25%` to html rule |
| `src/components/LoanSliderHero.tsx` | Headline, spacing, CTA styling, button hovers |
| `src/components/ui/slider.tsx` | Custom Q7 branded thumb |
| `src/components/QuickEnquiryForm.tsx` | New turnover step, card percentage, step renumbering |

---

## Visual Summary

### Hero Section After Changes

```text
┌─────────────────────────────────────────────────────┐
│  [Q7 Logo]                              [Nav Links] │
├─────────────────────────────────────────────────────┤
│      Looking for business funding?                  │  ← Line 1 (white)
│      Find out what options may be                   │
│      available in minutes                           │  ← "minutes" (teal)
│                                                     │
│      From £10,000 to £200,000 plus. No obligation.  │  ← Supporting (70%)
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │   HOW MUCH FUNDING DO YOU NEED?               │  │
│  │                                               │  │
│  │              £50,000                          │  │  ← Large navy
│  │                                               │  │
│  │   (−)  ═══════[Q7]════════════════════  (+)  │  │  ← Q7 thumb
│  │   £10,000                        £200,000+   │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│               [ Get started → ]                     │  ← Teal CTA
│                                                     │
│         No obligation. No upfront fees.             │
│         Speak directly with our team.               │
└─────────────────────────────────────────────────────┘
```

### Colour Usage (Strict)

| Colour | Usage |
|--------|-------|
| Navy | Amount, plus/minus buttons, Q7 thumb text/bar |
| White | Card, headline text, CTA text, thumb background |
| Teal | CTA, active slider, thumb border, "minutes" word |

