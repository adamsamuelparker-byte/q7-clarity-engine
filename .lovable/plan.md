

## Fix Site Issues

Five changes based on the site review:

1. **Fix secondary section title** in `src/pages/Index.tsx` — change "Explore Leasing & Rental Options" to "More Business Solutions" and update the subtitle accordingly

2. **Tighten desktop hero padding** in `src/pages/Index.tsx` — add `lg:pt-6 lg:pb-10` to bring hero content up on larger screens

3. **Update `public/robots.txt`** — add `Disallow: /tracking` and `Disallow: /admindashboard` to prevent indexing

4. **Fix forwardRef warnings** on `src/components/Logo.tsx` and `src/components/CookieConsent.tsx` — wrap with `React.forwardRef`

5. **Verify admin user exists** — check if the admin account was created, and if not, create it via an edge function or auth signup

