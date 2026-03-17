

## Plan: Update Contact Details, Add E-Moped Image, Verify CTA Colors

### 1. LoanSliderHero & EmergencyFundingBanner — Already Correct
The "Get started" button and "minutes" text already use `hsl(340, 75%, 55%)` (Splash Pink). The EmergencyFundingBanner component is already placed on both `/quick` and `/` pages. No changes needed here.

### 2. Add Delivery Bike Image to E-Moped Page
- Copy `user-uploads://IMG_7498.png` to `src/assets/eskuta-delivery-bikes.png`
- Update `src/pages/EMopedEBikePage.tsx` — add the image in the Eskuta section (around line 153-172), displayed as a full-width rounded image with appropriate alt text

### 3. Update Contact Numbers & Email Site-Wide

**Old values → New values:**
- Phone: `0330 6113399` → `07378 375160`
- WhatsApp: `07454 759742` → `07378 375160`
- Email: `Ibusinessfinancialsolutions@gmail.com` → `Info@q7businessandfinancialsolutions.com`
- WhatsApp URL number: `447454759742` → `447378375160`

**Files to update:**

| File | Changes |
|------|---------|
| `src/components/Footer.tsx` | Update contactInfo object (phone, whatsapp, email) |
| `src/pages/Contact.tsx` | Update contactInfo object (phone, whatsapp, email) |
| `src/pages/TermsAndConditions.tsx` | Update email and phone in contact section |
| `src/pages/PrivacyPolicy.tsx` | Update email and phone in contact section |
| `src/components/WhatsAppCTA.tsx` | Update WhatsApp link number to `447378375160` |
| `src/components/EmergencyFundingBanner.tsx` | Update WhatsApp link number to `447378375160` |
| `supabase/functions/send-lead-notification/index.ts` | Update `to` email address to `Info@q7businessandfinancialsolutions.com` and redeploy |

Total: 7 files updated, 1 image copied, 1 edge function redeployed.

