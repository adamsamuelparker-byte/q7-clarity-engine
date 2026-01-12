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
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-md text-center">
        <h2 className="text-xl md:text-2xl font-medium mb-3 text-primary-foreground">
          {title}
        </h2>
        <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          {description}
        </p>
        <EnquiryForm
          preSelectedCategory={preSelectedCategory}
          preSelectedSubProduct={preSelectedSubProduct}
          triggerVariant="hero"
          triggerSize="lg"
          triggerText="Start Your Enquiry"
        />
      </div>
    </section>
  );
};