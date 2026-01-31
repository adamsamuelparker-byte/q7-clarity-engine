

# Slider Redesign - Q7 Logo as Draggable Handle

## Overview
Redesign the slider so the Q7 logo IS the draggable element, sitting on a fully teal track with no white circle background.

---

## Current State

```text
Grey track ════════[White circle with tiny Q7]═══════ Teal active bar
```

The thumb currently has:
- White circular background
- Teal border
- Small Q7 logo inside

---

## Desired State

```text
Full teal track ════════════[Q7 LOGO]════════════════
                                ↑
                    Actual Q7 logo image as the handle
                    No white background, no border
```

The Q7 logo itself becomes the draggable element that users grab and slide.

---

## Technical Changes

### File: `src/components/ui/slider.tsx`

**Track Changes:**
- Make the entire track teal (`hsl(195, 65%, 28%)`) instead of grey
- Remove the separate "Range" element since the whole track is now one colour

**Thumb Changes:**
- Remove white background (`bg-white` → `bg-transparent`)
- Remove teal border
- Make the Q7 logo larger (fills the thumb area)
- Add a subtle drop shadow to the logo for depth
- Keep the circular or square shape based on the actual logo

**Specifications:**
| Property | Current | New |
|----------|---------|-----|
| Track colour | Grey with teal active | Full teal |
| Thumb background | White | Transparent |
| Thumb border | 2px teal | None |
| Logo size | 20x20px (w-5 h-5) | 32x32px (w-8 h-8) - fills thumb |
| Thumb size | 32x32px | 32x32px (or slightly larger if needed) |
| Shadow | On white circle | Directly on logo |

---

## Visual Comparison

### Before (Current)
```text
[Grey]════════[⚪Q7⚪]════════[Teal]
              ↑
      White circle with logo inside
```

### After (New)
```text
[Teal]═══════════[Q7]═══════════[Teal]
                  ↑
         Q7 logo IS the handle
         No background, just the logo
```

---

## Code Changes

```tsx
<SliderPrimitive.Track 
  className="relative h-3 w-full grow overflow-hidden rounded-full"
  style={{ backgroundColor: 'hsl(195, 65%, 28%)' }}  // Full teal track
>
  {/* No Range element needed - entire track is teal */}
</SliderPrimitive.Track>

<SliderPrimitive.Thumb 
  className="block h-8 w-8 rounded-md ring-offset-background transition-colors 
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
             cursor-grab active:cursor-grabbing overflow-visible"
  style={{ 
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)'  // Shadow on logo itself
  }}
>
  <img 
    src={q7Thumb} 
    alt="Q7" 
    className="w-full h-full object-contain pointer-events-none"
  />
</SliderPrimitive.Thumb>
```

---

## File to Modify

| File | Changes |
|------|---------|
| `src/components/ui/slider.tsx` | Full teal track, transparent thumb with Q7 logo as the handle |

