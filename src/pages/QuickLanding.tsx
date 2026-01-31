import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";

const QuickLanding = () => {
  return (
    <div className="min-h-screen flex flex-col bg-section-primary">
      {/* Hero wrapper - includes header for unified fade treatment */}
      <div className="hero-wrapper">
        <Header transparent />
        
        {/* Hero Section - Minimal for business loans */}
        <section className="text-primary-foreground pt-16 pb-20 sm:pt-20 sm:pb-24 md:pt-24 md:pb-32">
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
            {/* Placeholder - user will provide hero content */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 animate-slide-up text-primary-foreground">
              Business Loans
            </h1>
            
            <p className="text-base sm:text-lg text-primary-foreground/70 mb-8 animate-slide-up" style={{ animationDelay: "40ms" }}>
              Quick and simple business funding solutions.
            </p>
            
            {/* Enquiry CTA */}
            <div className="animate-slide-up" style={{ animationDelay: "80ms" }}>
              <EnquiryForm
                triggerVariant="hero"
                triggerSize="lg"
                triggerText="Enquire Now"
                preSelectedService="business-funding"
                preSelectedServiceName="Business Funding"
              />
            </div>
          </div>
        </section>
      </div>

      <main className="flex-1">
        {/* Content will be added as needed */}
      </main>

      <Footer />
    </div>
  );
};

export default QuickLanding;
