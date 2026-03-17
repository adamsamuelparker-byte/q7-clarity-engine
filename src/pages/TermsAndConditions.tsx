import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="page-frame">
      <Header />
      <main className="flex-1 section-padding">
        <div className="container-lg">
          <h1>Terms and Conditions</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

          <section className="space-y-4 mb-10">
            <h2>1. Introduction</h2>
            <p>These Terms and Conditions govern your use of the website operated by Q7 Business and Financial Solutions Ltd ("we", "our", "us"). By accessing and using this website, you accept and agree to be bound by these terms.</p>
            <p>Company No. 16917917 | Registered in England and Wales</p>
            <p>Registered Address: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>2. Our Services</h2>
            <p>Q7 Business and Financial Solutions Ltd acts as a business finance broker. We connect businesses with suitable funding solutions from our panel of trusted lenders. We do not provide financial advice, and any funding arrangements are subject to the lender's own terms and conditions.</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>3. Eligibility</h2>
            <p>Our services are intended for UK-based businesses. By submitting an enquiry, you confirm that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are authorised to act on behalf of the business</li>
              <li>The information you provide is accurate and complete</li>
              <li>Your business is registered and operating in the United Kingdom</li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2>4. No Guarantee of Funding</h2>
            <p>While we endeavour to match businesses with appropriate funding solutions, we cannot guarantee that funding will be approved. All funding decisions are made by the lender and are subject to their assessment criteria, due diligence, and terms.</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>5. Fees and Charges</h2>
            <p>Our introductory service is provided at no cost to the applicant. Any fees, charges, or interest rates associated with a funding product will be clearly communicated by the lender before you enter into any agreement.</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>6. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and images, is the property of Q7 Business and Financial Solutions Ltd and is protected by copyright laws. You may not reproduce, distribute, or use any content without our prior written consent.</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Q7 Business and Financial Solutions Ltd shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our services. We do not accept liability for any losses resulting from funding decisions made by third-party lenders.</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>8. Third-Party Links</h2>
            <p>Our website may contain links to external websites. We are not responsible for the content, privacy practices, or availability of these third-party sites.</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>9. Changes to These Terms</h2>
            <p>We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>10. Governing Law</h2>
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>11. Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us:</p>
            <ul className="list-none space-y-2">
              <li>Email: Info@q7businessandfinancialsolutions.com</li>
              <li>Landline: 0330 6331199</li>
              <li>Mobile: 07378 375160</li>
              <li>Address: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
