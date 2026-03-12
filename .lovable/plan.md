

## Add Tracking + Leads Dashboard to `/tracking`

### Overview
Create a hidden `/tracking` page with secure login that shows two tabs: **Leads** (all form submissions) and **Analytics** (visitor tracking). The existing `/admindashboard` stays as-is for site structure.

### Database Changes

1. **Create `page_views` table** for visitor tracking:
   - `id` (uuid, PK), `page_url` (text), `visited_at` (timestamptz, default now()), `device_type` (text), `screen_width` (int), `user_agent` (text), `referrer` (text)
   - RLS: INSERT allowed for everyone (anon + authenticated), SELECT only for authenticated users

2. **Update `leads` RLS**: Add a new SELECT policy allowing authenticated users to read leads (currently blocked by `USING (false)`)

3. **Create admin user account** via backend auth with the ibusiness email and password `Gold2026`
   - Auto-confirm enabled for this signup only, then disabled again

### New Files

1. **`src/components/PageViewTracker.tsx`** — lightweight component added inside `<BrowserRouter>` in App.tsx. On every route change, inserts a row into `page_views` with page URL, device type (mobile/tablet/desktop based on screen width), screen width, user agent, and referrer.

2. **`src/pages/Tracking.tsx`** — the main tracking dashboard:
   - **Login gate**: Email + password form using backend auth (`supabase.auth.signInWithPassword`). No session persistence hint in the UI — just a simple login form.
   - **Once authenticated**, shows two tabs:
     - **Leads tab**: Table of all leads with columns: Date, Contact Name, Company, Email, Phone, Turnover, Categories, Sub-products, Page URL. Sorted by newest first.
     - **Analytics tab**: Summary cards (total views, unique pages, today's views) + table of page views with date/time, page, device type, screen width, referrer.
   - Logout button in the header.

### Route Changes (App.tsx)

- Add `/tracking` route before the dynamic `/:slug` route
- Add `<PageViewTracker />` component inside `<BrowserRouter>`
- Route is **not** linked from header, footer, sitemap, or any navigation

### Security

- Login uses proper backend authentication, not client-side checks
- Leads SELECT policy scoped to authenticated users only
- Page views INSERT open to public (anonymous tracking), SELECT restricted to authenticated
- The `/tracking` URL is unlisted — only accessible if you know the URL

