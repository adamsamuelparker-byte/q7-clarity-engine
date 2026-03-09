

## Plan: Add remaining sub-service data to subServicePages.ts

All content for the 6 remaining categories has now been provided. The implementation is straightforward data addition.

### What will be done

Update `src/data/subServicePages.ts` to add sub-service entries for:

1. **asset-finance** (4 sub-services): equipment-finance, machinery-finance, technology-finance, specialist-assets
2. **leasing-rental** (4 sub-services): vehicle-leasing, equipment-leasing, fleet-leasing, short-term-rental
3. **vehicles-mobility** (8 sub-services): electric-bikes, electric-mopeds, branded-vehicles, fleet-solutions, business-vehicles, electric-vehicles, delivery-courier-vehicles, micro-mobility
4. **tracking-protection** (5 sub-services): vehicle-tracking, asset-tracking, thatcham-tracking, cctv-webcams, asset-recovery
5. **banking-accounting** (4 sub-services): business-bank-accounts, business-credit-cards, accounting-services, tax-compliance-support
6. **business-support** (5 sub-services): operational-support, back-office-services, admin-support, partner-introductions, advisory-support

### Technical details

- Single file change: `src/data/subServicePages.ts`
- Replace existing placeholder entries for these 6 categories with the full expanded content provided
- Add the two helper functions (`getSubService`, `getSubServicesForParent`) if not already present
- No interface changes needed — same `SubServicePageData` structure
- No routing or component changes required — `SubProductPage` and `SubServicePageLayout` already handle rendering

