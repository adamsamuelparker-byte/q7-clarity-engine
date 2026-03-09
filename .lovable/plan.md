

## Consolidated Plan

### 1. Create Cookie Consent Banner (`src/components/CookieConsent.tsx`)
- Fixed bottom banner, appears after 1-second delay if no `q7-cookie-consent` in localStorage
- "We use cookies" heading + description linking to Privacy Policy
- Accept (accent button) and Decline (outline button) — stores choice in localStorage
- Smooth slide-up animation, matches site brand styling

### 2. Update Footer (`src/components/Footer.tsx`)
- Add "Privacy Policy" and "Terms and Conditions" to the company navigation column
- Keep all existing structure and styling intact

### 3. Create Privacy Policy Page (`src/pages/PrivacyPolicy.tsx`)
- Standard legal page with privacy policy content for Q7 Business and Financial Solutions Ltd

### 4. Create Terms and Conditions Page (`src/pages/TermsAndConditions.tsx`)
- Standard legal page with terms and conditions content

### 5. Update App Routes (`src/App.tsx`)
- Add `/privacy-policy` and `/terms-and-conditions` routes (above dynamic slug routes)
- Render `<CookieConsent />` inside `BrowserRouter`

---

*Waiting for more items before implementation. Reply when ready to proceed or keep adding.*

