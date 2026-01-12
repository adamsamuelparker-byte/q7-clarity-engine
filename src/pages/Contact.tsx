import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground section-padding-sm">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 animate-slide-up">
                Contact Us
              </h1>
              <p className="text-lg text-primary-foreground/80 animate-slide-up" style={{ animationDelay: "100ms" }}>
                Get in touch to discuss your business needs
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <div className="space-y-8">
                <div className="animate-fade-in">
                  <h2 className="text-xl font-semibold mb-4 text-foreground">
                    Start Your Enquiry
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Use our enquiry form to tell us about your requirements and we'll be in touch to discuss how we can help.
                  </p>
                  <EnquiryForm
                    triggerVariant="accent"
                    triggerSize="lg"
                    triggerText="Open Enquiry Form"
                  />
                </div>

                <div className="pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "100ms" }}>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">
                    Other Ways to Reach Us
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Email:</strong> [Placeholder]
                    </p>
                    <p>
                      <strong className="text-foreground">Phone:</strong> [Placeholder]
                    </p>
                    <p>
                      <strong className="text-foreground">Address:</strong> [Placeholder]
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
