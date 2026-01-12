import { EnquiryForm } from "./EnquiryForm";

interface CTASectionProps {
  title?: string;
  description?: string;
  preSelectedCategory?: string;
  preSelectedSubProduct?: string;
}

export const CTASection = ({
  title = "Ready to find the right solution?",
  description = "Get in touch to discuss how we can help organise the financial solutions your business needs.",
  preSelectedCategory,
  preSelectedSubProduct,
}: CTASectionProps) => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative">
      {/* Subtle top fade from content */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-section-primary/10 to-transparent pointer-events-none" />
      
      <div className="container-md text-center relative z-10">
        <h2 className="text-xl md:text-2xl lg:text-[1.75rem] font-semibold mb-3 text-primary-foreground">
          {title}
        </h2>
        <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col items-center" data-cta="primary">
          <EnquiryForm
            preSelectedCategory={preSelectedCategory}
            preSelectedSubProduct={preSelectedSubProduct}
            triggerVariant="hero"
            triggerSize="lg"
            triggerText="Start Your Enquiry"
          />
          <p className="text-xs text-primary-foreground/40 mt-3">
            No obligation. We'll help you understand your options.
          </p>
        </div>
      </div>
    </section>
  );
};