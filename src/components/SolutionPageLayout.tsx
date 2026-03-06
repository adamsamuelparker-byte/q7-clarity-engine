import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ProductTile } from "@/components/ProductTile";
import { FloatingCTA } from "@/components/FloatingCTA";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { TrustedLendersCarousel } from "@/components/TrustedLendersCarousel";
import { FAQSection } from "@/components/FAQSection";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { SolutionPageData } from "@/data/solutionPages";
import { serviceFAQs } from "@/data/serviceFAQs";

interface SolutionPageLayoutProps {
  solution: SolutionPageData;
}

export const SolutionPageLayout = ({ solution }: SolutionPageLayoutProps) => {
  const [isProductsOpen, setIsProductsOpen] = useState(true);
  const showLendersCarousel = solution.slug === "business-funding";

  return (
    <div className="min-h-screen flex flex-col bg-section-primary">
      {/* Hero wrapper - includes header for unified fade treatment */}
      <div className="hero-wrapper">
        <Header transparent />

        {/* Hero Section - Text left, image right, tighter spacing */}
        <section className="text-primary-foreground py-8 md:py-12 lg:py-14">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center md:pl-[4%] lg:pl-[6%]">
              {/* Text content - left side with centered block */}
              <div className="max-w-xl mx-auto md:mx-0">
                <h1 className="text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] font-bold leading-[1.15] mb-3 animate-slide-up text-primary-foreground">
                  {solution.hero.headline}
                </h1>
                <p className="text-sm md:text-base text-accent font-medium mb-3 animate-slide-up" style={{ animationDelay: "40ms" }}>
                  {solution.hero.tagline}
                </p>
                <p className="text-sm md:text-base lg:text-lg text-primary-foreground/70 leading-relaxed animate-slide-up max-w-md" style={{ animationDelay: "80ms" }}>
                  {solution.hero.intro}
                </p>
              </div>
              
              {/* Image - right side */}
              <div className="animate-fade-in order-first lg:order-last" style={{ animationDelay: "180ms" }}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-primary-foreground/10">
                  <img 
                    src={solution.heroImage} 
                    alt={solution.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Hero to content transition */}
      <div className="hero-fade" />
      
      <main className="flex-1">
        {/* Trusted Lenders Carousel - only on business-funding page */}
        {showLendersCarousel && <TrustedLendersCarousel />}

        {/* Sub Products Grid (if available) - MOVED TO TOP, compact and collapsible */}
        {solution.subProducts && solution.subProducts.length > 0 && (
          <section className="py-6 md:py-8 section-alt border-b border-border/30">
            <div className="container-xl">
              <Collapsible open={isProductsOpen} onOpenChange={setIsProductsOpen}>
                <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg md:text-xl font-bold" style={{ color: 'hsl(222, 47%, 25%)' }}>
                    Explore {solution.name} options
                  </h2>
                  <CollapsibleTrigger className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 -mr-2">
                    <span className="hidden sm:inline">{isProductsOpen ? "Hide" : "Show"}</span>
                    <ChevronDown 
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isProductsOpen && "rotate-180"
                      )} 
                    />
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {solution.subProducts.map((subProduct, index) => (
                      <ProductTile
                        key={subProduct.id}
                        title={subProduct.name}
                        description={subProduct.description}
                        href={`/${solution.slug}/${subProduct.id}`}
                        className="animate-fade-in min-h-[120px] md:min-h-[140px]"
                        style={{ animationDelay: `${index * 40}ms` }}
                      />
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </section>
        )}

        {/* What This Covers - on alt background */}
        <section className="py-14 md:py-16 lg:py-20 section-alt">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: 'hsl(222, 47%, 25%)' }}>
                What this covers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {solution.whatThisCovers.intro}
              </p>
              <ul className="space-y-2.5 mb-6">
                {solution.whatThisCovers.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <Link 
                      to={`/${solution.slug}/${item.slug}`}
                      className="text-muted-foreground hover:text-accent transition-colors underline-offset-2 hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {solution.whatThisCovers.outro && (
                <p className="text-muted-foreground leading-relaxed">
                  {solution.whatThisCovers.outro}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Subtle divider */}
        <div className="section-divider" />

        {/* How Q7 Helps - on primary background */}
        <section className="py-14 md:py-16 lg:py-20 section-primary">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: 'hsl(222, 47%, 25%)' }}>
                How Q7 helps
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {solution.howQ7Helps.intro}
              </p>
              <ul className="space-y-2.5 mb-6">
                {solution.howQ7Helps.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {solution.howQ7Helps.outro && (
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {solution.howQ7Helps.outro}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Subtle divider */}
        <div className="section-divider" />

        {/* Who This Is For - on alt background */}
        <section className="py-14 md:py-16 lg:py-20 section-alt">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: 'hsl(222, 47%, 25%)' }}>
                Who this is for
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {solution.whoThisIsFor.intro}
              </p>
              <ul className="space-y-2.5 mb-6">
                {solution.whoThisIsFor.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {solution.whoThisIsFor.outro && (
                <p className="text-muted-foreground leading-relaxed">
                  {solution.whoThisIsFor.outro}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Subtle divider */}
        <div className="section-divider" />

        {/* What Happens Next - on primary background */}
        <section className="py-14 md:py-16 lg:py-20 section-primary">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: 'hsl(222, 47%, 25%)' }}>
                What happens next
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {solution.whatHappensNext.intro}
              </p>
              {solution.whatHappensNext.details && (
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {solution.whatHappensNext.details}
                </p>
              )}
              {solution.whatHappensNext.closing && (
                <p className="text-muted-foreground leading-relaxed">
                  {solution.whatHappensNext.closing}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section with reassurance */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground relative">
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-section-primary/10 to-transparent pointer-events-none" />
          <div className="container-md text-center relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-[1.75rem] font-semibold mb-3 text-primary-foreground">
              Ready to explore {solution.name.toLowerCase()}?
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Get in touch to discuss your requirements and find the right solution for your business.
            </p>
            <div className="flex flex-col items-center" data-cta="primary">
              <EnquiryForm
                preSelectedCategory={solution.slug}
                triggerVariant="hero"
                triggerSize="lg"
                triggerText="Start your enquiry"
              />
              <p className="text-xs text-primary-foreground/40 mt-3">
                No obligation. Speak directly with our team.
              </p>
              <div className="mt-4">
                <WhatsAppCTA variant="service" />
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