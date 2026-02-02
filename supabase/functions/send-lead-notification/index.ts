import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LeadNotificationRequest {
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  turnover: string;
  categories: string[];
  subProducts: string[];
  notes: string;
  pageUrl: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const leadData: LeadNotificationRequest = await req.json();

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Email service not configured");
    }

    const categoriesText = leadData.categories.length > 0 
      ? leadData.categories.join(", ") 
      : "Not specified";
    
    const subProductsText = leadData.subProducts.length > 0 
      ? leadData.subProducts.join(", ") 
      : "None selected";

    const emailHtml = `
      <h2>New Lead Submission</h2>
      <p>A new enquiry has been submitted on the Q7 website:</p>
      
      <h3>Contact Details</h3>
      <ul>
        <li><strong>Contact Name:</strong> ${leadData.contactName || 'Not provided'}</li>
        <li><strong>Company Name:</strong> ${leadData.companyName}</li>
        <li><strong>Email:</strong> ${leadData.email}</li>
        <li><strong>Phone:</strong> ${leadData.phone}</li>
        <li><strong>Annual Turnover:</strong> ${leadData.turnover}</li>
      </ul>
      
      <h3>Interest Areas</h3>
      <ul>
        <li><strong>Categories:</strong> ${categoriesText}</li>
        <li><strong>Specific Products:</strong> ${subProductsText}</li>
      </ul>
      
      ${leadData.notes ? `<h3>Additional Notes</h3><p>${leadData.notes}</p>` : ''}
      
      <hr>
      <p><small>Submitted from: ${leadData.pageUrl}</small></p>
      <p><small>Time: ${new Date().toISOString()}</small></p>
    `;

    // Send email using Resend API directly
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Q7 Website <onboarding@resend.dev>",
        to: ["Ibusinessfinancialsolutions@gmail.com"],
        subject: `New Lead: ${leadData.companyName}`,
        html: emailHtml,
      }),
    });

    const emailResult = await emailResponse.json();
    
    if (!emailResponse.ok) {
      console.error("Resend API error:", emailResult);
      throw new Error(emailResult.message || "Failed to send email");
    }

    console.log("Lead notification email sent successfully:", emailResult);

    return new Response(JSON.stringify({ success: true, emailResult }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending lead notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
