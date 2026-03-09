import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="page-frame">
      <Header />
      <main className="flex-1 section-padding">
        <div className="container-lg">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

          <section className="space-y-4 mb-10">
            <h2>1. Introduction</h2>
            <p>Q7 Business and Financial Solutions Ltd ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p>
            <p>Company No. 16917917 | Registered in England and Wales</p>
            <p>Registered Address: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, and company name when you submit an enquiry form</li>
              <li>Business turnover and funding requirements</li>
              <li>Technical data such as IP address, browser type, and device information</li>
              <li>Usage data including pages visited and time spent on our site</li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your enquiries and provide requested services</li>
              <li>Match you with suitable funding and financial solutions</li>
              <li>Communicate with you about our products and services</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2>4. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience. We use:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
            </ul>
            <p>You can manage your cookie preferences through the cookie consent banner displayed when you first visit our site.</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>5. Data Sharing</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our panel of trusted lenders and financial partners to process your funding enquiries</li>
              <li>Service providers who assist us in operating our website and business</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p>We will never sell your personal data to third parties.</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>6. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>
          </section>

          <section className="space-y-4 mb-10">
            <h2>7. Your Rights</h2>
            <p>Under the UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2>8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
            <ul className="list-none space-y-2">
              <li>Email: Ibusinessfinancialsolutions@gmail.com</li>
              <li>Phone: 0330 6113399</li>
              <li>Address: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
