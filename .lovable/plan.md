

## Replace Q7 Logo with SVG

The SVG version is the best choice — it scales perfectly at any size and works cleanly with the CSS invert filter for dark backgrounds.

### Steps

1. **Copy the SVG file** to `src/assets/q7-logo.svg`
2. **Update `Logo.tsx`** to import the SVG instead of the PNG
3. **Update `LogoDownload.tsx`** to reference the new SVG import
4. **No changes needed** to Header, Footer, or any layout — they all use the `<Logo>` component which handles variants automatically

The existing `brightness-0 invert` CSS filter for the light variant (footer/transparent header) will work correctly with the SVG, turning the dark green and dark text to white.

