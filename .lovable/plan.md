
# Add "Your Name" Field to Standard Enquiry Form

## Overview
Add a contact name field to the main enquiry form so we capture who is making the enquiry, not just the company name. This will match the Quick Landing form which already collects both names.

## Changes Required

### 1. Database Update
Add a new column to store the contact person's name:
- **Table**: `leads`
- **New Column**: `contact_name` (text, nullable to maintain compatibility with existing leads)

### 2. Standard Enquiry Form Update
Modify `src/components/EnquiryForm.tsx`:
- Add a "Your Name" field in Step 3 (Contact Details)
- Position it before the Company Name field
- Update the form state to include `contactName`
- Include contact name in both database insert and email notification

### 3. Email Notification Update
Modify `supabase/functions/send-lead-notification/index.ts`:
- Add `contactName` to the expected request interface
- Include the contact person's name in the email HTML template

## Form Field Layout (Step 3)

The updated Step 3 will display:
1. Your Name (new field)
2. Company Name
3. Annual Turnover
4. Email
5. Phone
6. Additional Notes

## Technical Details

**Form State Change:**
```typescript
const [formData, setFormData] = useState({
  contactName: "",  // NEW
  companyName: "",
  turnover: "",
  email: "",
  phone: "",
  notes: "",
});
```

**Validation Update:**
```typescript
const canSubmit = formData.contactName && formData.companyName && 
  formData.turnover && formData.email && formData.phone;
```

## Confirmation Points
- Both forms will now collect: Your Name + Business/Company Name
- Leads are saved to the database with the new `contact_name` field
- Email notifications will include the contact person's name
- Users are redirected to `/thank-you` page after submission (already working)
- All leads visible in admin dashboard (already working)
