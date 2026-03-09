

## Plan: Replace Logo with PNG Image

The user wants to simplify the Logo component to use the existing `q7-logo.png` asset instead of the current CSS-constructed logo with text.

### Changes

**Update `src/components/Logo.tsx`**
- Remove the CSS-based Q7 icon, "Business and Financial" text, and Check icon
- Import and render `q7-logo.png` as an `<img>` element
- Keep the existing props interface (`showText`, `className`, `iconClassName`, `textClassName`, `variant`) for backward compatibility, though most will be unused
- Apply appropriate sizing classes to the image
- The `variant` prop can apply a CSS `filter: brightness(...)` or `invert` for the light variant used in the footer/dark backgrounds

