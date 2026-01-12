import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const contactInfo = {
  sales: "0330 6113399",
  whatsapp: "07454 759742",
  email: "sales@q7businessandfinancialsolutions.com",
  address: "71-75 Shelton Street, Covent Garden, London WC2H 9JQ",
};

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-section-primary">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground section-padding-xs">
          <div className="container-lg">
            <h1 className="animate-slide-up text-primary-foreground">
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/70 mt-4 max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: "60ms" }}>
              Get in touch to discuss your business needs
            </p>
          </div>
        </section>

        {/* Hero to content transition */}
        <div className="hero-fade h-6 md:h-8" />

        {/* Content Section */}
        <section className="section-padding section-primary">
          <div className="container-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Enquiry Form */}
              <div className="animate-fade-in">
                <h2 className="mb-4 text-heading">
                  Start Your Enquiry
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  Use our enquiry form to tell us about your requirements and we'll be in touch to discuss how we can help.
                </p>
                <EnquiryForm
                  triggerVariant="accent"
                  triggerSize="lg"
                  triggerText="Open Enquiry Form"
                />
              </div>

              {/* Contact Details */}
              <div className="animate-fade-in" style={{ animationDelay: "60ms" }}>
                <h2 className="mb-6 text-heading">
                  Other Ways to Reach Us
                </h2>
                <div className="space-y-5">
                  <a 
                    href={`tel:${contactInfo.sales.replace(/\s/g, '')}`}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg transition-all duration-200 group min-h-[64px]"
                    style={{ border: '1px solid hsl(var(--card-border))' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'hsl(var(--card-border-hover))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'hsl(var(--card-border))';
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-heading">Sales</p>
                      <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                        {contactInfo.sales}
                      </p>
                    </div>
                  </a>

                  <a 
                    href={`https://wa.me/44${contactInfo.whatsapp.replace(/\s/g, '').substring(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-card rounded-lg transition-all duration-200 group min-h-[64px]"
                    style={{ border: '1px solid hsl(var(--card-border))' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'hsl(var(--card-border-hover))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'hsl(var(--card-border))';
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-heading">WhatsApp</p>
                      <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                        {contactInfo.whatsapp}
                      </p>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg transition-all duration-200 group min-h-[64px]"
                    style={{ border: '1px solid hsl(var(--card-border))' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'hsl(var(--card-border-hover))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'hsl(var(--card-border))';
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-heading">Email</p>
                      <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors break-all">
                        {contactInfo.email}
                      </p>
                    </div>
                  </a>

                  <div 
                    className="flex items-start gap-4 p-4 bg-card rounded-lg min-h-[64px]"
                    style={{ border: '1px solid hsl(var(--card-border))' }}
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-heading">Address</p>
                      <p className="text-sm text-muted-foreground">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;