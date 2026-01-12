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
      <div className="container-narrow text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {title}
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          {description}
        </p>
        <EnquiryForm
          preSelectedCategory={preSelectedCategory}
          preSelectedSubProduct={preSelectedSubProduct}
          triggerVariant="hero"
          triggerSize="xl"
          triggerText="Start Your Enquiry"
        />
      </div>
    </section>
  );
};
