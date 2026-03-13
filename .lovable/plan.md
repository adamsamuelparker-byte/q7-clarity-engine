

## Fix Pink CTA Colors + Add Emergency Funding Banner

### Problem 1: Colors not updated to Splash Pink
The `/quick` page LoanSliderHero still uses Racing Blue (`hsl(195, 65%, 28%)`) for:
- The "Get started" button background
- The word "minutes" in the heading

These should use Splash Pink (`hsl(340, 75%, 55%)`) per the design system where accent/CTA elements use pink.

### Problem 2: Emergency Funding Banner
Create a new `EmergencyFundingBanner` component and place it on the `/quick` page between the hero and lender carousel.

### Changes

**`src/components/LoanSliderHero.tsx`**
- Change "Get started" button from `hsl(195, 65%, 28%)` to `hsl(340, 75%, 55%)` (Splash Pink)
- Change "minutes" span from `hsl(195, 65%, 28%)` to `hsl(340, 75%, 55%)`

**`src/components/EmergencyFundingBanner.tsx`** (new)
- Red background (`#c0392b`), white text, rounded corners, padding
- Desktop: single row — lightning bolt icon (semi-transparent white box behind it), heading + subtext center, green WhatsApp button right
- Mobile: stacked vertically, button full-width
- Heading: "Need emergency business funding?"
- Subtext: "No forms, no waiting — speak to a specialist right now"
- WhatsApp button: `#25D366` background, white text, WhatsApp icon (MessageCircle from lucide), border-radius 7px, subtle pulse animation via box-shadow keyframes
- WhatsApp link: `https://wa.me/447454759742?text=Emergency%20Funding%20-%20Hi%2C%20I%20would%20like%20to%20discuss%20emergency%20business%20funding%20options%20for%20my%20business.` (using the real number already in use)

**`src/pages/QuickLanding.tsx`**
- Import and place `<EmergencyFundingBanner />` between the hero-wrapper div and `<TrustedLendersCarousel />`

**`src/pages/Index.tsx`**
- Also place `<EmergencyFundingBanner />` between the hero-wrapper and `<TrustedLendersCarousel />`

