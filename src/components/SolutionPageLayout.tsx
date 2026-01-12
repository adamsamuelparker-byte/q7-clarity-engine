import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ProductTile } from "@/components/ProductTile";
import type { SolutionPageData } from "@/data/solutionPages";

interface SolutionPageLayoutProps {
  solution: SolutionPageData;
}

export const SolutionPageLayout = ({ solution }: SolutionPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-section-primary">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="section-alt border-b" style={{ borderColor: 'hsl(var(--card-border))' }}>
          <div className="container-wide py-3 md:py-4">
            <nav className="flex items-center text-xs md:text-sm text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors min-h-[44px] flex items-center">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 mx-1.5 md:mx-2" />
              <span className="text-heading">{solution.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section - Text left, image right */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20 lg:py-24">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text content - left side */}
              <div className="max-w-xl">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-6 animate-slide-up text-primary-foreground">
                  {solution.hero.headline}
                </h1>
                <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed mb-6 animate-slide-up" style={{ animationDelay: "60ms" }}>
                  {solution.hero.intro}
                </p>
                <p className="text-sm text-primary-foreground/50 animate-slide-up" style={{ animationDelay: "120ms" }}>
                  {solution.hero.tagline}
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

        {/* Hero to content transition */}
        <div className="hero-fade h-8 md:h-12" />

        {/* What This Covers - on primary background */}
        <section className="py-14 md:py-16 lg:py-20 section-primary">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-heading">
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

        {/* How Q7 Helps - on alt background */}
        <section className="py-14 md:py-16 lg:py-20 section-alt">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-heading">
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

        {/* Who This Is For - on primary background */}
        <section className="py-14 md:py-16 lg:py-20 section-primary">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-heading">
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

        {/* What Happens Next - on alt background */}
        <section className="py-14 md:py-16 lg:py-20 section-alt">
          <div className="container-lg">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-heading">
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

        {/* Sub Products Grid (if available) - on primary background */}
        {solution.subProducts && solution.subProducts.length > 0 && (
          <section className="py-14 md:py-16 lg:py-20 section-primary">
            <div className="container-xl">
              <h2 className="text-xl md:text-2xl font-medium mb-8 text-heading">
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

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container-md text-center">
            <h2 className="text-xl md:text-2xl font-medium mb-3 text-primary-foreground">
              Ready to explore {solution.name.toLowerCase()}?
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Get in touch to discuss your requirements and find the right solution for your business.
            </p>
            <div className="flex justify-center">
              <EnquiryForm
                preSelectedCategory={solution.slug}
                triggerVariant="hero"
                triggerSize="lg"
                triggerText="Start Your Enquiry"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};