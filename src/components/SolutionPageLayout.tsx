import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ProductTile } from "@/components/ProductTile";
import { FloatingCTA } from "@/components/FloatingCTA";
import type { SolutionPageData } from "@/data/solutionPages";

interface SolutionPageLayoutProps {
  solution: SolutionPageData;
}

export const SolutionPageLayout = ({ solution }: SolutionPageLayoutProps) => {
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
                <h1 className="text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] font-semibold leading-[1.15] mb-3 animate-slide-up text-primary-foreground">
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
        
        {/* Bottom fade overlay */}
        <div className="hero-bottom-fade" />
      </div>

      {/* Hero to content transition - smoother blend */}
      <div className="hero-fade h-8 md:h-12" />
      
      <main className="flex-1">

        {/* What This Covers - on alt background */}
        <section className="py-14 md:py-16 lg:py-20 section-alt">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-heading">
                What This Covers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {solution.whatThisCovers.intro}
              </p>
              <ul className="space-y-2.5 mb-6">
                {solution.whatThisCovers.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{item}</span>
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
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-heading">
                How Q7 Helps
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
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-heading">
                Who This Is For
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
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-heading">
                What Happens Next
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

        {/* Sub Products Grid (if available) - on alt background */}
        {solution.subProducts && solution.subProducts.length > 0 && (
          <section className="py-14 md:py-16 lg:py-20 section-alt">
            <div className="container-xl">
              <h2 className="text-xl md:text-2xl font-semibold mb-8 text-heading">
                Explore {solution.name} Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {solution.subProducts.map((subProduct, index) => (
                  <ProductTile
                    key={subProduct.id}
                    title={subProduct.name}
                    description={subProduct.description}
                    href={`/${solution.slug}/${subProduct.id}`}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 40}ms` }}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

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
                triggerText="Start Your Enquiry"
              />
              <p className="text-xs text-primary-foreground/40 mt-3">
                No obligation. One of the team will be in touch.
              </p>
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