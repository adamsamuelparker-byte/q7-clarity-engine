

## Merge Tracking into Admin Dashboard

Combine the `/tracking` page content into `/admindashboard` as tabs — **Site Structure**, **Leads**, and **Analytics** — all behind the same login gate.

### Changes

**`src/pages/AdminDashboard.tsx`** — Full rewrite:
- Add the login gate from Tracking.tsx (email/password form using backend auth)
- Once authenticated, show 3 tabs:
  - **Site Structure** — the existing admin dashboard content (stats cards, static pages list, solution pages accordion)
  - **Leads** — the LeadsTab component from Tracking.tsx
  - **Analytics** — the AnalyticsTab component from Tracking.tsx
- Add logout button in the header
- Update the static pages list to include all missing pages (Privacy Policy, Terms & Conditions, Logo Download, Quick Landing, E-Moped/E-Bike)

**`src/App.tsx`** — Keep `/tracking` route as-is (no breaking change) but it can optionally redirect to `/admindashboard`

No database changes needed — same tables and RLS policies apply.

