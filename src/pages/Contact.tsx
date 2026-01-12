import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FloatingCTA } from "@/components/FloatingCTA";
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
      {/* Hero wrapper - includes header for unified fade treatment */}
      <div className="hero-wrapper">
        <Header transparent />
        
        {/* Hero Section */}
        <section className="text-primary-foreground py-8 md:py-10">
          <div className="container-lg">
            <h1 className="text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] font-semibold leading-[1.15] animate-slide-up text-primary-foreground">
              Contact Us
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-primary-foreground/70 mt-3 max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: "60ms" }}>
              Get in touch to discuss your business needs
            </p>
          </div>
        </section>
      </div>

      {/* Hero to content transition */}
      <div className="hero-fade h-4 md:h-6" />

      <main className="flex-1">
        {/* Content Section */}
        <section className="section-padding section-alt">
          <div className="container-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Enquiry Form */}
              <div className="animate-fade-in">
                <h2 className="mb-3 text-heading text-lg md:text-xl font-semibold">
                  Start Your Enquiry
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                  Use our enquiry form to tell us about your requirements and we'll be in touch to discuss how we can help.
                </p>
                <div data-cta="primary">
                  <EnquiryForm
                    triggerVariant="accent"
                    triggerSize="lg"
                    triggerText="Open Enquiry Form"
                  />
                </div>
                <p className="text-xs text-muted-foreground/60 mt-2">
                  No obligation. We'll help you understand your options.
                </p>
              </div>

              {/* Contact Details */}
              <div className="animate-fade-in" style={{ animationDelay: "60ms" }}>
                <h2 className="mb-5 text-heading text-lg md:text-xl font-semibold">
                  Other Ways to Reach Us
                </h2>
                <div className="space-y-4">
                  <a 
                    href={`tel:${contactInfo.sales.replace(/\s/g, '')}`}
                    className="flex items-start gap-3 p-3 bg-card rounded-lg border border-card-border hover:border-card-border-hover transition-all duration-200 group min-h-[52px]"
                  >
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 text-foreground/50 group-hover:text-accent transition-colors" />
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
                    className="flex items-start gap-3 p-3 bg-card rounded-lg border border-card-border hover:border-card-border-hover transition-all duration-200 group min-h-[52px]"
                  >
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-4 w-4 text-foreground/50 group-hover:text-accent transition-colors" />
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
                    className="flex items-start gap-3 p-3 bg-card rounded-lg border border-card-border hover:border-card-border-hover transition-all duration-200 group min-h-[52px]"
                  >
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 text-foreground/50 group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-heading">Email</p>
                      <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors break-all">
                        {contactInfo.email}
                      </p>
                    </div>
                  </a>

                  <div 
                    className="flex items-start gap-3 p-3 bg-card rounded-lg border border-card-border min-h-[52px]"
                  >
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-foreground/50" />
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

      {/* Floating CTA */}
      <FloatingCTA />

      <Footer />
    </div>
  );
};

export default Contact;