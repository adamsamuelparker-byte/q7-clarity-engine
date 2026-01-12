import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground section-padding-xs">
          <div className="container-lg">
            <h1 className="animate-slide-up">
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/70 mt-4 max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: "60ms" }}>
              Get in touch to discuss your business needs
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding page-frame">
          <div className="container-lg">
            <div className="max-w-2xl">
              <div className="space-y-10">
                <div className="animate-fade-in">
                  <h2 className="mb-4 text-foreground">
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

                <div className="pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "60ms" }}>
                  <h2 className="mb-4 text-foreground">
                    Other Ways to Reach Us
                  </h2>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">Email:</span> [Placeholder]
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Phone:</span> [Placeholder]
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Address:</span> [Placeholder]
                    </p>
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